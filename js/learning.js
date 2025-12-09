// js/learning-js.js

document.addEventListener('DOMContentLoaded', function() {
    // Get lesson parameter from URL with switch case validation
    function getLessonFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const lessonId = urlParams.get('lesson');
        
        // Switch case for valid lessons
        switch(lessonId) {
            case 'hiragana':
                openHiraganaLesson();
                break;
            case 'katakana':
                openKatakanaLesson();
                break;
            case 'greetings':
                openGreetingsLesson();
                break;
            case 'kanji':
                openKanjiLesson();
                break;
            case 'introduction':
                openIntroductionLesson();
                break;
            case 'numbers':
                openNumbersLesson();
                break;
            default:
                errorLesson();  // Invalid lesson ID
                break;
        }
    }
    
    // Initialize URL validation
    getLessonFromURL();
});

// Error function for invalid lesson
function errorLesson() {
    console.error('Invalid lesson ID in URL');
    
    // Optional: Show error message on page
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                <h2 style="color: #f44336;">Lesson Not Found</h2>
                <p>Invalid lesson URL parameter.</p>
            </div>
            <br>
            <p class="lang-english" style="text-align: center;">Please return to the lessons page and select a valid lesson.</p>
            <p class="lang-sinhala" style="text-align: center;">කරුණාකර පාඩම් පිටුවට ආපසු ගොස් වලංගු පාඩමක් තෝරන්න.</p>
            <br>
            <div style="text-align: center;">
                <a href="../index.html" class="btn btn-primary">Return to Lessons</a>
            </div>
        `;
    }
}


// Error function for empty lesson
function emptyLesson() {
    console.error('Empty lesson content in URL');
    
    // Optional: Show error message on page
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                <h2 style="color: #369ef4ff;">Lesson Not Found</h2>
                <p>This Lesson is Comming Soon.</p>
            </div>
            <br>
            <p class="lang-english" style="text-align: center;">Please return to the lessons page and select an other lesson.</p>
            <p class="lang-sinhala" style="text-align: center;">කරුණාකර පාඩම් පිටුවට ආපසු ගොස් වෙනත් පාඩමක් තෝරන්න.</p>
            <br>
            <div style="text-align: center;">
                <a href="../index.html" class="btn btn-primary">Return to Lessons</a>
            </div>
        `;
    }
}