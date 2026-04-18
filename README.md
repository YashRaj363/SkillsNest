<div align="center">
  <img src="src/assets/Logo/Logo-Full-Light.png" alt="SkillsNest Logo" width="300" />
  
  # SkillsNest 🚀 - Modern EdTech Marketplace
  
  **Transforming the way we learn, teach, and grow.**
  <br />
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-blue?style=for-the-badge&logo=vercel)](https://your-deployment-link.com) 
  [![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

<br/>

## 📖 Overview

**SkillsNest** is a fully functional, MERN-stack based EdTech marketplace designed to bridge the gap between skilled instructors and eager learners. Whether you are looking to acquire complete mastery of a technical skill or hunting for a robust platform to monetize your expert knowledge, SkillsNest offers a feature-rich, scalable, and beautifully designed solution.

This platform goes beyond just hosting video lectures; it provides a complete learning ecosystem featuring **secure Razorpay payments**, **OTP-based authentication**, **real-time progress tracking**, and a **data-rich instructor analytics dashboard**.

---

## 💡 Why This Project Stands Out

For engineering managers and recruiters reviewing this repository, SkillsNest demonstrates advanced proficiency in modern web development:

- **End-to-End Full Stack Architecture**: Showcases seamless integration between a distinct Node.js/Express backend and a React frontend.
- **Complex State Management**: Efficiently uses **Redux Toolkit** to handle complex global state across dozens of dependent components.
- **Third-Party Integrations**: Successfully coordinates with external microservices including **Razorpay** (Payments), **Cloudinary** (Media Hosting), and **Nodemailer** (Transactional Emails).
- **Security First**: Implements robust security protocols including **JWT Authentication**, **Bcrypt** password hashing, and role-based route protection (Admin vs. Instructor vs. Student).
- **Scalable Database Design**: Complex relational schemas within MongoDB (Mongoose) handling Users, Courses, Sections, Sub-sections, and dynamically tracking Course Progress.

---

## 📸 Sneak Peek

Have a look at the application in action. *(Note to self: ensure images are loaded or update paths to hosted versions if needed)*

<div align="center">
  <img src="src/assets/Images/boxoffice.png" alt="Home Page" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);" />
  <br/>
  <i>Seamlessly discover your next coding adventure.</i>
</div>

<br/>

<div align="center">
  <img src="src/assets/Images/Instructor.png" alt="Instructor Dashboard" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);" />
  <br/>
  <i>Detailed analytics and course management for instructors.</i>
</div>

---

## 🔥 Key Features

### For Students
*   **Course Discovery & Ratings:** Browse tech courses, read detailed outcome expectations, and view verified reviews from other learners.
*   **Secure Cart & Payments:** Add to cart and checkout smoothly with integrated **Razorpay**.
*   **Persistent Learning Dashboard:** Track section-by-section course progress and consume rich media video lectures via integrated video players.
*   **Secure Authentication:** Multi-factor feels via OTP-based email verification right from onboarding.

### For Instructors
*   **Intuitive Course Builder:** Create, edit, and organize courses. Upload thumbnails and video lectures directly to Cloudinary.
*   **Content Hierarchy:** Organize learning materials systematically into Modules (Sections) and Lectures (Sub-sections).
*   **Instructor Analytics:** A dedicated dashboard displaying total revenue, enrollments, and interactive performance charts (Chart.js integrated).

---

## 🛠️ Technical Stack

### **Frontend**
*   **React.js (v19)** with React Router DOM for seamless Single Page Application (SPA) navigation.
*   **Tailwind CSS** for rapid, utility-first, and highly responsive styling.
*   **Redux Toolkit** & **React Hook Form** for state management and complex form validations.
*   **Framer Motion** for subtle, professional micro-animations.

### **Backend**
*   **Node.js & Express.js** providing a robust RESTful API.
*   **MongoDB & Mongoose ODM** for flexible, scalable data storage.
*   **JWT & Bcrypt** for rock-solid authentication and authorization.

### **Cloud & Third Party Services**
*   **Cloudinary** (Image & Video Media Hosting)
*   **Razorpay** (Payment Gateway)
*   **SendGrid / Nodemailer** (SMTP for OTP & Email Notifications)

---

## 🚦 Local Setup & Installation

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have **Node.js** and **npm** installed. You'll also need a **MongoDB URI**, a **Cloudinary Account**, and **Razorpay Test Keys**.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/SkillsNest.git
cd SkillsNest
```

### 2. Install Dependencies
This project uses concurrently to run the client and server simultaneously. Install root dependencies, and you might need to install client/server independently depending on the setup:
```bash
npm install
cd server
npm install
cd ..
```

### 3. Environment Variables
Create a `.env` file in the root directory (and your server folder, based on your structure) and add your respective secret keys:

```env
# Database Structure
DATABASE_URL=your_mongodb_uri

# Server Configuration
PORT=3000
JWT_SECRET=your_secret_key

# Email Configuration (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

# Cloudinary Integration
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
FOLDER_NAME="SkillsNest"

# Razorpay Integration
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

### 4. Run the Application
Start both the React frontend and Node server simultaneously from the root directory:
```bash
npm run dev
```

Your frontend will usually be accessible at `http://localhost:3000` and the backend strictly handling API routes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

<div align="center">
  <p>Made with ❤️ by the YAsh Raj</p>
</div>
