// js/language.js

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'english';
        this.langToggle = document.getElementById('langToggle');
        this.init();
    }
    
    init() {
        if (!this.langToggle) return;
        
        this.langText = this.langToggle.querySelector('.lang-text');
        this.createDropdown();
        this.setupEventListeners();
        this.switchLanguage(this.currentLang);
    }
    
    createDropdown() {
        // Remove existing dropdown if any
        const existingDropdown = document.querySelector('.lang-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }
        
        this.dropdown = document.createElement('div');
        this.dropdown.className = 'lang-dropdown';
        this.dropdown.innerHTML = `
            <div class="lang-option ${this.currentLang === 'english' ? 'active' : ''}" data-lang="english">
                <i class="fas fa-language"></i>
                English
            </div>
            <div class="lang-option ${this.currentLang === 'sinhala' ? 'active' : ''}" data-lang="sinhala">
                <i class="fas fa-language"></i>
                සිංහල
            </div>
        `;
        
        document.body.appendChild(this.dropdown);
    }
    
    setupEventListeners() {
        // Toggle dropdown
        this.langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
        
        // Language option selection
        this.dropdown.addEventListener('click', (e) => {
            const langOption = e.target.closest('.lang-option');
            if (langOption) {
                const lang = langOption.getAttribute('data-lang');
                this.switchLanguage(lang);
                this.dropdown.classList.remove('show');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.langToggle.contains(e.target) && !this.dropdown.contains(e.target)) {
                this.dropdown.classList.remove('show');
            }
        });
    }
    
    toggleDropdown() {
        this.dropdown.classList.toggle('show');
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update button text
        if (this.langText) {
            this.langText.textContent = lang === 'english' ? 'En' : 'සිං';
        }
        
        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // Toggle language visibility
        this.updateLanguageVisibility(lang);
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
    }
    
    updateLanguageVisibility(lang) {
        // Hide/show English elements
        document.querySelectorAll('.lang-english').forEach(el => {
            if (lang === 'english') {
                el.classList.remove('lang-hidden');
            } else {
                el.classList.add('lang-hidden');
            }
        });
        
        // Hide/show Sinhala elements
        document.querySelectorAll('.lang-sinhala').forEach(el => {
            if (lang === 'sinhala') {
                el.classList.remove('lang-hidden');
            } else {
                el.classList.add('lang-hidden');
            }
        });
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    setLanguage(lang) {
        if (['english', 'sinhala'].includes(lang)) {
            this.switchLanguage(lang);
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

function applyCurrentLanguage() {
    const isEnglish = localStorage.getItem('language') !== 'sinhala'; // Adjust based on your logic
    const englishElements = document.querySelectorAll('.lang-english');
    const sinhalaElements = document.querySelectorAll('.lang-sinhala');
    
    if (isEnglish) {
        englishElements.forEach(el => el.classList.remove('lang-hidden'));
        sinhalaElements.forEach(el => el.classList.add('lang-hidden'));
    } else {
        englishElements.forEach(el => el.classList.add('lang-hidden'));
        sinhalaElements.forEach(el => el.classList.remove('lang-hidden'));
    }

}
