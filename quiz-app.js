document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const jlptSelectionScreen = document.getElementById('jlptSelectionScreen');
    const quizTypeScreen = document.getElementById('quizTypeScreen');
    const levelSelectionScreen = document.getElementById('levelSelectionScreen');
    const quizScreen = document.getElementById('quizScreen');
    const resultsScreen = document.getElementById('resultsScreen');
    
    // Buttons
    const n5Btn = document.getElementById('n5Btn');
    const n4Btn = document.getElementById('n4Btn');
    const kanjiToEnglishBtn = document.getElementById('kanjiToEnglishBtn');
    const englishToKanjiBtn = document.getElementById('englishToKanjiBtn');
    const backToJlptBtn = document.getElementById('backToJlptBtn');
    const backToQuizTypeBtn = document.getElementById('backToQuizTypeBtn');
    const backToLevelSelectionBtn = document.getElementById('backToLevelSelectionBtn');
    const restartBtn = document.getElementById('restartBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Progress elements
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    // Quiz display elements
    const quizTitle = document.getElementById('quizTitle');
    const questionDisplay = document.getElementById('questionDisplay');
    const kanjiDisplay = document.getElementById('kanjiDisplay');
    const meaningDisplay = document.getElementById('meaningDisplay');
    const answersContainer = document.getElementById('answersContainer');
    const currentQuestionNumber = document.getElementById('currentQuestionNumber');
    const totalQuestions = document.getElementById('totalQuestions');
    const currentLevel = document.getElementById('currentLevel');
    
    // Info display elements
    const selectedJlptLevel = document.getElementById('selectedJlptLevel');
    const selectedQuizType = document.getElementById('selectedQuizType');
    const selectedJlptType = document.getElementById('selectedJlptType');
    const resultsQuizType = document.getElementById('resultsQuizType');
    const resultsJlpt = document.getElementById('resultsJlpt');
    const resultsLevelNum = document.getElementById('resultsLevelNum');
    
    // Results elements
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreText = document.getElementById('scoreText');
    const resultsDetails = document.getElementById('resultsDetails');
    
    // Level grid
    const levelGrid = document.getElementById('levelGrid');
    
    // Quiz State
    let quizState = {
        jlptLevel: '', // 'N5' or 'N4'
        quizType: '', // 'kanjiToEnglish' or 'englishToKanji'
        selectedLevel: 1, // 1-10
        currentQuestionIndex: 0,
        score: 0,
        totalQuestions: 0,
        questionsAnswered: 0,
        currentQuestion: null,
        kanjiPool: [],
        userAnswers: []
    };
    
    // Initialize level selection buttons
    function generateLevelButtons() {
        levelGrid.innerHTML = '';
        
        for (let i = 1; i <= 10; i++) {
            const button = document.createElement('button');
            button.className = 'level-select-btn';
            button.textContent = i;
            
            // Calculate how many kanji in this level
            const kanjiCount = Math.min(i * 10, kanjiData[quizState.jlptLevel].length);
            
            const kanjiCountSpan = document.createElement('span');
            kanjiCountSpan.className = 'kanji-count';
            kanjiCountSpan.textContent = `${kanjiCount} kanji`;
            
            button.appendChild(document.createElement('br'));
            button.appendChild(kanjiCountSpan);
            
            button.addEventListener('click', () => selectLevel(i));
            
            levelGrid.appendChild(button);
        }
    }
    
    // Select a specific level
    function selectLevel(levelNum) {
        quizState.selectedLevel = levelNum;
        
        // Remove selected class from all buttons
        document.querySelectorAll('.level-select-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked button
        document.querySelectorAll('.level-select-btn')[levelNum - 1].classList.add('selected');
        
        // Start the quiz for this level
        startQuizForLevel();
    }
    
    // Start quiz for selected level
    function startQuizForLevel() {
        // Initialize kanji pool for selected level
        initKanjiPool();
        
        // Update UI
        quizTitle.textContent = `${quizState.jlptLevel} Level ${quizState.selectedLevel} Quiz`;
        resultsJlpt.textContent = quizState.jlptLevel;
        resultsLevelNum.textContent = quizState.selectedLevel;
        resultsQuizType.textContent = quizState.quizType === 'kanjiToEnglish' ? 'Kanji to English' : 'English to Kanji';
        
        // Show appropriate screen
        levelSelectionScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        resultsScreen.classList.add('hidden');
        
        // Reset quiz state
        quizState.currentQuestionIndex = 0;
        quizState.score = 0;
        quizState.questionsAnswered = 0;
        quizState.userAnswers = [];
        
        // Start the quiz
        startQuiz();
    }
    
    // Initialize kanji pool based on selected level
    function initKanjiPool() {
        // Get all kanji for selected JLPT level
        const allKanji = [...kanjiData[quizState.jlptLevel]];
        
        // For level X, take first X*10 kanji
        const kanjiCount = quizState.selectedLevel * 10;
        quizState.kanjiPool = allKanji.slice(0, Math.min(kanjiCount, allKanji.length));
        
        // Shuffle the pool for randomness
        shuffleArray(quizState.kanjiPool);
    }
    
    // Start the quiz
    function startQuiz() {
        // Reset question counter
        quizState.currentQuestionIndex = 0;
        quizState.totalQuestions = quizState.kanjiPool.length;
        
        // Update UI
        currentLevel.textContent = quizState.selectedLevel;
        totalQuestions.textContent = quizState.totalQuestions;
        updateProgress();
        
        // Generate and display first question
        generateQuestion();
    }
    
    // Generate a new question
    function generateQuestion() {
        if (quizState.currentQuestionIndex >= quizState.totalQuestions) {
            // Quiz completed
            showResults();
            return;
        }
        
        // Get current kanji
        const kanji = quizState.kanjiPool[quizState.currentQuestionIndex];
        quizState.currentQuestion = kanji;
        
        // Update display based on quiz type
        if (quizState.quizType === 'kanjiToEnglish') {
            // Kanji to English: show kanji, hide meaning
            kanjiDisplay.textContent = kanji.kanji;
            meaningDisplay.textContent = '';
            kanjiDisplay.classList.remove('hidden');
            meaningDisplay.classList.add('hidden');
        } else {
            // English to Kanji: show meaning, hide kanji
            // Get a random meaning from the list
            const randomMeaningIndex = Math.floor(Math.random() * kanji.meaning.length);
            meaningDisplay.textContent = kanji.meaning[randomMeaningIndex];
            kanjiDisplay.textContent = '';
            kanjiDisplay.classList.add('hidden');
            meaningDisplay.classList.remove('hidden');
        }
        
        // Update question counter
        currentQuestionNumber.textContent = quizState.currentQuestionIndex + 1;
        
        // Generate answers
        generateAnswers(kanji);
        
        // Reset UI for new question
        nextBtn.classList.add('hidden');
        answersContainer.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
        
        // Update progress
        updateProgress();
    }
    
    // Generate answer options
    function generateAnswers(correctKanji) {
        // Clear previous answers
        answersContainer.innerHTML = '';
        
        // Determine number of wrong answers based on level
        let wrongAnswerCount;
        if (quizState.selectedLevel <= 2) {
            wrongAnswerCount = 2;
        } else if (quizState.selectedLevel <= 5) {
            wrongAnswerCount = 3;
        } else {
            wrongAnswerCount = 4;
        }
        
        // Prepare correct answer based on quiz type
        let correctAnswer;
        let answerType; // 'meaning' or 'kanji'
        
        if (quizState.quizType === 'kanjiToEnglish') {
            // Quiz type: Kanji to English
            answerType = 'meaning';
            // Get correct meaning (randomly select one if multiple)
            correctAnswer = correctKanji.meaning.length > 1 
                ? correctKanji.meaning[Math.floor(Math.random() * correctKanji.meaning.length)]
                : correctKanji.meaning[0];
        } else {
            // Quiz type: English to Kanji
            answerType = 'kanji';
            correctAnswer = correctKanji.kanji;
        }
        
        // Create array of all possible wrong answers
        const allKanji = [...kanjiData[quizState.jlptLevel]];
        const wrongKanji = allKanji.filter(k => k.kanji !== correctKanji.kanji);
        shuffleArray(wrongKanji);
        
        // Select wrong answers
        const wrongAnswers = wrongKanji.slice(0, wrongAnswerCount).map(k => {
            if (answerType === 'meaning') {
                // For Kanji to English, get meanings as wrong answers
                return k.meaning.length > 1 
                    ? k.meaning[Math.floor(Math.random() * k.meaning.length)]
                    : k.meaning[0];
            } else {
                // For English to Kanji, get kanji as wrong answers
                return k.kanji;
            }
        });
        
        // Combine all answers
        const allAnswers = [correctAnswer, ...wrongAnswers];
        shuffleArray(allAnswers);
        
        // Create answer buttons
        allAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(answer, correctAnswer, correctKanji));
            answersContainer.appendChild(button);
        });
    }
    
    // Check if answer is correct
    function checkAnswer(selectedAnswer, correctAnswer, correctKanji) {
        const isCorrect = selectedAnswer === correctAnswer;
        const answerButtons = answersContainer.querySelectorAll('.answer-btn');
        
        // Disable all buttons
        answerButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedAnswer && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        // Record user's answer
        quizState.userAnswers.push({
            kanji: correctKanji.kanji,
            meaning: correctKanji.meaning,
            correctAnswer: correctAnswer,
            userAnswer: selectedAnswer,
            isCorrect: isCorrect,
            quizType: quizState.quizType
        });
        
        // Update score
        if (isCorrect) {
            quizState.score++;
        }
        
        // Show next button
        nextBtn.classList.remove('hidden');
        quizState.questionsAnswered++;
    }
    
    // Update progress bar and text
    function updateProgress() {
        const progressPercent = (quizState.currentQuestionIndex / quizState.totalQuestions) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Update progress text
        progressText.textContent = `Question ${quizState.currentQuestionIndex + 1} of ${quizState.totalQuestions}`;
    }
    
    // Show results screen
    function showResults() {
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        
        // Calculate final score
        const totalAnswered = quizState.userAnswers.length;
        const correctCount = quizState.userAnswers.filter(a => a.isCorrect).length;
        const percentage = Math.round((correctCount / totalAnswered) * 100);
        
        // Update score display
        scoreText.textContent = `${percentage}%`;
        
        // Animate score circle
        scoreCircle.style.background = `conic-gradient(var(--primary) ${percentage}%, var(--darker-bg) ${percentage}% 100%)`;
        
        // Display detailed results
        displayResultsDetails();
    }
    
    // Display detailed results
    function displayResultsDetails() {
        resultsDetails.innerHTML = '';
        
        // Add summary
        const totalAnswered = quizState.userAnswers.length;
        const correctCount = quizState.userAnswers.filter(a => a.isCorrect).length;
        
        const summary = document.createElement('div');
        summary.className = 'result-item';
        summary.innerHTML = `
            <div><strong>Summary</strong></div>
            <div>${correctCount} out of ${totalAnswered} correct</div>
        `;
        resultsDetails.appendChild(summary);
        
        // Add each question result
        quizState.userAnswers.forEach((answer, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            let questionDisplay, correctDisplay, userAnswerDisplay;
            
            if (answer.quizType === 'kanjiToEnglish') {
                // Kanji to English results
                questionDisplay = `<span class="result-kanji">${answer.kanji}</span>`;
                correctDisplay = `Correct: ${answer.correctAnswer}`;
                userAnswerDisplay = answer.userAnswer;
            } else {
                // English to Kanji results
                questionDisplay = `<span class="result-meaning">${answer.correctAnswer}</span>`;
                correctDisplay = `Correct: <span class="result-kanji">${answer.kanji}</span>`;
                userAnswerDisplay = `<span class="result-kanji">${answer.userAnswer}</span>`;
            }
            
            resultItem.innerHTML = `
                <div>
                    ${questionDisplay}
                    <div>${correctDisplay}</div>
                </div>
                <div class="${answer.isCorrect ? 'correct' : 'wrong'}">
                    ${answer.isCorrect ? '✓' : '✗'} ${userAnswerDisplay}
                </div>
            `;
            resultsDetails.appendChild(resultItem);
        });
    }
    
    // Utility function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Event Listeners
    n5Btn.addEventListener('click', () => {
        quizState.jlptLevel = 'N5';
        selectedJlptLevel.textContent = 'N5';
        selectedJlptType.textContent = 'N5';
        jlptSelectionScreen.classList.add('hidden');
        quizTypeScreen.classList.remove('hidden');
    });
    
    n4Btn.addEventListener('click', () => {
        quizState.jlptLevel = 'N4';
        selectedJlptLevel.textContent = 'N4';
        selectedJlptType.textContent = 'N4';
        jlptSelectionScreen.classList.add('hidden');
        quizTypeScreen.classList.remove('hidden');
    });
    
    kanjiToEnglishBtn.addEventListener('click', () => {
        quizState.quizType = 'kanjiToEnglish';
        selectedQuizType.textContent = 'Kanji to English';
        quizTypeScreen.classList.add('hidden');
        levelSelectionScreen.classList.remove('hidden');
        generateLevelButtons();
    });
    
    englishToKanjiBtn.addEventListener('click', () => {
        quizState.quizType = 'englishToKanji';
        selectedQuizType.textContent = 'English to Kanji';
        quizTypeScreen.classList.add('hidden');
        levelSelectionScreen.classList.remove('hidden');
        generateLevelButtons();
    });
    
    backToJlptBtn.addEventListener('click', () => {
        quizTypeScreen.classList.add('hidden');
        jlptSelectionScreen.classList.remove('hidden');
        resetProgress();
    });
    
    backToQuizTypeBtn.addEventListener('click', () => {
        levelSelectionScreen.classList.add('hidden');
        quizTypeScreen.classList.remove('hidden');
        resetProgress();
    });
    
    backToLevelSelectionBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        levelSelectionScreen.classList.remove('hidden');
        resetProgress();
    });
    
    restartBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        jlptSelectionScreen.classList.remove('hidden');
        resetProgress();
    });
    
    nextBtn.addEventListener('click', () => {
        quizState.currentQuestionIndex++;
        generateQuestion();
    });
    
    // Reset progress bar
    function resetProgress() {
        progressBar.style.width = '0%';
        progressText.textContent = 'Select difficulty to begin';
    }
    
    // Initialize
    resetProgress();
});