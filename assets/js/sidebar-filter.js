/**
 * Sidebar filter functionality for product pages
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeSidebarFilter();
});

/**
 * Initialize sidebar filter functionality
 */
function initializeSidebarFilter() {
    const layoutSidebar = document.querySelector('.layout-sidebar');
    if (!layoutSidebar) return;
    
    const sidebar = layoutSidebar.querySelector('[role="complementary"]');
    const filterToggleBtn = createFilterToggleButton();
    
    if (!sidebar) return;
    
    // Insert toggle button on mobile
    const header = document.querySelector('.c-header');
    if (header) {
        const searchContainer = header.querySelector('.c-header__search');
        if (searchContainer && window.innerWidth < 1200) {
            searchContainer.parentElement.insertBefore(filterToggleBtn, searchContainer);
        }
    }
    
    // Add event listeners
    filterToggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar(sidebar);
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.layout-sidebar') && !e.target.closest('[data-filter-toggle]')) {
            closeSidebar(sidebar);
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', handleSidebarResize);
    
    // Add filter change listeners
    initializeFilterListeners(sidebar);
}

/**
 * Create filter toggle button
 */
function createFilterToggleButton() {
    const button = document.createElement('button');
    button.setAttribute('data-filter-toggle', 'true');
    button.className = 'c-btn c-btn--sm' ;
    button.innerHTML = '🔍 Bộ lọc';
    button.style.cssText = `
        display: none;
        margin-right: 10px;
    `;
    
    // Show/hide based on viewport
    if (window.innerWidth < 1200) {
        button.style.display = 'inline-block';
    }
    
    return button;
}

/**
 * Toggle sidebar visibility
 */
function toggleSidebar(sidebar) {
    const isOpen = sidebar.classList.contains('is-open');
    
    if (isOpen) {
        closeSidebar(sidebar);
    } else {
        openSidebar(sidebar);
    }
}

/**
 * Open sidebar
 */
function openSidebar(sidebar) {
    sidebar.classList.add('is-open');
    sidebar.style.display = 'block';
    
    // For mobile, show as overlay
    if (window.innerWidth < 1200) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
        sidebar.style.left = '0';
        sidebar.style.width = '80vw';
        sidebar.style.height = '100vh';
        sidebar.style.zIndex = '500';
        sidebar.style.backgroundColor = 'var(--color-bg-primary)';
        sidebar.style.borderRight = '1px solid var(--color-border)';
        sidebar.style.overflowY = 'auto';
    }
    
    console.log('Sidebar opened');
}

/**
 * Close sidebar
 */
function closeSidebar(sidebar) {
    sidebar.classList.remove('is-open');
    
    // Reset mobile styles
    if (window.innerWidth < 1200) {
        sidebar.style.position = '';
        sidebar.style.top = '';
        sidebar.style.left = '';
        sidebar.style.width = '';
        sidebar.style.height = '';
        sidebar.style.zIndex = '';
        sidebar.style.backgroundColor = '';
        sidebar.style.display = 'none';
    }
    
    console.log('Sidebar closed');
}

/**
 * Handle window resize for sidebar
 */
function handleSidebarResize() {
    const layoutSidebar = document.querySelector('.layout-sidebar');
    const sidebar = layoutSidebar ? layoutSidebar.querySelector('[role="complementary"]') : null;
    const filterToggleBtn = document.querySelector('[data-filter-toggle]');
    
    if (!sidebar || !filterToggleBtn) return;
    
    if (window.innerWidth >= 1200) {
        // Show sidebar permanently on desktop
        sidebar.style.display = '';
        sidebar.style.position = '';
        closeSidebar(sidebar);
        filterToggleBtn.style.display = 'none';
    } else {
        // Hide on mobile by default
        sidebar.style.display = 'none';
        filterToggleBtn.style.display = 'inline-block';
    }
}

/**
 * Initialize filter event listeners
 */
function initializeFilterListeners(sidebar) {
    const checkboxes = sidebar.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });
}

/**
 * Filter products based on selected filters
 */
function filterProducts() {
    const layoutSidebar = document.querySelector('.layout-sidebar');
    const sidebar = layoutSidebar ? layoutSidebar.querySelector('[role="complementary"]') : null;
    
    if (!sidebar) return;
    
    const checkedFilters = Array.from(sidebar.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    console.log('Applied filters:', checkedFilters);
    
    // Get all product cards
    const productCards = layoutSidebar.querySelectorAll('.c-product-card');
    
    // If no filters selected, show all
    if (checkedFilters.length === 0) {
        productCards.forEach(card => {
            card.style.display = '';
            card.classList.add('fade-in');
        });
        return;
    }
    
    // Filter cards based on data attributes
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardStatus = card.getAttribute('data-status');
        
        const matches = checkedFilters.some(filter => 
            cardCategory === filter || cardStatus === filter
        );
        
        if (matches) {
            card.style.display = '';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        }
    });
    
    // Save filter state to localStorage
    saveFilterState(checkedFilters);
}

/**
 * Save filter state to localStorage
 */
function saveFilterState(filters) {
    try {
        localStorage.setItem('productFilters', JSON.stringify(filters));
    } catch (e) {
        console.error('LocalStorage error:', e);
    }
}

/**
 * Load filter state from localStorage
 */
function loadFilterState() {
    try {
        const filters = localStorage.getItem('productFilters');
        return filters ? JSON.parse(filters) : [];
    } catch (e) {
        console.error('LocalStorage error:', e);
        return [];
    }
}

/**
 * Add sidebar CSS if not already present
 */
function addSidebarStyles() {
    const styleId = 'sidebar-filter-styles';
    
    if (document.getElementById(styleId)) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @media (max-width: 1199px) {
            .layout-sidebar [role="complementary"] {
                display: none;
            }
            
            .layout-sidebar [role="complementary"].is-open {
                display: block;
            }
        }
        
        @media (min-width: 1200px) {
            .layout-sidebar [role="complementary"] {
                display: block !important;
                position: static !important;
                width: auto !important;
                height: auto !important;
                z-index: auto !important;
                background-color: transparent !important;
                border-right: none !important;
                overflow: visible !important;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.3s ease-out;
        }
    `;
    
    document.head.appendChild(style);
}

// Add styles on load
addSidebarStyles();

// Export functions for external use
window.SidebarFilter = {
    openSidebar,
    closeSidebar,
    toggleSidebar,
    filterProducts,
    saveFilterState,
    loadFilterState
};
