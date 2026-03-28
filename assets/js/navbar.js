/**
 * Navigation bar functionality for mobile menu toggle
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});

/**
 * Initialize navigation event listeners
 */
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navWrapper = document.getElementById('navWrapper');
    const navItems = document.querySelectorAll('.c-nav__item');
    
    if (!menuToggle || !navWrapper) return;
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.c-header')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', handleNavigationResize);
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const navWrapper = document.getElementById('navWrapper');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!navWrapper || !menuToggle) return;
    
    const isOpen = navWrapper.classList.contains('is-open');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
    const navWrapper = document.getElementById('navWrapper');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!navWrapper || !menuToggle) return;
    
    navWrapper.classList.add('is-open');
    menuToggle.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
    
    console.log('Mobile menu opened');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const navWrapper = document.getElementById('navWrapper');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!navWrapper || !menuToggle) return;
    
    navWrapper.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    console.log('Mobile menu closed');
}

/**
 * Handle window resize for navigation
 */
function handleNavigationResize() {
    const width = window.innerWidth;
    const navWrapper = document.getElementById('navWrapper');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!navWrapper || !menuToggle) return;
    
    // Close menu on larger screens
    if (width >= 768) {
        closeMobileMenu();
        menuToggle.style.display = 'none';
    } else {
        menuToggle.style.display = 'flex';
    }
}

/**
 * Add CSS for mobile menu if not already present
 */
function addMobileMenuStyles() {
    const styleId = 'mobile-menu-styles';
    
    if (document.getElementById(styleId)) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @media (max-width: 767px) {
            .c-header__nav-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: var(--color-bg-primary);
                z-index: 999;
                transform: translateX(-100%);
                transition: transform 0.3s ease-out;
                overflow-y: auto;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                padding-top: 80px;
            }
            
            .c-header__nav-wrapper.is-open {
                transform: translateX(0);
            }
            
            .c-nav {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .c-nav__item {
                display: block;
                width: 100%;
                padding: 16px 20px;
                border-bottom: 1px solid var(--color-border);
                text-align: left;
            }
            
            .c-header__menu-toggle {
                display: flex;
            }
            
            .c-header__menu-toggle.is-active {
                transform: rotate(90deg);
            }
        }
        
        @media (min-width: 768px) {
            .c-header__nav-wrapper {
                transform: translateX(0) !important;
                position: static !important;
                width: auto !important;
                height: auto !important;
                background-color: transparent !important;
                z-index: auto !important;
                padding-top: 0 !important;
            }
            
            .c-header__menu-toggle {
                display: none !important;
            }
            
            .c-nav {
                display: flex !important;
                flex-direction: row !important;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Add styles on load
addMobileMenuStyles();

// Export functions for external use
window.NavBar = {
    openMenu: openMobileMenu,
    closeMenu: closeMobileMenu,
    toggleMenu: toggleMobileMenu
};
