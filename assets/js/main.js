/**
 * Main initialization and global event handlers for SEB application
 */

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    attachGlobalEventListeners();
});

/**
 * Initialize page-specific setup
 */
function initializePage() {
    const bodyId = document.body.id || document.location.pathname;
    
    // Log page initialization
    console.log('Initializing page:', bodyId);
    
    // Set active navigation based on current page
    updateActiveNavigation();
}

/**
 * Update active navigation item based on current page
 */
function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.c-nav__item');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        
        const href = item.getAttribute('href');
        if (href && currentPath.includes(href.replace('.html', ''))) {
            item.classList.add('active');
        }
    });
}

/**
 * Attach global event listeners
 */
function attachGlobalEventListeners() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Handle form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    
    // Handle window resize
    window.addEventListener('resize', debounceResize);
    
    // Handle scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Handle keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

/**
 * Handle form submission with validation
 */
function handleFormSubmit(e) {
    const form = e.target;
    
    // Check for required fields
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--color-danger)';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        e.preventDefault();
        console.warn('Form has empty required fields');
    }
}

/**
 * Debounce window resize
 */
function debounceResize() {
    clearTimeout(debounceResize.timeoutId);
    debounceResize.timeoutId = setTimeout(() => {
        handleWindowResize();
    }, 250);
}

/**
 * Handle window resize event
 */
function handleWindowResize() {
    const width = window.innerWidth;
    console.log('Window resized to:', width);
    
    // Add/remove mobile class based on viewport width
    if (width < 768) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.remove('is-mobile');
    }
}

/**
 * Handle scroll events
 */
function handleScroll() {
    const header = document.querySelector('.c-header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
}

/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcuts(e) {
    // Alt + H: Go to home
    if (e.altKey && e.key === 'h') {
        window.location.href = '/index.html';
    }
    
    // Alt + S: Focus search
    if (e.altKey && e.key === 's') {
        const searchInput = document.querySelector('.c-header__search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape: Close modals, clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.c-header__search-input');
        if (searchInput && searchInput === document.activeElement) {
            searchInput.value = '';
            searchInput.blur();
        }
    }
}

/**
 * Utility: Log analytics event (placeholder for future integration)
 */
function logAnalyticsEvent(eventName, eventData = {}) {
    console.log('Analytics Event:', eventName, eventData);
    // TODO: Integrate with analytics service (Google Analytics, Mixpanel, etc.)
}

/**
 * Initialize animations on scroll
 */
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Export functions for use in other scripts
window.SEB = {
    logAnalyticsEvent,
    updateActiveNavigation,
    handleFormSubmit
};

// Initialize on page load
window.addEventListener('load', () => {
    console.log('SEB Application loaded');
    initializeScrollAnimations();
});
