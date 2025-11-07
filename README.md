# 🌐 Malachi Rewane — ExpressJS Portfolio  

## 🔗 Live Website  
**Render Link:** [https://portfolio-express-4jly.onrender.com/](https://portfolio-express-4jly.onrender.com/)  

---

## 📘 Overview  
This is a **Node.js + Express.js** portfolio website that presents my background, projects, and contact information.  
Originally a static HTML/CSS project, it was refactored to use **Express routing** and **EJS templating** for modular design and deployment on **Render**.  

---

## 🧠 Learning Goals  
This project demonstrates:  
- Setting up an Express.js web server  
- Creating routes for multiple pages  
- Using **EJS templates** for rendering views  
- Managing static files (CSS, images, videos)  
- Designing a responsive layout with multiple stylesheets  
- Deploying a Node.js app using Render  

---

## 🗂 Folder Structure  

portfolio-express/
├── app.js # Main Express app setup
├── /routes # Route files (index.js, users.js)
├── /views # EJS pages (index, about, projects, contact)
├── /public # Static assets (CSS, images, videos)
│ └── /css # style.css, mobile.css, tablet.css, laptop.css
└── /bin/www # Server startup script for Render


---

## 🖥️ Pages  

### 🏠 Home  
Intro message with navigation to all pages.  

### 👤 About Me  
Information about me, my interests, and a short intro video.  

### 💻 Projects  
Grid of project cards including:  
- Face Detection with OpenCV  
- Website Security Review  
- Game Development Prototype  
- Personal Portfolio  

### 📬 Contact Me  
Simple contact form (front-end only) collecting name, email, phone, and message.  

---

## ⚙️ Technologies  
| Tool | Purpose |
|------|----------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework & routing |
| **EJS** | Template rendering |
| **HTML5 / CSS3** | Structure and styling |
| **Render** | Hosting and deployment |

---

## 🚀 Setup  

```bash
# Clone the repository
git clone https://github.com/malachirewane/portfolio-express.git
cd portfolio-express

# Install dependencies
npm install

# Run locally
npm start
# Visit http://localhost:3000