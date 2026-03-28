/**
 * Utility functions for SEB application
 */

// Debounce function
export function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Format date
export function formatDate(date, format = 'DD/MM/YYYY') {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    if (format === 'DD/MM/YYYY') {
        return `${day}/${month}/${year}`;
    }
    return date.toLocaleDateString('vi-VN');
}

// Parse date from DD/MM/YYYY format
export function parseDate(dateString) {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day);
}

// Local storage helpers
export const localStorageUtils = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('LocalStorage set error:', e);
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('LocalStorage get error:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('LocalStorage remove error:', e);
        }
    },
    
    clear: () => {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('LocalStorage clear error:', e);
        }
    }
};

// Session storage helpers
export const sessionStorageUtils = {
    set: (key, value) => {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('SessionStorage set error:', e);
        }
    },
    
    get: (key) => {
        try {
            const item = sessionStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('SessionStorage get error:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            sessionStorage.removeItem(key);
        } catch (e) {
            console.error('SessionStorage remove error:', e);
        }
    }
};

// Validate email
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate password (min 8 chars, uppercase, lowercase, number)
export function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}

// Generate random ID
export function generateId(prefix = '') {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 9);
    return prefix ? `${prefix}_${timestamp}${random}` : `${timestamp}${random}`;
}

// Capitalize first letter
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Trim whitespace and convert to lowercase
export function slugify(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]/g, '');
}

// Check if device is mobile
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get viewport width
export function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

// Get viewport height
export function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

// Check if element is in viewport
export function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy load images
export function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// Create toast notification
export function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `c-toast c-toast--${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 20px;
        background-color: ${getComputedStyle(document.documentElement).getPropertyValue(`--color-${type}`)};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1100;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
