/*************************************************************************************************/
/******************************* START OF KANJI **************************************************/
/*************************************************************************************************/
// Game state
let currentGameState = {
    mode: null, // 'KtoE' , 'EtoK' , 'KtoJ' or 'JtoK'
    level: null,
    kanji: null,
    currentQuestion: 0,
    score: 0,
    questions: [],
    totalQuestions: 0,
    questionResults: [] // Store individual question results
};

const gameModes = [
    { mode: "KtoE", name: "Kanji to English/Sinhala", des: "You have to select correct English/Sinhala words for Kanji" },
    { mode: "EtoK", name: "English/Sinhala to Kanji", des: "You have to select correct Kanji for English/Sinhala words" },
    { mode: "KtoJ", name: "Kanji to Hiragana", des: "You have to select correct Hiragana words for Kanji" },
    { mode: "JtoK", name: "Hiragana to Kanji", des: "You have to select correct Kanji for Hiragana words" }
];

// Step 1: Select Game Mode
function selectGameMode() {
    const container = document.querySelector('#content');
    container.innerHTML = `
        <div class="practice-header">
            <h2>Kanji Practice</h2>
            <p>Choose your practice mode</p>
        </div>
        <div class="mode-grid">
            ${gameModes.map(mode => `
                <div class="mode-card" data-mode="${mode.mode}">
                    <div class="mode-name">${mode.name}</div>
                    <div class="mode-description">${mode.des}</div>
                </div>
            `).join('')}
        </div>
        <div class="practice-controls">
            <button class="btn btn-secondary" onclick="goToHomePage()">
                <i class="fas fa-arrow-left"></i> Back to Home
            </button>
        </div>
    `;

    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', function() {
            currentGameState.mode = this.dataset.mode;
            selectLevel();
        });
    });
}

// Level selection data
const level = [
    { kanji: "一", des: "10 kanji characters" },
    { kanji: "二", des: "20 kanji characters" },
    { kanji: "三", des: "30 kanji characters" },
    { kanji: "四", des: "40 kanji characters" },
    { kanji: "五", des: "50 kanji characters" },
    { kanji: "六", des: "60 kanji characters" },
    { kanji: "七", des: "70 kanji characters" },
    { kanji: "八", des: "80 kanji characters" },
    { kanji: "九", des: "90 kanji characters" },
    { kanji: "十", des: "100 kanji characters" }
];

// Step 2: Select Level
function selectLevel() {
    const container = document.querySelector('#content');
    container.innerHTML = `
        <div class="practice-header">
            <h2>Select Level</h2>
            <p>Choose your difficulty level (${currentGameState.mode === 'KtoE' ? 'Kanji to English/Sinhala' : currentGameState.mode === 'EtoK' ? 'English/Sinhala to Kanji' : currentGameState.mode === 'KtoJ' ? 'Kanji to Hiragana' : 'Hiragana to Kanji'})</p>
        </div>
        <div class="level-grid">
            ${level.map((lvl, index) => `
                <div class="level-card" data-level="${index}">
                    <div class="level-number-kanji">${lvl.kanji}</div>
                    <div class="level-number">Level ${index + 1}</div>
                    <div class="level-description">${lvl.des}</div>
                </div>
            `).join('')}
        </div>
        <div class="practice-controls">
            <button class="btn btn-secondary" onclick="selectGameMode()">
                <i class="fas fa-arrow-left"></i> Back to Mode Selection
            </button>
        </div>
    `;

    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', function() {
            currentGameState.level = parseInt(this.dataset.level);
            startPractice();
        });
    });
}

// Level selection data
const range = [
    { level: "0", range: "10", answers: "3" },
    { level: "1", range: "20", answers: "3" },
    { level: "2", range: "30", answers: "3" },
    { level: "3", range: "40", answers: "4" },
    { level: "4", range: "50", answers: "4" },
    { level: "5", range: "60", answers: "4" },
    { level: "6", range: "70", answers: "4" },
    { level: "7", range: "80", answers: "5" },
    { level: "8", range: "90", answers: "5" },
    { level: "9", range: "100", answers: "5" },
];

// Step 3: Start Practice
function startPractice() {
    const currentRange = range.find(r => r.level === currentGameState.level.toString());
    currentGameState.totalQuestions = parseInt(currentRange.range);
    
    generateQuestion(currentGameState.totalQuestions);
    displayQuestion();
}

// Generate Questions
function generateQuestion(rangeValue) {
    const shuffledKanji = [...kanji].sort(() => Math.random() - 0.5).slice(0, rangeValue);
    const wrongCount = parseInt(range.find(r => r.level === currentGameState.level.toString()).answers);
    
    currentGameState.questions = shuffledKanji.map(item => {
        const example = item.example[Math.floor(Math.random() * item.example.length)];
        
        let question, correctAnswer;
        
        // Set question and correct answer based on mode
        switch(currentGameState.mode) {
            case 'KtoE':
                question = example.kanji;
                correctAnswer = example.eng;
                break;
            case 'EtoK':
                question = example.eng;
                correctAnswer = example.kanji;
                break;
            case 'KtoJ':
                question = example.kanji;
                correctAnswer = example.kana;
                break;
            case 'JtoK':
                question = example.kana;
                correctAnswer = example.kanji;
                break;
        }
        
        // Get wrong answers
        const otherExamples = kanji
            .filter(k => k.kanji !== item.kanji)
            .flatMap(k => k.example)
            .sort(() => Math.random() - 0.5)
            .slice(0, wrongCount);
        
        let wrongAnswers = [];
        otherExamples.forEach(ex => {
            switch(currentGameState.mode) {
                case 'KtoE':
                    wrongAnswers.push(ex.eng);
                    break;
                case 'EtoK':
                    wrongAnswers.push(ex.kanji);
                    break;
                case 'KtoJ':
                    wrongAnswers.push(ex.kana);
                    break;
                case 'JtoK':
                    wrongAnswers.push(ex.kanji);
                    break;
            }
        });
        
        // Combine and shuffle answers
        const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        
        return {
            question: question,
            correctAnswer: correctAnswer,
            answers: allAnswers
        };
    });
    
    currentGameState.currentQuestion = 0;
    currentGameState.score = 0;
    currentGameState.questionResults = []; // Reset question results
}

// Step 4: Display Question
function displayQuestion() {
    const container = document.querySelector('#content');
    const currentQ = currentGameState.questions[currentGameState.currentQuestion];
    
    // Get the original kanji data to access English/Sinhala translations
    const originalKanjiItem = kanji.find(k => 
        k.example.some(ex => 
            (currentGameState.mode === 'KtoE' && ex.kanji === currentQ.question) ||
            (currentGameState.mode === 'EtoK' && ex.eng === currentQ.question) ||
            (currentGameState.mode === 'KtoJ' && ex.kanji === currentQ.question) ||
            (currentGameState.mode === 'JtoK' && ex.kana === currentQ.question)
        )
    );
    
    const originalExample = originalKanjiItem?.example.find(ex => 
        (currentGameState.mode === 'KtoE' && ex.kanji === currentQ.question) ||
        (currentGameState.mode === 'EtoK' && ex.eng === currentQ.question) ||
        (currentGameState.mode === 'KtoJ' && ex.kanji === currentQ.question) ||
        (currentGameState.mode === 'JtoK' && ex.kana === currentQ.question)
    );
    
    let questionHTML = '';
    let answersHTML = '';
    
    // Question display logic
    if(currentGameState.mode === 'EtoK') {
        questionHTML = `
            <div class="question-display">
                <h3 class="lang lang-english">${originalExample?.eng || currentQ.question}</h3>
                <h3 class="lang lang-sinhala">${originalExample?.sin || currentQ.question}</h3>
            </div>
        `;
    } else {
        questionHTML = `
            <div class="question-display">
                <h3>${currentQ.question}</h3>
            </div>
        `;
    }
    
    // Answers display logic
    if(currentGameState.mode === 'KtoE') {
        answersHTML = currentQ.answers.map(answer => {
            // Find the original example for this answer
            const answerKanji = kanji.find(k => 
                k.example.some(ex => ex.eng === answer)
            );
            const answerExample = answerKanji?.example.find(ex => ex.eng === answer);
            
            return `
                <button class="answer-btn" data-answer="${answer}">
                    <span class="lang lang-english">${answer}</span>
                    <span class="lang lang-sinhala">${answerExample?.sin || answer}</span>
                </button>
            `;
        }).join('');
    } else {
        answersHTML = currentQ.answers.map(answer => `
            <button class="answer-btn" data-answer="${answer}">
                ${answer}
            </button>
        `).join('');
    }
    
    container.innerHTML = `
        <div class="practice-header">
            <h2>Question ${currentGameState.currentQuestion + 1} of ${currentGameState.totalQuestions}</h2>
        </div>
        <div class="question-container">
            ${questionHTML}
            <div class="answers-grid">
                ${answersHTML}
            </div>
        </div>
        <div class="practice-controls">
            <button class="btn btn-secondary" onclick="selectLevel()">
                <i class="fas fa-arrow-left"></i> Back to Level Selection
            </button>
            <button class="btn btn-warning" onclick="finishAttempt()">
                <i class="fas fa-flag-checkered"></i> Finish Attempt
            </button>
        </div>
    `;
    
    // Apply language visibility after content is loaded
    setTimeout(() => {
        if (typeof applyCurrentLanguage === 'function') {
            applyCurrentLanguage();
        }
    }, 0);
    
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            checkAnswer(this.dataset.answer);
        });
    });
}

// Step 5: Check Answer
function checkAnswer(selectedAnswer) {
    const currentQ = currentGameState.questions[currentGameState.currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    
    // Store the result of this question
    currentGameState.questionResults.push({
        questionNumber: currentGameState.currentQuestion + 1,
        question: currentQ.question,
        correctAnswer: currentQ.correctAnswer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect,
        options: currentQ.answers
    });
    
    if(isCorrect) {
        currentGameState.score++;
    }
    
    nextQuestion();
}

// Step 6: Next Question
function nextQuestion() {
    currentGameState.currentQuestion++;
    
    if(currentGameState.currentQuestion < currentGameState.totalQuestions) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Finish Attempt function
function finishAttempt() {
    const remainingQuestions = currentGameState.totalQuestions - currentGameState.currentQuestion;
    
    // Mark remaining questions as skipped
    for(let i = currentGameState.currentQuestion; i < currentGameState.totalQuestions; i++) {
        const currentQ = currentGameState.questions[i];
        currentGameState.questionResults.push({
            questionNumber: i + 1,
            question: currentQ.question,
            correctAnswer: currentQ.correctAnswer,
            userAnswer: null,
            isCorrect: false,
            isSkipped: true,
            options: currentQ.answers
        });
    }
    
    showResults(remainingQuestions);
}

// Step 7: Show Results
function showResults(skipped = 0) {
    const container = document.querySelector('#content');
    const totalQuestions = currentGameState.totalQuestions;
    const percentage = totalQuestions > 0 ? Math.round((currentGameState.score / totalQuestions) * 100) : 0;
    
    // Generate individual question results HTML
    const questionResultsHTML = currentGameState.questionResults.map(result => {
        const originalKanjiItem = kanji.find(k => 
            k.example.some(ex => 
                ex.kanji === result.question || ex.eng === result.question || ex.kana === result.question
            )
        );
        const originalExample = originalKanjiItem?.example.find(ex => 
            ex.kanji === result.question || ex.eng === result.question || ex.kana === result.question
        );
        
        let questionDisplay = result.question;
        let correctAnswerDisplay = result.correctAnswer;
        
        // For KtoE mode, show both English and Sinhala for answers
        if(currentGameState.mode === 'KtoE') {
            const correctKanji = kanji.find(k => 
                k.example.some(ex => ex.eng === result.correctAnswer)
            );
            const correctExample = correctKanji?.example.find(ex => ex.eng === result.correctAnswer);
            
            correctAnswerDisplay = `
                <span class="lang lang-english">${result.correctAnswer}</span>
                <span class="lang lang-sinhala">${correctExample?.sin || result.correctAnswer}</span>
            `;
            
            if(result.userAnswer) {
                const userKanji = kanji.find(k => 
                    k.example.some(ex => ex.eng === result.userAnswer)
                );
                const userExample = userKanji?.example.find(ex => ex.eng === result.userAnswer);
                
                var userAnswerDisplay = `
                    <span class="lang lang-english">${result.userAnswer}</span>
                    <span class="lang lang-sinhala">${userExample?.sin || result.userAnswer}</span>
                `;
            }
        }
        
        // For EtoK mode, show both English and Sinhala for question
        if(currentGameState.mode === 'EtoK') {
            questionDisplay = `
                <span class="lang lang-english">${originalExample?.eng || result.question}</span>
                <span class="lang lang-sinhala">${originalExample?.sin || result.question}</span>
            `;
        }
        
        const userAnswerText = result.isSkipped ? 
            '<span class="skipped">Skipped</span>' : 
            (result.userAnswer ? (currentGameState.mode === 'KtoE' ? userAnswerDisplay : result.userAnswer) : '');
        
        return `
            <div class="question-result ${result.isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-question">
                    <strong>Q${result.questionNumber}:</strong> ${questionDisplay}
                </div>
                <div class="result-details">
                    <div class="result-answer">
                        <strong>Correct:</strong> ${currentGameState.mode === 'KtoE' ? correctAnswerDisplay : result.correctAnswer}
                    </div>
                    <div class="result-answer">
                        <strong>Your Answer:</strong> ${userAnswerText}
                    </div>
                    <div class="result-status ${result.isCorrect ? 'correct-status' : 'incorrect-status'}">
                        ${result.isCorrect ? '✓ Correct' : (result.isSkipped ? '↷ Skipped' : '✗ Incorrect')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <div class="practice-header">
            <h2>Quiz Complete!</h2>
        </div>
        <div class="results-container">
            <div class="results-summary">
                <h3>${skipped > 0 ? 'Attempt Finished Early' : 'Quiz Complete!'}</h3>
                <p><strong>Score:</strong> ${currentGameState.score}/${totalQuestions}</p>
                <p><strong>Percentage:</strong> ${percentage}%</p>
                ${skipped > 0 ? `<p><strong>Skipped questions:</strong> ${skipped}</p>` : ''}
                <p><strong>Mode:</strong> ${currentGameState.mode}</p>
                <p><strong>Level:</strong> ${currentGameState.level + 1}</p>
            </div>
            
            <div class="question-results">
                <h3>Question Results:</h3>
                <div class="results-list">
                    ${questionResultsHTML}
                </div>
            </div>
            
            <div class="results-controls">
                <button class="btn btn-primary" onclick="startPractice()">
                    Try Again
                </button>
                <button class="btn btn-secondary" onclick="selectLevel()">
                    Choose Different Level
                </button>
                <button class="btn btn-secondary" onclick="selectGameMode()">
                    Choose Different Mode
                </button>
            </div>
        </div>
    `;
    
    // Apply language visibility after content is loaded
    setTimeout(() => {
        if (typeof applyCurrentLanguage === 'function') {
            applyCurrentLanguage();
        }
    }, 0);
}

// Initialize Kanji Practice
function openKanjiPracticeN5(kanji) {
    currentGameState.kanji = kanji;
    
    selectGameMode();
}
/*************************************************************************************************/
/******************************* END OF KANJI ****************************************************/
/*************************************************************************************************/
/******************************* START OF VOCABULARY *********************************************/
/*************************************************************************************************/