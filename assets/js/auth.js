/**
 * Authentication functionality for SEB application
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeAuthForms();
});

/**
 * Initialize authentication forms
 */
function initializeAuthForms() {
    const loginForm = document.getElementById('loginForm') || document.querySelector('form');
    const signupForm = document.getElementById('signupForm') || document.querySelector('form[name="signup"]');
    
    if (loginForm && loginForm.querySelector('input[name="email"]')) {
        // This is a login form
        initializeLoginForm(loginForm);
    } else if (signupForm) {
        initializeSignupForm(signupForm);
    }
}

/**
 * Initialize login form
 */
function initializeLoginForm(form) {
    const emailInput = form.querySelector('input[name="email"]') || form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[name="password"]') || form.querySelector('input[type="password"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    if (!emailInput || !passwordInput) return;
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate
        if (!validateLoginForm(email, password, emailInput, passwordInput)) {
            return;
        }
        
        // Show loading state
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Đang xử lý...';
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                handleLoginSuccess(email);
            }, 1500);
        }
    });
    
    // Real-time validation
    emailInput.addEventListener('blur', function() {
        validateEmail(this.value.trim(), emailInput);
    });
    
    passwordInput.addEventListener('blur', function() {
        validatePassword(this.value.trim(), passwordInput);
    });
}

/**
 * Initialize signup form
 */
function initializeSignupForm(form) {
    const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[placeholder*="Họ"]');
    const emailInput = form.querySelector('input[name="email"]') || form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[name="password"]') || form.querySelector('input[type="password"]');
    const passwordConfirmInput = form.querySelector('input[name="passwordConfirm"]') || form.querySelector('input[type="password"]:nth-of-type(2)');
    const termsCheckbox = form.querySelector('input[name="terms"]') || form.querySelector('input[type="checkbox"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: nameInput ? nameInput.value.trim() : '',
            email: emailInput ? emailInput.value.trim() : '',
            password: passwordInput ? passwordInput.value.trim() : '',
            passwordConfirm: passwordConfirmInput ? passwordConfirmInput.value.trim() : '',
            terms: termsCheckbox ? termsCheckbox.checked : false
        };
        
        // Validate
        if (!validateSignupForm(formData, form)) {
            return;
        }
        
        // Show loading state
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Đang xử lý...';
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                handleSignupSuccess(formData.email);
            }, 1500);
        }
    });
}

/**
 * Validate login form
 */
function validateLoginForm(email, password, emailInput, passwordInput) {
    let isValid = true;
    
    if (!validateEmail(email, emailInput)) {
        isValid = false;
    }
    
    if (password.length < 6) {
        setFieldError(passwordInput, 'Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    } else {
        clearFieldError(passwordInput);
    }
    
    return isValid;
}

/**
 * Validate signup form
 */
function validateSignupForm(formData, form) {
    let isValid = true;
    
    // Validate name
    const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[placeholder*="Họ"]');
    if (nameInput) {
        if (!formData.name || formData.name.length < 2) {
            setFieldError(nameInput, 'Họ tên phải có ít nhất 2 ký tự');
            isValid = false;
        } else {
            clearFieldError(nameInput);
        }
    }
    
    // Validate email
    const emailInput = form.querySelector('input[name="email"]') || form.querySelector('input[type="email"]');
    if (emailInput) {
        if (!validateEmail(formData.email, emailInput)) {
            isValid = false;
        }
    }
    
    // Validate password
    const passwordInput = form.querySelector('input[name="password"]') || form.querySelector('input[type="password"]');
    if (passwordInput) {
        if (!formData.password || formData.password.length < 8) {
            setFieldError(passwordInput, 'Mật khẩu phải có ít nhất 8 ký tự');
            isValid = false;
        } else {
            clearFieldError(passwordInput);
        }
    }
    
    // Validate password confirmation
    const passwordConfirmInput = form.querySelector('input[name="passwordConfirm"]') || form.querySelector('input[type="password"]:nth-of-type(2)');
    if (passwordConfirmInput) {
        if (formData.password !== formData.passwordConfirm) {
            setFieldError(passwordConfirmInput, 'Mật khẩu xác nhận không trùng khớp');
            isValid = false;
        } else {
            clearFieldError(passwordConfirmInput);
        }
    }
    
    // Validate terms
    const termsCheckbox = form.querySelector('input[name="terms"]') || form.querySelector('input[type="checkbox"]');
    if (termsCheckbox && !formData.terms) {
        setFieldError(termsCheckbox, 'Bạn phải chấp nhận điều khoản');
        isValid = false;
    } else if (termsCheckbox) {
        clearFieldError(termsCheckbox);
    }
    
    return isValid;
}

/**
 * Validate email format
 */
function validateEmail(email, input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
        if (input) {
            setFieldError(input, 'Email không hợp lệ');
        }
        return false;
    } else {
        if (input) {
            clearFieldError(input);
        }
        return true;
    }
}

/**
 * Validate password strength
 */
function validatePassword(password, input) {
    if (password.length < 6) {
        if (input) {
            setFieldError(input, 'Mật khẩu phải có ít nhất 6 ký tự');
        }
        return false;
    } else {
        if (input) {
            clearFieldError(input);
        }
        return true;
    }
}

/**
 * Set field error state
 */
function setFieldError(input, message) {
    if (!input) return;
    
    input.classList.add('is-invalid');
    input.style.borderColor = 'var(--color-danger)';
    
    // Remove existing error message
    const existingError = input.parentElement.querySelector('.c-form-group__error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorEl = document.createElement('div');
    errorEl.className = 'c-form-group__error';
    errorEl.style.cssText = `
        color: var(--color-danger);
        font-size: var(--font-size-xs);
        margin-top: 4px;
    `;
    errorEl.textContent = message;
    input.parentElement.appendChild(errorEl);
}

/**
 * Clear field error state
 */
function clearFieldError(input) {
    if (!input) return;
    
    input.classList.remove('is-invalid');
    input.style.borderColor = '';
    
    const errorEl = input.parentElement.querySelector('.c-form-group__error');
    if (errorEl) {
        errorEl.remove();
    }
}

/**
 * Handle successful login
 */
function handleLoginSuccess(email) {
    // Save user info to localStorage
    try {
        localStorage.setItem('user', JSON.stringify({
            email: email,
            loggedInAt: new Date().toISOString()
        }));
    } catch (e) {
        console.error('LocalStorage error:', e);
    }
    
    // Show success message
    alert('Đăng nhập thành công! Vui lòng chờ chuyển hướng...');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 500);
}

/**
 * Handle successful signup
 */
function handleSignupSuccess(email) {
    // Save user info to localStorage
    try {
        localStorage.setItem('user', JSON.stringify({
            email: email,
            registeredAt: new Date().toISOString()
        }));
    } catch (e) {
        console.error('LocalStorage error:', e);
    }
    
    // Show success message
    alert('Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = '/pages/login.html';
    }, 500);
}

/**
 * Logout functionality
 */
function logout() {
    try {
        localStorage.removeItem('user');
    } catch (e) {
        console.error('LocalStorage error:', e);
    }
    
    console.log('User logged out');
    window.location.href = '/pages/login.html';
}

/**
 * Check if user is logged in
 */
function isUserLoggedIn() {
    try {
        const user = localStorage.getItem('user');
        return user !== null;
    } catch (e) {
        console.error('LocalStorage error:', e);
        return false;
    }
}

/**
 * Get current user info
 */
function getCurrentUser() {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (e) {
        console.error('LocalStorage error:', e);
        return null;
    }
}

// Export functions for external use
window.Auth = {
    logout,
    isUserLoggedIn,
    getCurrentUser,
    validateEmail,
    validatePassword
};
