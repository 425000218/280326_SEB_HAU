/**
 * Modal and dialog functionality for SEB application
 */

class Modal {
    constructor(id, options = {}) {
        this.id = id;
        this.element = document.getElementById(id);
        this.options = {
            closeButton: true,
            backdrop: true,
            keyboard: true,
            ...options
        };
        
        if (!this.element) {
            console.warn(`Modal with id "${id}" not found`);
            return;
        }
        
        this.init();
    }
    
    init() {
        // Close button
        if (this.options.closeButton) {
            const closeBtn = this.element.querySelector('[data-dismiss="modal"]');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.hide());
            }
        }
        
        // Backdrop click
        if (this.options.backdrop) {
            const backdrop = this.element.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.addEventListener('click', () => this.hide());
            }
        }
        
        // Keyboard escape
        if (this.options.keyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isVisible()) {
                    this.hide();
                }
            });
        }
    }
    
    show() {
        if (!this.element) return;
        
        this.element.style.display = 'flex';
        this.element.classList.add('is-active');
        document.body.style.overflow = 'hidden';
        
        // Trigger transition
        setTimeout(() => {
            this.element.classList.add('is-visible');
        }, 10);
        
        console.log('Modal shown:', this.id);
    }
    
    hide() {
        if (!this.element) return;
        
        this.element.classList.remove('is-visible');
        
        setTimeout(() => {
            this.element.style.display = 'none';
            this.element.classList.remove('is-active');
            document.body.style.overflow = '';
        }, 300);
        
        console.log('Modal hidden:', this.id);
    }
    
    toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    }
    
    isVisible() {
        return this.element && this.element.classList.contains('is-visible');
    }
    
    destroy() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }
}

/**
 * Confirmation dialog
 */
function showConfirmDialog(title, message, onConfirm, onCancel) {
    const dialog = document.createElement('div');
    dialog.className = 'c-modal-overlay';
    dialog.innerHTML = `
        <div class="c-modal" style="max-width: 400px;">
            <div class="c-modal__header">
                <h2>${title}</h2>
                <button class="c-modal__close" data-dismiss="modal">&times;</button>
            </div>
            <div class="c-modal__body">
                <p>${message}</p>
            </div>
            <div class="c-modal__footer" style="display: flex; gap: 10px; justify-content: flex-end;">
                <button class="c-btn c-btn--outline" data-action="cancel">Hủy</button>
                <button class="c-btn" data-action="confirm">Xác nhận</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    const confirmBtn = dialog.querySelector('[data-action="confirm"]');
    const cancelBtn = dialog.querySelector('[data-action="cancel"]');
    const closeBtn = dialog.querySelector('[data-dismiss="modal"]');
    
    function cleanup() {
        dialog.remove();
    }
    
    confirmBtn.addEventListener('click', () => {
        onConfirm && onConfirm();
        cleanup();
    });
    
    cancelBtn.addEventListener('click', () => {
        onCancel && onCancel();
        cleanup();
    });
    
    closeBtn.addEventListener('click', cleanup);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function handleKey(e) {
        if (e.key === 'Escape') {
            cleanup();
            document.removeEventListener('keydown', handleKey);
        }
    });
}

/**
 * Alert dialog
 */
function showAlertDialog(title, message, type = 'info') {
    const dialog = document.createElement('div');
    dialog.className = 'c-modal-overlay';
    dialog.innerHTML = `
        <div class="c-modal" style="max-width: 400px;">
            <div class="c-modal__header">
                <h2>${title}</h2>
                <button class="c-modal__close" data-dismiss="modal">&times;</button>
            </div>
            <div class="c-modal__body">
                <p>${message}</p>
            </div>
            <div class="c-modal__footer" style="display: flex; justify-content: flex-end;">
                <button class="c-btn" data-action="close">OK</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    const closeBtn = dialog.querySelector('[data-action="close"]');
    const dismissBtn = dialog.querySelector('[data-dismiss="modal"]');
    
    function cleanup() {
        dialog.remove();
    }
    
    closeBtn.addEventListener('click', cleanup);
    dismissBtn.addEventListener('click', cleanup);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function handleKey(e) {
        if (e.key === 'Escape' || e.key === 'Enter') {
            cleanup();
            document.removeEventListener('keydown', handleKey);
        }
    });
}

/**
 * Add modal CSS styles
 */
function addModalStyles() {
    const styleId = 'modal-styles';
    
    if (document.getElementById(styleId)) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        .c-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        }
        
        .c-modal {
            background-color: var(--color-bg-primary);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease-out;
        }
        
        .c-modal__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-4);
            border-bottom: 1px solid var(--color-border);
        }
        
        .c-modal__header h2 {
            margin: 0;
            font-size: var(--font-size-lg);
            color: var(--color-text-primary);
        }
        
        .c-modal__close {
            background: none;
            border: none;
            font-size: 28px;
            color: var(--color-text-secondary);
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            transition: background-color 0.2s;
        }
        
        .c-modal__close:hover {
            background-color: var(--color-bg-secondary);
            color: var(--color-text-primary);
        }
        
        .c-modal__body {
            padding: var(--space-4);
            color: var(--color-text-primary);
            line-height: var(--line-height-relaxed);
        }
        
        .c-modal__footer {
            padding: var(--space-4);
            border-top: 1px solid var(--color-border);
            background-color: var(--color-bg-light);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes slideUp {
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
    
    document.head.appendChild(style);
}

// Add styles on load
addModalStyles();

// Export classes and functions
window.Modal = Modal;
window.showConfirmDialog = showConfirmDialog;
window.showAlertDialog = showAlertDialog;
