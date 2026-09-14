# ✍️ QuickBlog — Nền tảng Viết Blog Thông minh Tích hợp AI (MERN Stack)

<p align="center">
  <strong>Hệ thống Blog Fullstack hiện đại hỗ trợ soạn thảo nội dung, tự động tạo bài viết bằng Google Gemini AI và lưu trữ ảnh đám mây qua ImageKit.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-Express_5-green?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Google_Gemini-AI_2.5_Flash_Lite-orange?style=for-the-badge&logo=google" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.1.18-38bdf8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/ImageKit-Cloud_Upload-0055FF?style=for-the-badge" alt="ImageKit" />
</p>

---

## 📖 Giới thiệu dự án

**QuickBlog** là ứng dụng Web Blog Fullstack được xây dựng trên nền tảng **MERN Stack** gồm MongoDB, Express, React và Node.js.

Dự án cung cấp giải pháp toàn diện cho việc sáng tạo và quản lý nội dung blog, bao gồm soạn thảo bài viết, hỗ trợ tạo nội dung bằng **Google Gemini AI**, tải hình ảnh lên **ImageKit**, hệ thống bình luận và bảng điều khiển quản trị.

- **Tác giả / Lập trình viên:** Đỗ Khắc Thịnh
- **GitHub:** [@DoThinh49](https://github.com/DoThinh49)

---

## ✨ Tính năng nổi bật

### 🤖 1. Hỗ trợ viết Blog bằng AI

- Tích hợp **Google Gemini AI** thông qua thư viện `@google/genai`.
- Sử dụng model **gemini-2.5-flash-lite**.
- Hỗ trợ tự động tạo nội dung bài viết dựa trên yêu cầu của người dùng.

### 📝 2. Soạn thảo nội dung

- Tích hợp **Quill Rich Text Editor**.
- Hỗ trợ định dạng nội dung trực quan.
- Sử dụng **Marked** để xử lý nội dung Markdown.
- Hỗ trợ tạo, chỉnh sửa và quản lý bài viết.

### 🖼️ 3. Upload và quản lý hình ảnh

- Sử dụng **Multer** để xử lý file upload.
- Tích hợp **ImageKit SDK** để lưu trữ hình ảnh trên cloud.
- Hỗ trợ upload hình ảnh bìa cho bài viết.

### 💬 4. Hệ thống bình luận

- Người dùng có thể bình luận trên bài viết.
- Dữ liệu bình luận được lưu trữ trong MongoDB.
- Quản trị viên có thể quản lý bình luận.

### 🛡️ 5. Quản trị và bảo mật

- Xác thực người dùng bằng **JWT**.
- Hỗ trợ đăng nhập và phân quyền.
- Quản lý bài viết và danh mục.
- Chuyển đổi trạng thái bài viết giữa **Published** và **Draft**.
- Quản lý và kiểm duyệt bình luận.

---

## 🛠️ Công nghệ sử dụng

### Frontend

- **React 19**
- **Vite 7**
- **React Router DOM 7**
- **Tailwind CSS 4**
- **Motion**
- **Quill**
- **Marked**
- **Axios**
- **React Hot Toast**
- **React Toastify**

### Backend

- **Node.js**
- **Express 5**
- **MongoDB**
- **Mongoose**
- **Google Gemini AI**
- **ImageKit**
- **JWT**
- **Multer**

---

## 📁 Cấu trúc dự án

```text
QuickBlog/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
🚀 Hướng dẫn cài đặt và chạy dự án
1. Clone repository
git clone https://github.com/DoThinh49/QuickBlog.git
cd QuickBlog
2. Cài đặt Backend
cd server
npm install

Tạo file .env trong thư mục server:

PORT=5000
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
GEMINI_API_KEY="your_gemini_api_key"
IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
IMAGEKIT_URL_ENDPOINT="your_imagekit_url_endpoint"

Chạy Backend:

npm run server
3. Cài đặt Frontend

Mở một terminal mới:

cd client
npm install
npm run dev

Sau khi chạy thành công, truy cập:

http://localhost:5173
🔐 Biến môi trường

Các thông tin nhạy cảm như API Key, JWT Secret và MongoDB Connection String không được đưa trực tiếp lên GitHub.

Thêm các dòng sau vào .gitignore:

.env
node_modules/
👨‍💻 Tác giả

Đỗ Khắc Thịnh

GitHub: DoThinh49
