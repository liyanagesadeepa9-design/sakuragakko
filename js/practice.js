// js/practice-js.js

document.addEventListener('DOMContentLoaded', function() {
    // Get practice parameter from URL with switch case validation
    function getPracticeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const practiceId = urlParams.get('practice');
        
        // Switch case for valid practice
        switch(practiceId) {
            case 'kanji-n5':
                openKanjiPracticeN5('kanjiN5');
                break;
            case 'kanji-n4':
                emptyPractice()
                break;
            case 'vocabulary-nouns':
                emptyPractice()
                break;
            case 'vocabulary-adjectives':
                emptyPractice()
                break;
            default:
                errorPractice();  // Invalid practice ID
                break;
        }
    }
    
    // Initialize URL validation
    getPracticeFromURL();
});

// Error function for invalid practice
function errorPractice() {
    console.error('Invalid practice ID in URL');
    
    // Optional: Show error message on page
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                <h2 style="color: #f44336;">Practice Not Found</h2>
                <p>Invalid practice URL parameter.</p>
            </div>
            <br>
            <p class="lang-english" style="text-align: center;">Please return to the practice page and select a valid practice.</p>
            <p class="lang-sinhala" style="text-align: center;">කරුණාකර පෙරහුරු පිටුවට ආපසු ගොස් වලංගු පෙරහුරුවක් තෝරන්න.</p>
            <br>
            <div style="text-align: center;">
                <a href="../index.html" class="btn btn-primary">Return to Home</a>
            </div>
        `;
    }
}

// Error function for empty practice
function emptyPractice() {
    console.error('Empty practice content in URL');
    
    // Optional: Show error message on page
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                <h2 style="color: #369ef4ff;">Practice Not Found</h2>
                <p>This Practice is Comming Soon.</p>
            </div>
            <br>
            <p class="lang-english" style="text-align: center;">Please return to the practice page and select an other practice.</p>
            <p class="lang-sinhala" style="text-align: center;">කරුණාකර පාඩම් පිටුවට ආපසු ගොස් වෙනත් පාඩමක් තෝරන්න.</p>
            <br>
            <div style="text-align: center;">
                <a href="../index.html" class="btn btn-primary">Return to Home</a>
            </div>
        `;
    }
}