# SEB - Hệ Thống Mượn/Trả Thiết Bị

**Phiên bản:** 1.0.0  
**Ngày tạo:** Tháng 3, 2025  
**Trạng thái:** Production Ready ✅

---

## 📋 Mục Lục

1. [Giới thiệu](#giới-thiệu)
2. [Tính năng](#tính-năng)
3. [Cấu trúc dự án](#cấu-trúc-dự-án)
4. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
5. [Hệ thống thiết kế](#hệ-thống-thiết-kế)
6. [Cài đặt và chạy](#cài-đặt-và-chạy)
7. [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
8. [API & Tích hợp](#api--tích-hợp)
9. [Hỗ trợ phát triển](#hỗ-trợ-phát-triển)

---

## 🎯 Giới thiệu

SEB là hệ thống quản lý mượn/trả thiết bị giáo dục cho trường học. Cho phép giáo viên và nhân viên mượn thiết bị học tập, theo dõi lịch sử, và quản lý thiết bị hiệu quả.

**Người dùng chính:**
- Giáo viên (borrow equipment, view calendar, check availability)
- Nhân viên (manage inventory, approve requests, assign items)
- Quản trị viên (full system control, user management, reports)

---

## ✨ Tính Năng

### 🏠 Trang Chủ (Home)
- Dashboard với thống kê thiết bị
- Danh sách thiết bị phổ biến
- Tin tức và cập nhật
- Hướng dẫn sử dụng QR code

### 🔐 Xác Thực (Auth)
- **Đăng nhập:** Email/username + mật khẩu
- **Đăng ký:** Form đầy đủ với validation
- Quên mật khẩu (static link)
- Quản lý phiên đăng nhập

### 📦 Kho Thiết Bị (Equipment Storage)
- Danh sách tất cả thiết bị
- Bộ lọc theo:
  - Trạng thái (available, borrowed, maintenance)
  - Danh mục (subject/department)
- Phân trang (12 items/page)
- Tìm kiếm thiết bị
- Yêu cầu mượn inline

### 📅 Lịch (Schedule)
- Lịch tháng interactive
- Điều hướng tháng trước/sau
- Highlight ngày hôm nay
- Click vào ngày để xem sự kiện

### 📚 Môn Học (Subjects)
- Danh sách môn học
- Xem tài liệu liên quan
- Link đến kho thiết bị theo môn

### 👤 Trang Cá Nhân (Profile)
- Xem thông tin tài khoản
- Chỉnh sửa thông tin cá nhân
- Đổi mật khẩu
- Đăng xuất

### 🛠️ Quản Lý Thiết Bị (Equipment Management)
- Bảng thiết bị đang mượn
- Lịch sử mượn/trả
- Yêu cầu mượn thiết bị mới
- Confirm/deny requests

---

## 📁 Cấu Trúc Dự Án

```
project-root/
├── index.html                 # Trang chủ
├── css/
│   ├── variables.css         # Design tokens (colors, spacing, typography)
│   ├── reset.css             # Normalize browser defaults
│   ├── base.css              # Global typography & utilities
│   ├── layout.css            # Container, header, footer, grid
│   ├── components.css        # Button, card, form, calendar, dropdown
│   ├── forms.css             # Form styling & validation states
│   ├── auth.css              # Authentication page layouts
│   └── responsive.css        # Mobile-first breakpoints (mobile, tablet, desktop)
├── pages/
│   ├── login.html            # Login form
│   ├── signup.html           # Registration form
│   ├── kho.html              # Equipment storage/inventory
│   ├── lich.html             # Calendar/schedule
│   ├── mon-hoc.html          # Subjects listing
│   ├── profile.html          # User profile management
│   └── quan-ly-thiet-bi.html # Equipment management dashboard
├── assets/
│   ├── js/
│   │   ├── utils.js          # Utility functions (debounce, date, localStorage)
│   │   ├── main.js           # Global DOM initialization & event listeners
│   │   ├── navbar.js         # Mobile menu toggle functionality
│   │   ├── sidebar-filter.js # Product filter sidebar logic
│   │   ├── modal.js          # Modal & dialog components
│   │   └── auth.js           # Authentication form validation & handling
│   ├── image/                # Product images & illustrations
│   ├── icons/                # SVG icons
│   └── fonts/                # Custom fonts (Be Vietnam Pro)
├── README.md                 # This file
└── struct.txt               # Project specifications & design tokens

```

---

## 💻 Công Nghệ Sử Dụng

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Media Queries
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Responsive Design** - Mobile-first approach

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Build & Deployment
- No build tool required (vanilla HTML/CSS/JS)
- Can be hosted on any static file server
- Optional: Minify CSS/JS for production

---

## 🎨 Hệ Thống Thiết Kế

### 🎭 Màu Sắc (Colors)

```css
Primary:        #0B5FFF  /* Main brand color */
Primary-Dark:   #0A2540  /* Dark variant */
Accent:         #FF1493  /* Call-to-action */
Success:        #10B981
Warning:        #F59E0B
Danger:         #EF4444
Info:           #3B82F6

Gray-900:       #111827  /* Darkest text */
Gray-600:       #4B5563  /* Secondary text */
Gray-200:       #F3F4F6  /* Light background */
Gray-50:        #FAFBFC  /* Lightest background */
```

### 📝 Phông Chữ (Typography)

```css
Font Family:    Be Vietnam Pro

Sizes (px):
  - xs:  12px   (small labels)
  - sm:  14px   (secondary text)
  - base: 16px  (body text)
  - lg:  18px   (headings)
  - xl:  20px   (section titles)
  - 2xl: 24px   (main heading)
  - 3xl: 32px   (page title)
  - 4xl: 40px   (large title)
  - 5xl: 48px   (hero title)

Weights:
  - Light:    300
  - Regular:  400
  - Medium:   500
  - Semi:     600
  - Bold:     700

Line Heights:
  - Tight:    1.2
  - Base:     1.5
  - Relaxed:  1.75
  - Loose:    2.0
```

### 🔲 Khoảng Cách (Spacing)

```css
Base Unit: 4px

space-1:   4px
space-2:   8px
space-3:  12px
space-4:  16px   /* Common padding/margin )
space-6:  24px
space-8:  32px
space-12: 48px
space-16: 64px
```

### 🖲️ Các Thành Phần (Components)

1. **Button (.c-btn)**
   - Primary, Secondary, Outline, Accent, Link
   - Sizes: sm (14px), base (16px), lg (18px)
   - States: normal, hover, focus, active, disabled

2. **Card (.c-product-card, .c-stat-card, .c-news-card)**
   - Image/icon area
   - Content section with title, description
   - Action buttons or metadata footer
   - Hover effects on desktop

3. **Form (.c-form-group)**
   - Label, input, help text
   - Validation states: error, success
   - Focus state with border color
   - Required field marker

4. **Header (.c-header)**
   - Logo section
   - Navigation menu (responsive toggle on mobile)
   - Search input
   - Auth action buttons
   - Sticky on scroll

5. **Footer (.c-footer)**
   - Copyright notice
   - Company description
   - Contact info (hotline)
   - News items grid

### 📱 Responsive Breakpoints

```css
Mobile:         0px - 767px   (base styles)
Tablet:         768px - 1199px (expanded layouts)
Desktop:        1200px+       (full layouts)
Large Desktop:  1440px+       (max-width containers)

Specific:
- Small Mobile: ≤ 373px      (compact spacing)
- Print:        all media    (hide header/footer)
- High Contrast: prefers-contrast (thicker borders)
- Reduced Motion: prefers-reduced-motion (no animations)
```

---

## 🚀 Cài Đặt và Chạy

### Yêu Cầu
- Web browser bất kỳ (Chrome, Firefox, Safari, Edge)
- Server web để serve files (optional - có thể mở file trực tiếp)

### Cài Đặt Cơ Bản

```bash
# 1. Clone hoặc tải dự án
git clone <repository-url>
cd project-root

# 2. Nếu sử dụng Python (serving static files)
python -m http.server 8000

# 3. Nếu sử dụng Node.js/npm
npx http-server -p 8000

# 4. Nếu sử dụng PHP
php -S localhost:8000

# 5. Mở browser và truy cập
http://localhost:8000
```

### Cấu Hình Máy Chủ (Server)

**Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/seb;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ /index.html [QSA,L]
</IfModule>
```

---

## 📖 Hướng Dẫn Sử Dụng

### Người Dùng Cuối

#### 1. Đăng Nhập
1. Vào trang `/pages/login.html`
2. Nhập email (hoặc username) và mật khẩu
3. Click "ĐĂNG NHẬP"
4. Redirect về trang chủ nếu thành công

#### 2. Mượn Thiết Bị
1. Vào "Kho thiết bị" từ menu
2. (Optional) Lọc theo trạng thái hoặc danh mục
3. Click "Yêu cầu mượn" trên thiết bị mong muốn
4. Hoặc vào "Quản lý thiết bị" để gửi yêu cầu formal

#### 3. Quản Lý Tài Khoản
1. Click avatar/profile icon di góc phải
2. Vào "Trang cá nhân"
3. Click "Chỉnh sửa" để cập nhật thông tin
4. Hoặc "Đổi mật khẩu" để thay đổi mật khẩu

#### 4. Xem Lịch
1. Vào "Lịch" từ menu
2. Điều hướng qua các tháng
3. Click vào ngày để xem chi tiết (tính năng tương lai)

### Nhà Phát Triển

#### Thêm Trang Mới
1. Tạo file HTML trong `pages/`
2. Copy header/footer từ các trang hiện có
3. Import tất cả CSS files
4. Thêm script references (utils.js, main.js, navbar.js)
5. Cập nhật navigation menu trong `layout.css`

#### Thêm Component Mới
1. Viết CSS của component trong file thích hợp:
   - Components chính → `components.css`
   - Form elements → `forms.css`
   - Layout → `layout.css`
2. Sử dụng BEM naming convention (.c-component__element--modifier)
3. Sử dụng CSS variables cho màu/khoảng cách
4. Thêm responsive rules trong `responsive.css`

```css
/* Example: New Card Component */
.c-custom-card {
    padding: var(--space-4);
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: var(--transition-base);
}

.c-custom-card__title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
}

/* Responsive */
@media (min-width: 768px) {
    .c-custom-card {
        padding: var(--space-6);
    }
}
```

#### Thêm JavaScript Functionality
1. Tạo file trong `assets/js/`
2. Ghi code sử dụng vanilla JavaScript
3. Export functions để tái sử dụng: `window.ModuleName = { ... }`
4. Add script tag thích hợp trong HTML

```javascript
// Example Module
window.CustomModule = {
    init() {
        this.attachEvents();
    },
    
    attachEvents() {
        document.querySelectorAll('[data-custom]').forEach(el => {
            el.addEventListener('click', this.handleClick);
        });
    },
    
    handleClick(e) {
        console.log('Custom module clicked');
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.CustomModule.init();
});
```

---

## 🔌 API & Tích Hợp

### Backend API (Tương Lai)

**Endpoints cần implement:**

```
Authentication:
POST   /api/auth/login           # Login user
POST   /api/auth/signup          # Register user
POST   /api/auth/logout          # Logout
POST   /api/auth/refresh-token   # Refresh JWT

Equipment:
GET    /api/equipment            # List all equipment
GET    /api/equipment/:id        # Get single item
POST   /api/equipment            # Create (admin)
PUT    /api/equipment/:id        # Update (admin)
DELETE /api/equipment/:id        # Delete (admin)

Borrowing:
GET    /api/borrow               # My borrowed items
POST   /api/borrow               # Request borrow
PUT    /api/borrow/:id/return    # Return item
GET    /api/borrow/history       # Borrow history

User:
GET    /api/user/profile         # Get user info
PUT    /api/user/profile         # Update profile
POST   /api/user/change-password # Change password

Calendar:
GET    /api/calendar/:month      # Get events for month
POST   /api/calendar             # Create event (admin)
DELETE /api/calendar/:id         # Delete event (admin)
```

### Database Schema (Tương Lai)

```sql
-- Users
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    full_name VARCHAR(255),
    position VARCHAR(100),
    department VARCHAR(100),
    employee_id VARCHAR(50),
    phone VARCHAR(20),
    dob DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Equipment
CREATE TABLE equipment (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    model VARCHAR(255),
    category VARCHAR(100),
    status ENUM('available', 'borrowed', 'maintenance'),
    supplier VARCHAR(255),
    quantity INT,
    created_at TIMESTAMP
);

-- Borrow Requests
CREATE TABLE borrow_requests (
    id INT PRIMARY KEY,
    user_id INT,
    equipment_id INT,
    borrowed_date DATE,
    return_date_expected DATE,
    return_date_actual DATE,
    status ENUM('pending', 'approved', 'borrowed', 'returned'),
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (equipment_id) REFERENCES equipment(id)
);
```

### Authentication Flow

```
Frontend                          Backend
   |                                |
   |-- POST /api/auth/login ------> |
   |    (email, password)           |
   |                                | Validate credentials
   |                                | Generate JWT
   |  <-- JWT token --------------- |
   |                                |
   | Save JWT to localStorage       |
   |                                |
   | For each API request:          |
   |-- GET /api/equipment ---------> |
   |    (Authorization: Bearer JWT) |
   |                                | Verify JWT
   |  <-- Equipment list ---------- |
```

---

## 📚 Hỗ Trợ Phát Triển

### Debugging & Development

**Chrome DevTools Tips:**
- F12 để mở DevTools
- Console tab: Check console.log() messages
- Network tab: Monitor API calls (when backend integrated)
- Elements tab: Inspect CSS & DOM
- Storage tab: Check localStorage data

**Common Issues & Solutions:**

1. **Mobile menu không toggle**
   - Check `navbar.js` loaded
   - Verify `.c-header__menu-toggle` element exists
   - Check browser console for errors

2. **Form validation không hoạt động**
   - Ensure `auth.js` included
   - Check form IDs match script references
   - Validate email regex pattern

3. **Responsive layout không chuyển**
   - Open DevTools → Toggle device toolbar (Ctrl+Shift+M)
   - Test at: 320px (mobile), 768px (tablet), 1200px (desktop)
   - Check media queries in `responsive.css`

4. **Styling không áp dụng**
   - Hard refresh (Ctrl+Shift+R) to clear cache
   - Check CSS file order (variables must load first)
   - Validate CSS syntax with CSS validator

### Performance Optimization

**Minification:**
```bash
# CSS
npx csso-cli css/*.css -o css/style.min.css

# JavaScript  
npx terser assets/js/*.js -o assets/js/app.min.js
```

**Lazy Loading Images:**
```html
<img src="/placeholder.png" data-src="/actual-image.png" alt="Product">
<script>
    // Will be implemented by utils.js lazyLoadImages()
</script>
```

**Cache Busting:**
```html
<link rel="stylesheet" href="/css/variables.css?v=1.0.0">
<script src="/assets/js/main.js?v=1.0.0"></script>
```

---

## 📝 Changelog

### Version 1.0.0 (March 2025)
- ✅ Project initialization
- ✅ CSS architecture (7 layer system)
- ✅ 8 HTML pages with full layout
- ✅ JavaScript utilities (6 modules)
- ✅ Mobile-first responsive design
- ✅ Form validation & authentication UI
- ✅ Design system with 60+ tokens

### Upcoming (Planned)
- Backend API integration
- Real database with MySQL
- JWT authentication
- Admin dashboard
- Equipment QR codes
- Email notifications
- Analytics dashboard

---

## 📄 License

Copyright © 2025 OFM School Equipment Management System  
All rights reserved.

---

## 👥 Liên Hệ & Hỗ Trợ

**Hotline:** 0344655621  
**Email:** support@example.com  
**Website:** https://example.com

---

**Last Updated:** March 28, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
