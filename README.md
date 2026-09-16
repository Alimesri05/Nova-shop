# NOVA — Persian E-Commerce Store
# نوا — فروشگاه اینترنتی کالای دیجیتال

A modern, fully-featured Persian (RTL) e-commerce store for digital products. Built with pure HTML, Tailwind CSS, and Vanilla JavaScript.

فروشگاه آنلاین کامل کالای دیجیتال با پشتیبانی کامل از زبان فارسی و چیدمان راست‌به‌چپ (RTL). ساخته‌شده با HTML، Tailwind CSS و JavaScript خالص.

![Status](https://img.shields.io/badge/status-active-success)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## About / درباره پروژه

NOVA is a complete online store for digital products (phones, laptops, headphones, smartwatches, tablets, accessories). It includes a full shopping experience: product catalog, filters, cart, wishlist, compare, checkout, user accounts, blog, and customer support chatbot.

نوا یک فروشگاه اینترنتی کامل برای محصولات دیجیتال (گوشی، لپ‌تاپ، هدفون، ساعت هوشمند، تبلت و لوازم جانبی) است. تجربه خرید کامل شامل کاتالوگ، فیلترها، سبد خرید، علاقه‌مندی، مقایسه، تسویه، حساب کاربری، مجله و چت‌بات پشتیبانی.

Fully RTL-compatible and optimized for Persian language.
کاملاً RTL و بهینه‌شده برای زبان فارسی.

---

## Features / امکانات

### Shopping Experience / تجربه خرید
- **Product Catalog** — 24 products across 6 categories
- **کاتالوگ محصولات** — ۲۴ محصول در ۶ دسته‌بندی
- **Advanced Filters** — Category, brand, price, rating
- **فیلتر پیشرفته** — دسته، برند، قیمت، امتیاز
- **Sort Options** — Price, rating, discount, popularity
- **مرتب‌سازی** — قیمت، امتیاز، تخفیف، محبوبیت
- **Grid & List Views** — Toggle layouts
- **دو حالت نمایش** — جدولی و لیستی
- **Pagination** — Clean and accessible
- **صفحه‌بندی** — تمیز و در دسترس

### Cart & Checkout / سبد خرید و تسویه
- **Slide-in Cart Panel** — Live totals
- **پنل سبد خرید کشویی** — محاسبه لحظه‌ای
- **Coupon System** — `WELCOME10`, `NOVA20`, `FREESHIP`
- **سیستم کد تخفیف** — سه کد فعال
- **Shipping Progress Bar** — Free shipping over 5M
- **نوار پیشرفت ارسال** — ارسال رایگان بالای ۵ میلیون
- **3-Step Checkout** — Address → Shipping → Review
- **تسویه ۳ مرحله‌ای** — آدرس، ارسال، بازبینی
- **Order Tracking Code** — NV-XXXXXX
- **کد پیگیری سفارش** — NV-XXXXXX

### User Features / امکانات کاربری
- **Wishlist** — Save favorites
- **علاقه‌مندی‌ها** — ذخیره محصولات موردعلاقه
- **Compare** — Up to 4 products side-by-side
- **مقایسه** — تا ۴ محصول کنار هم
- **User Accounts** — Register/Login
- **حساب کاربری** — ثبت‌نام و ورود
- **Order History** — View past orders
- **تاریخچه سفارشات** — مشاهده سفارش‌های قبلی
- **Product Reviews** — Rate and comment
- **ثبت دیدگاه** — امتیاز و نظر
- **Recently Viewed** — Auto-saved
- **بازدیدهای اخیر** — ذخیره خودکار

### UI/UX
- **Dark / Light Mode** — Persisted preference
- **حالت شب و روز** — ذخیره انتخاب کاربر
- **Preloader Animation** — Branded loading
- **انیمیشن لودینگ** — با لوگو برند
- **Scroll Progress Bar** — Top of page
- **نوار پیشرفت اسکرول** — بالای صفحه
- **Ripple Effects** — On all buttons
- **افکت موج** — روی دکمه‌ها
- **3D Tilt** — On product cards
- **افکت سه‌بعدی** — روی کارت محصولات
- **Smart Chatbot** — Auto-responds
- **چت‌بات هوشمند** — پاسخ خودکار
- **Toast Notifications** — Non-blocking
- **اعلان‌های Toast** — بدون قطع کردن کاربر

### Content Sections / بخش‌های محتوایی
- **Hero Slider** — 3 slides with countdown
- **اسلایدر هیرو** — ۳ اسلاید با شمارش معکوس
- **Amazing Offers** — Flash deals
- **شگفت‌انگیزها** — تخفیف‌های محدود
- **Blog** — Full article reader
- **مجله** — خواننده کامل مقالات
- **FAQ** — Accordion
- **سوالات متداول** — آکاردئونی
- **Testimonials** — Auto-rotating
- **نظرات مشتریان** — چرخش خودکار
- **Newsletter** — Email signup
- **خبرنامه** — ثبت ایمیل
- **Contact Form** — With validation
- **فرم تماس** — با اعتبارسنجی

---

## Tech Stack / تکنولوژی‌ها

| Layer / لایه | Technology / تکنولوژی |
|--------------|----------------------|
| Markup / ساختار | HTML5 (RTL) |
| Styling / استایل | Tailwind CSS (CDN) + Custom CSS |
| Behavior / رفتار | Vanilla JavaScript (ES6+) |
| Icons / آیکون | Font Awesome 6 |
| Font / فونت | Vazirmatn |

**No build step. No npm. Just open `index.html`.**
**بدون نصب. بدون بیلد. فقط فایل `index.html` رو باز کن.**

---

## Project Structure / ساختار پروژه

```
nova-shop/
│
├── index.html          # Main page / صفحه اصلی
├── style.css           # Custom styles / استایل‌های اختصاصی
├── script.js           # App logic / منطق برنامه
│
├── images/             # Product & UI images / عکس‌ها
│   ├── nova-icon.svg
│   ├── nova-hero.jpg
│   ├── p1-1.jpg ... p24-3.jpg
│   └── ...
│
├── .gitignore
└── README.md
```

---

## Getting Started / اجرا

### Local Development / اجرای محلی

1. **Clone / کلون کن**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nova-shop.git
   cd nova-shop
   ```

2. **Open in browser / باز کن توی مرورگر**
   - Double-click `index.html`
   - یا از یه سرور محلی استفاده کن:
     ```bash
     python -m http.server 8000
     ```

3. **Visit / آدرس**
   ```
   http://localhost:8000
   ```

---

## Demo Coupons / کدهای تخفیف تست

| Code / کد | Discount / تخفیف |
|-----------|------------------|
| `WELCOME10` | 10% off (max 2M) / ۱۰٪ تخفیف |
| `NOVA20` | 20% off (min 10M) / ۲۰٪ تخفیف |
| `FREESHIP` | Free shipping / ارسال رایگان |

---

## Keyboard Shortcuts / کلیدهای میانبر

| Key / کلید | Action / عملکرد |
|------------|-----------------|
| `/` | Focus search / جستجو |
| `Esc` | Close modal / بستن پنجره |
| `←` / `→` | Navigate images / عکس‌های بعدی و قبلی |

---

## Deployment / انتشار

### GitHub Pages
1. Repository → **Settings** → **Pages**
2. Source: `main` / `root`
3. Save → Site live at `https://YOUR_USERNAME.github.io/nova-shop/`

### Netlify / Vercel
- Drag & drop the folder
- یا از طریق GitHub برای آپدیت خودکار

### Traditional Hosting / هاست معمولی
- همه فایل‌ها رو از طریق FTP آپلود کن

---

## Roadmap / مسیر آینده

- [ ] Backend API (Node.js + MongoDB)
- [ ] Real payment gateway (Zarinpal / Shaparak)
- [ ] Admin dashboard / پنل مدیریت
- [ ] Real authentication (JWT)
- [ ] Email notifications
- [ ] Multi-language (EN / FA)

---

## License / لایسنس

This project is proprietary software. All rights reserved.
این پروژه نرم‌افزار اختصاصی است. تمامی حقوق محفوظ است.

---

## Author / نویسنده

**Ali Mesri (علی مصری)**

- GitHub: [@Alimesri05](https://github.com/Alimesri05)
- Email: mesriali931@gmail.com

---

## Acknowledgments / تشکر و قدردانی

- Icons by [Font Awesome](https://fontawesome.com)
- Font by [Vazirmatn](https://github.com/rastikerdar/vazirmatn)
- Inspired by modern Iranian e-commerce stores
