# 🎯 HobbyHub: A Local Hobby Group Organizer

![React](https://img.shields.io/badge/React-18.x-%2361DAFB?logo=react&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-v6-%23CA4245?logo=react&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-%2338B2AC?logo=tailwind-css&logoColor=white) ![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-%23FFCA28?logo=firebase&logoColor=black) ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-%23ED564E?logo=sweetalert&logoColor=white) ![React Simple Typewriter](https://img.shields.io/badge/React_Simple_Typewriter-%23F9A825?logo=typewriter&logoColor=white) ![React Awesome Reveal](https://img.shields.io/badge/React_Awesome_Reveal-%234CAF50?logo=react&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-18.x-%2343853D?logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-%23404d59?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?logo=mongodb&logoColor=white) ![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-%23000000?logo=vercel&logoColor=white)

🔗 **Live Site:** [https://jhinku-hobbyhub.vercel.app/ ](https://jhinku-hobbyhub.vercel.app/)

HobbyHub is a vibrant, responsive web application designed to connect people through shared hobbies and interests. Whether you're into painting, hiking, gaming, or reading — HobbyHub helps you find or create local groups that match your passion. It’s community-driven, simple to use, and built with scalability in mind.

---

## 🌟 Key Features

🔐 **User Authentication** – Email/password login with Google Auth support. Secure and seamless sign-up and login flow using Firebase.

🏕️ **Join & Create Hobby Groups** – Easily create, manage, or join local hobby-based groups with custom fields like location, category, and start date.

🛡️ **Protected Routes** – Private pages (like "My Groups" and "Create Group") are protected and accessible only to authenticated users.

🎨 **Unique UI/UX** – A distinct design with responsive layouts for desktop, tablet, and mobile screens. Includes dark/light theme toggle.

🧠 **Smart Group Management** – Prevents users from joining inactive/expired groups. Includes update/delete functionality with real-time feedback.

🎥 **Modern Animations** – Uses Lottie animations, React Simple Typewriter, and React Awesome Reveal for engaging visuals.

---

## 📄 Pages & Functionalities

### Public Pages:

- **Home**: Hero banner slider, featured groups, and informative static sections.
- **All Groups**: Browse and explore all available hobby groups.
- **Login/Register**: Email/password login, Google login, with form validation and visual feedback.

### Private Pages (Auth Required):

- **Create Group**: Fill out a form with detailed group info and save to DB.
- **My Groups**: View, update, and delete groups you've created.
- **Group Details**: Full group info with a conditional “Join Group” button based on group start date.
- **Update Group**: Update your group info via a page or optional modal.

---

## 🛠️ Tech Stack

| Category     | Technologies Used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/React-18.x-%2361DAFB?logo=react) ![React Router](https://img.shields.io/badge/React_Router-v6-%23CA4245?logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-%2338B2AC?logo=tailwind-css) ![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-%23FFCA28?logo=firebase) ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-%23ED564E?logo=sweetalert) ![Typewriter](https://img.shields.io/badge/React_Simple_Typewriter-%23F9A825?logo=typewriter) ![React Awesome Reveal](https://img.shields.io/badge/React_Awesome_Reveal-%234CAF50) |
| **Backend**  | ![Node.js](https://img.shields.io/badge/Node.js-18.x-%2343853D?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-%23404d59?logo=express) ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?logo=mongodb) ![Vercel](https://img.shields.io/badge/Vercel-%23000000?logo=vercel)                                                                                                                                                                                                                                                                                                           |
| **Hosting**  | ![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-%23000000?logo=vercel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## ✅ Project Highlights

- 💾 15+ Client Commits & 8+ Server Commits
- 📱 Fully Responsive across all devices
- 🚫 No Lorem Ipsum or Default Alerts Used
- 🧪 Toast-based feedback for all auth and group actions
- 🔐 Auth-protected routing without redirect on reload

![demo](demo.png)

![flow](flow.png)
