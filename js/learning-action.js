function openHiraganaLesson() {
    const container = document.querySelector('#content');
    container.innerHTML = `
        <div class="lesson-header">
            <div class="lesson-info">
                <div class="lesson-title-section">
                    <div class="lesson-kanji">ひらがな</div>
                    <div class="lesson-title">Hiragana</div>
                </div>
                <p class="lesson-subtitle">Japanese Syllabary for Native Words - 46 basic characters with voiced and contracted sounds</p>
            </div>
        </div>
        
        <h3 class="section-title">Basic Characters (46)</h3>
        <div class="characters-grid basic">
            ${hiragana.basic.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
        <h3 class="section-title">Voiced Sounds (Dakuon)</h3>
        <div class="characters-grid dakuon">
            ${hiragana.additional1.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
        <h3 class="section-title">Contracted Sounds (Youon)</h3>
        <div class="characters-grid youon">
            ${hiragana.additional2.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
    `;
}

function openKatakanaLesson() {
    const container = document.querySelector('#content');
    container.innerHTML = `
        <div class="lesson-header">
            <div class="lesson-info">
                <div class="lesson-title-section">
                    <div class="lesson-kanji">カタカナ</div>
                    <div class="lesson-title">Katakana</div>
                </div>
                <p class="lesson-subtitle">Japanese Syllabary for Foreign Words - 46 basic characters with voiced and contracted sounds</p>
            </div>
        </div>
        
        <h3 class="section-title">Basic Characters (46)</h3>
        <div class="characters-grid basic">
            ${katakana.basic.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
        <h3 class="section-title">Voiced Sounds (Dakuon)</h3>
        <div class="characters-grid dakuon">
            ${katakana.additional1.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
        <h3 class="section-title">Contracted Sounds (Youon)</h3>
        <div class="characters-grid youon">
            ${katakana.additional2.map(char => {
                if (!char.character || char.character.trim() === '') {
                    return `<div class="character-card" style="background: transparent; box-shadow: none;"></div>`;
                }
                return `
                <div class="character-card">
                    <div class="character-jp">${char.character}</div>
                    <div class="lang-english">${char.romaji}</div>
                    <div class="lang-sinhala">${char.sinhala}</div>
                </div>
                `;
            }).join('')}
        </div>
    `;
}

function openGreetingsLesson() {
    emptyLesson();
}

function openKanjiLesson() { 
    const container = document.querySelector('#content');
    container.innerHTML = `
        <div class="lesson-header">
            <div class="lesson-info">
                <div class="lesson-title-section">
                    <div class="lesson-kanji">KANJI</div>
                    <div class="lesson-title">Kanji</div>
                </div>
                <p class="lesson-subtitle">kanji kanji kanji</p>
            </div>
            
        </div>

        <div class="kanji-grid">
            ${kanji.map((char, index) => `
                <div class="kanji-card" data-index="${index}">
                    <div class="kanji-jp">${char.kanji}</div>
                    <div class="lang lang-english">${char.meanEn}</div>
                    <div class="lang lang-sinhala">${char.meanSi}</div>
                </div>
            `).join('')}
        </div>
    `;

    // Add click listeners to kanji cards
    document.querySelectorAll('.kanji-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showKanjiDetails(index);
        });
    });
}

function showKanjiDetails(index) {
    // Remove any existing overlay first
    const existingOverlay = document.querySelector('.kanjiSelected');
    if (existingOverlay) existingOverlay.remove();
    
    const char = kanji[index];
    
    const overlay = document.createElement('div');
    overlay.className = 'kanjiSelected';
    overlay.innerHTML = `
        <div class="kanji-selected">
            <button class="close-btn">×</button>
            <div class="kanji-jp">${char.kanji}</div>
            <div class="onyomi">${char.on}</div>
            <div class="kunyomi">${char.kun}</div>
            <div class="meaning lang-english">${char.meanEn}</div>
            <div class="meaning lang-sinhala">${char.meanSi}</div>
            <div class="examples">
                <h4>Examples:</h4>
                ${char.example.map(example => `
                    <div class="example-item">
                        <span class="example-kanji">${example.kanji}</span>
                        <span class="example-kana">${example.kana}</span>
                        <span class="lang lang-english">${example.eng}</span>
                        <span class="lang lang-sinhala">${example.sin}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);

    setTimeout(() => {
        applyCurrentLanguage(); // Call your language function
    }, 0);
    
    // Close button
    overlay.querySelector('.close-btn').addEventListener('click', () => overlay.remove());
    
    // Close on outside click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    
    // Close with Escape key
    const closeOnEscape = (e) => {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);

}
