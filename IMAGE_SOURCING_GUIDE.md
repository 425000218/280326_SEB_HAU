# Hướng dẫn tìm kiếm và cập nhật hình ảnh

## Tổng quan

Dự án hiện tại sử dụng hình ảnh placeholder (SVG) tạm thời. Hướng dẫn này giúp bạn thay thế chúng bằng hình ảnh thực tế từ các nguồn miễn phí trên internet.

---

## 1. Danh sách hình ảnh cần sử dụng

### A. Hình ảnh sản phẩm/thiết bị (18 tham chiếu)
**Đường dẫn hiện tại:** `/assets/image/products/placeholder.svg`
**Sử dụng tại:** 
- index.html (6 hình)
- pages/kho.html (12 hình)

**Danh sách thiết bị cần hình ảnh:**
1. Máy chiếu Panasonic (Projector)
2. Nhiệt kế 100 độ (Thermometer)
3. ~~Trường~~ (Microscope)
4. Laptop Dell XPS
5. Màn hình Dell S2423 (Monitor)
6. Bộ lục kế (Prism Set)
7. Thước đo độ (Protractor/Measuring ruler)
8. Microphone
9. Tablet Samsung

---

### B. Hình ảnh tin tức (4 tham chiếu)
**Đường dẫn hiện tại:** `/assets/image/news-placeholder.svg`
**Sử dụng tại:**
- index.html (2 hình)
- pages/kho.html (2 hình)

**Chủ đề tin tức:**
- Sự kiện mở triển lãm thiết bị khoa học
- Workshop về sử dụng thiết bị hiện đại

---

### C. Hình ảnh minh họa (2 tham chiếu)
**Đường dẫn hiện tại:** `/assets/image/illustrations/auth-person.svg`
**Sử dụng tại:**
- pages/login.html (1 hình)
- pages/signup.html (1 hình)

**Mô tả:** Hình minh họa người dùng/avatar cho trang đăng nhập

---

## 2. Trang web tìm kiếm hình ảnh miễn phí

### A. Ảnh sản phẩm chất lượng cao
✅ **Pexels.com** (Khuyên dùng)
- URL: https://www.pexels.com/
- Đặc điểm: Ảnh HD, miễn phí, không cần ghi công
- Cách tìm:
  1. Search: "projector equipment" hoặc "school laboratory"
  2. Filter: Chọn ảnh horizontal 400x300px hoặc tương tự
  3. Download: Click chuột phải > Save image

✅ **Unsplash.com**
- URL: https://unsplash.com/
- Đặc điểm: Ảnh chuyên nghiệp rất sắc nét
- Cách tìm: Search "laboratory equipment" hoặc "educational technology"

✅ **Pixabay.com**
- URL: https://pixabay.com/
- Đặc điểm: Đa dạng loại ảnh, icon, vector
- Cách tìm: Search "school supplies" hoặc "laboratory"

---

### B. Hình minh họa người dùng
✅ **Flaticon.com** (Khuyên dùng)
- URL: https://www.flaticon.com/
- Đặc điểm: Icon và hình minh họa vector
- Cách tìm:
  1. Search: "person" hoặc "user avatar"
  2. Chọn PNG format (không cần credit nếu premium)
  3. Download

✅ **Undraw.co**
- URL: https://undraw.co/
- Đặc điểm: Hình minh họa SVG/PNG đẹp, có thể tùy chỉnh màu
- Cách tìm: Search "people" hoặc "person sitting"

---

### C. Hình ảnh tin tức/sự kiện
✅ **Pexels.com** (Khuyên dùng)
- Search: "classroom event" hoặc "school celebration"

✅ **Unsplash.com**
- Search: "educational workshop" hoặc "learning"

---

## 3. Kích thước hình ảnh khuyến nghị

| Loại | Kích thước | Định dạng |
|------|-----------|-----------|
| Sản phẩm | 300×200px | JPG (60% quality) hoặc PNG |
| Tin tức | 400×300px | JPG (60% quality) hoặc PNG |
| Người dùng | 400×500px | PNG hoặc SVG |

---

## 4. Links gợi ý cho hình ảnh cụ thể

### Máy chiếu chuyên dụng
- Pexels: https://www.pexels.com/search/projector/
- Tìm ảnh: Máy chiếu chuyên nghiệp, góc ¾, nền trắng/xám

### Thiết bị khoa học
- Pexels: https://www.pexels.com/search/laboratory/
- Unsplash: https://unsplash.com/s/photos/laboratory-equipment

### Laptop/Máy tính
- Pexels: https://www.pexels.com/search/laptop/
- Tìm: Laptop hiển thị màn hình work/education

### Sự kiện giáo dục
- Pexels: https://www.pexels.com/search/workshop/
- Unsplash: https://unsplash.com/s/photos/educational-workshop

### Người dùng/Avatar
- Flaticon (avatars): https://www.flaticon.com/search/avatars
- Undraw (people): https://undraw.co/search?q=people
- Icons8: https://icons8.com/illustrations

---

## 5. Hướng dẫn tải xuống và cập nhật

### Bước 1: Tải hình ảnh
1. Vào một trong những trang web trên
2. Tìm kiếm từ khóa phù hợp
3. Chọn kích thước phù hợp (xem mục 3)
4. Tải xuống (Ctrl+S hoặc Download button)

### Bước 2: Đổi tên file
- **Sản phẩm:** `product-1.jpg`, `product-2.jpg`, ... hoặc theo tên sản phẩm: `projector.jpg`, `thermometer.jpg`
- **Tin tức:** `news-1.jpg`, `news-2.jpg`
- **Người dùng:** `auth-person.jpg` hoặc `user-avatar.jpg`

### Bước 3: Tổ chức thư mục
```
assets/image/
├── products/
│   ├── placeholder.svg (giữ lại dự phòng)
│   ├── projector.jpg
│   ├── thermometer.jpg
│   ├── microscope.jpg
│   └── ... (các sản phẩm khác)
├── illustrations/
│   ├── auth-person.svg (hiện tại)
│   └── auth-person.jpg (sau khi tải)
└── news/
    ├── event-1.jpg
    └── event-2.jpg
```

### Bước 4: Cập nhật đường dẫn HTML
**Ví dụ - Thay thế trong index.html:**

Từ:
```html
<img src="/assets/image/products/placeholder.svg" alt="Máy chiếu" class="c-product-card__image">
```

Thành:
```html
<img src="/assets/image/products/projector.jpg" alt="Máy chiếu Panasonic" class="c-product-card__image">
```

---

## 6. Danh sách cập nhật đầy đủ

### index.html - 8 hình ảnh
```html
<!-- Hàng 131 -->
<img src="/assets/image/products/projector.jpg" alt="Máy chiếu">

<!-- Hàng 145 -->
<img src="/assets/image/products/thermometer.jpg" alt="Nhiệt kế">

<!-- Hàng 159 -->
<img src="/assets/image/products/microscope.jpg" alt="Kính hiển vi">

<!-- Hàng 173 -->
<img src="/assets/image/products/laptop.jpg" alt="Laptop">

<!-- Hàng 187 -->
<img src="/assets/image/products/monitor.jpg" alt="Màn hình">

<!-- Hàng 201 -->
<img src="/assets/image/products/prism.jpg" alt="Bộ lục kế">

<!-- Hàng 225 -->
<img src="/assets/image/news/event-1.jpg" alt="Sự kiện">

<!-- Hàng 234 -->
<img src="/assets/image/news/event-2.jpg" alt="Workshop">
```

### pages/login.html
```html
<!-- Hàng 39 -->
<img src="/assets/image/illustrations/auth-person.jpg" alt="Người dùng">
```

### pages/signup.html
```html
<!-- Hàng 39 -->
<img src="/assets/image/illustrations/auth-person.jpg" alt="Người dùng">
```

### pages/kho.html - 14 hình ảnh
```html
<!-- 12 sản phẩm giống index.html -->
<!-- 2 tin tức -->
<img src="/assets/image/news/event-1.jpg" alt="Tin tức">
<img src="/assets/image/news/event-2.jpg" alt="Tin tức">
```

---

## 7. Tối ưu hóa hình ảnh (Tuỳ chọn)

Sau khi tải hình ảnh, có thể tối ưu hóa:

### Nén kích thước
- **TinyPNG.com**: Nén PNG/JPG lên đến 80% mà không mất chất lượng
- **ImageOptim.com**: Tối ưu hóa ảnh trực tuyến

### Chuyển đổi định dạng
- JPG cho ảnh màu (nhẹ hơn)
- PNG cho ảnh có transparency
- WebP (nâng cao - hỗ trợ trình duyệt hiện đại)

### Kích thước tệp mục tiêu
- Sản phẩm: <80KB mỗi ảnh
- Tin tức: <100KB mỗi ảnh
- Người dùng: <50KB mỗi ảnh

---

## 8. Yêu cầu bản quyền

Các trang web được khuyên dùng (Pexels, Unsplash, Pixabay) đều **không yêu cầu ghi công** (CC0 - Public Domain). Bạn có thể sử dụng tự do cho dự án cá nhân hoặc thương mại.

---

## 9. Kiểm tra sau khi cập nhật

1. Open tất cả HTML files trong browser
2. Kiểm tra tất cả hình ảnh hiển thị đúng
3. Kiểm tra responsive (F12 > Toggle device toolbar)
4. Commit lên GitHub:
   ```bash
   git add assets/image/*
   git commit -m "Add actual product and news images"
   git push -u origin main
   ```

---

## Câu hỏi thường gặp (FAQ)

**Q: Tải ảnh từ Google Images được không?**
A: Không khuyến khích (vấn đề bản quyền). Dùng các trang trên để an toàn.

**Q: Cần ảnh chính xác là 300×200px không?**
A: Không cần tuần tự. CSS sẽ tự scale. Khuyến nghị gần đó (ví dụ 400×250) để tránh blur.

**Q: Có cần thay SVG hiện tại?**
A: Không bắt buộc. SVG vẫn hoạt động tốt. Chỉ thay nếu muốn ảnh thực tế.

**Q: Làm thế nào để giữ nguyên SVG dự phòng?**
A: Giữ file `placeholder.svg` trong folder, chỉ cập nhật HTML để dùng ảnh mới.

---

**Hoàn thành!** Sau khi làm theo hướng dẫn trên, dự án sẽ có hình ảnh thực tế và chuyên nghiệp hơn. 📸
