// js/main-js.js

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality - Works on both pages
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const themeText = themeToggle.querySelector('.theme-text');
        
        // Check for saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            if (themeText) {
                themeText.textContent = 'Light Mode';
            }
        }
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                if (themeText) {
                    themeText.textContent = 'Light Mode';
                }
                localStorage.setItem('theme', 'light');
            } else {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                if (themeText) {
                    themeText.textContent = 'Dark Mode';
                }
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Navigation Functionality - Only for index.html
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Only run navigation code if we're on index.html (has nav-links)
    if (navLinks.length > 0 && pageSections.length > 0) {
        // Set active navigation link and show corresponding section
        function setActiveNav(targetId) {
            // Remove active class from all nav links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            pageSections.forEach(section => section.classList.remove('active-section'));
            
            // Add active class to clicked nav link
            const targetLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            // Show corresponding section
            document.getElementById(targetId).classList.add('active-section');
            
            // Close mobile menu if open
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
        
        // Handle nav link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                setActiveNav(targetId);
                
                // Scroll to top of the section
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Handle "Start Learning" button in hero section
        const startLearningBtn = document.querySelector('.hero-actions .btn-primary');
        const tryPracticeBtn = document.querySelector('.hero-actions .btn-secondary');
        
        if (startLearningBtn) {
            startLearningBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = 'learning';
                setActiveNav(targetId);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        }
        
        if (tryPracticeBtn) {
            tryPracticeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = 'practice';
                setActiveNav(targetId);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        }
        
        // Handle all anchor links that point to section IDs
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only process if it's a section link (not # or empty)
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    
                    // Check if target section exists
                    const targetSection = document.getElementById(targetId);
                    if (targetSection && pageSections.length > 0) {
                        setActiveNav(targetId);
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // Initialize with Home section active
        setActiveNav('home');
    }
    
    // Hamburger menu toggle for mobile - Only if exists
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    }
    
    // Level selection in learning section
    const levelButtons = document.querySelectorAll('.level-btn');
    const lessonContainers = document.querySelectorAll('.lessons-container');
    
    if (levelButtons.length > 0) {
        levelButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Skip if button is disabled
                if (this.disabled) {
                    return;
                }
                
                // Get the selected level
                const selectedLevel = this.getAttribute('data-level');
                
                // Remove active class from all buttons
                levelButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all lesson containers
                lessonContainers.forEach(container => {
                    container.classList.remove('active');
                });
                
                // Show the selected lesson container
                const selectedContainer = document.getElementById(`${selectedLevel}-lessons`);
                if (selectedContainer) {
                    selectedContainer.classList.add('active');
                }
                
                console.log(`Switched to ${selectedLevel.toUpperCase()} level`);
            });
        });
    }
    
    // Practice Tab Switching - Only for index.html
    const practiceTabs = document.querySelectorAll('.practice-tab');
    const tabContents = document.querySelectorAll('.practice-tab-content');
    
    if (practiceTabs.length > 0 && tabContents.length > 0) {
        practiceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Skip if tab is disabled
                if (this.classList.contains('disabled')) {
                    return;
                }
                
                // Get the tab ID
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                practiceTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show the selected tab content
                const activeContent = document.getElementById(`${tabId}-content`);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
                
                console.log(`Switched to ${tabId} tab`);
            });
        });
    }
    
    // Practice Card button click handlers - Only for index.html
    const cardButtons = document.querySelectorAll('.card-btn');
    if (cardButtons.length > 0) {
        cardButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.practice-card');
                const cardTitle = card.querySelector('h4').textContent;
                const practiceType = document.querySelector('.practice-tab.active').getAttribute('data-tab');
                
                // Map card titles to practice parameters
                const practiceMap = {
                    'kanji': {
                        'N5': 'kanji-n5',
                        'N4': 'kanji-n4',
                    },
                    'vocabulary': {
                        'Nouns': 'vocabulary-nouns',
                        'Adjectives': 'vocabulary-adjectives',
                        'Verbs': 'vocabulary-verbs',
                        'Common Phrases': 'vocabulary-phrases'
                    },
                    'grammar': {
                        'Particles': 'grammar-particles',
                        'Verb Conjugation': 'grammar-conjugation',
                        'Sentence Structure': 'grammar-structure',
                        'Questions & Negatives': 'grammar-questions'
                    }
                };
                
                // Get practice parameter
                let practiceParam = '';
                if (practiceMap[practiceType] && practiceMap[practiceType][cardTitle]) {
                    practiceParam = practiceMap[practiceType][cardTitle];
                } else {
                    // Fallback to generic practice type
                    practiceParam = practiceType;
                }
                
                // Navigate to practice page with practice parameter
                window.location.href = `pages/practice.html?practice=${practiceParam}`;
            });
        });
    }
    
    // Lesson Navigation - Only for index.html
    const startLessonButtons = document.querySelectorAll('.start-lesson');
    
    if (startLessonButtons.length > 0) {
        startLessonButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lessonId = this.getAttribute('data-lesson');
                // Navigate to learning page with lesson parameter
                window.location.href = `pages/learning.html?lesson=${lessonId}`;
            });
        });
    }
    
    // Practice Exercises Start Practice button - Only for index.html
    const startPracticeButtons = document.querySelectorAll('.btn-primary[id="start-practice"], .practice-area .btn-primary');
    if (startPracticeButtons.length > 0) {
        startPracticeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Get the current practice type from active tab
                const activeTab = document.querySelector('.practice-tab.active');
                if (activeTab) {
                    const practiceType = activeTab.getAttribute('data-tab');
                    // Navigate to practice page with practice type
                    window.location.href = `pages/practice.html?practice=${practiceType}`;
                }
            });
        });
    }
});

// Scroll Bar Effect
// Add smooth scroll effects and custom scrollbar behavior
function initCustomScrollbars() {
    // Add scrollbar classes to scrollable elements
    const scrollableElements = [
        '.answers-grid',
        '.kanji-grid', 
        '.examples',
        '.kanji-selected',
        '.mode-grid',
        '.level-grid'
    ];
    
    // Apply scrollbar styles after content loads
    setTimeout(() => {
        scrollableElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el.scrollHeight > el.clientHeight) {
                    el.classList.add('has-scrollbar');
                    
                    // Add hover effect
                    el.addEventListener('mouseenter', () => {
                        el.style.scrollbarColor = 'var(--primary-color) var(--bg-color)';
                    });
                    
                    el.addEventListener('mouseleave', () => {
                        el.style.scrollbarColor = 'var(--primary-color) var(--bg-secondary)';
                    });
                }
            });
        });
    }, 100);
}

// Enhanced scroll to element with animation
function smoothScrollToElement(elementId, offset = 20) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Add highlight effect
        element.style.boxShadow = '0 0 0 3px rgba(157, 78, 221, 0.3)';
        setTimeout(() => {
            element.style.boxShadow = '';
        }, 1500);
    }
}

// Scroll to top with animation
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to bottom with animation
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll features
function initScrollFeatures() {
    // Initialize custom scrollbars
    initCustomScrollbars();
    
    // Add scroll progress bar
    addScrollProgress();
    
    // Add keyboard shortcuts for scrolling
    document.addEventListener('keydown', (e) => {
        // Spacebar scrolls down
        if (e.code === 'Space' && !e.target.matches('input, textarea, button')) {
            e.preventDefault();
            window.scrollBy({ top: 300, behavior: 'smooth' });
        }
        
        // Home/End keys
        if (e.code === 'Home') {
            scrollToTop();
        }
        if (e.code === 'End') {
            scrollToBottom();
        }
    });
    
    // Add scroll indicators to long content
    const longContentElements = document.querySelectorAll('.kanji-practice, .results-screen');
    longContentElements.forEach(el => {
        if (el.scrollHeight > window.innerHeight) {
            const indicator = document.createElement('div');
            indicator.className = 'scroll-indicator';
            indicator.innerHTML = `
                <div class="scroll-hint">
                    <i class="fas fa-chevron-down"></i>
                    <span>Scroll for more</span>
                </div>
            `;
            el.appendChild(indicator);
        }
    });
}

// CSS for scroll indicators (add to your CSS)
const scrollIndicatorCSS = `
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, 
        var(--primary-color), 
        var(--secondary-color),
        var(--accent-color)
    );
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 2px 8px rgba(157, 78, 221, 0.3);
}

.scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.7;
    animation: bounce 2s infinite;
}

.scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 0.9rem;
}

.scroll-hint i {
    font-size: 1.2rem;
    animation: float 2s infinite ease-in-out;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-10px);
    }
    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

/* Scroll to top button */
.scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(157, 78, 221, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-top-btn:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 20px rgba(157, 78, 221, 0.4);
}

.scroll-top-btn.visible {
    display: flex;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Add scroll-to-top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.title = 'Scroll to top';
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', scrollToTop);
    
    // Add CSS to document
    const style = document.createElement('style');
    style.textContent = scrollIndicatorCSS;
    document.head.appendChild(style);
}

// Call this function when your page loads
function initPageScrollFeatures() {
    // Add scroll to top button
    addScrollToTopButton();
    
    // Initialize all scroll features
    initScrollFeatures();
    
    console.log('Scroll features initialized');
}

// Add to your existing page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code...
    
    // Add scroll features
    setTimeout(initPageScrollFeatures, 500);
});