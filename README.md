
# 🎬 Netflix Clone

A responsive, feature-rich Netflix clone built with **React** and **Firebase**, allowing users to sign up, log in, and experience a streamlined media browsing experience.

> **Live Demo**: `https://abhishek-netflicx.netlify.app/`

---

## 🚀 Technologies Used

- **[React-Toastify](https://fkhadra.github.io/react-toastify/introduction)**  
  Used for displaying error messages and notifications during user login and signup flows.

- **[Firebase](https://firebase.google.com/)**  
  Implemented Firebase Authentication for secure user login/signup and Firebase Realtime Database for data storage.

- **[TMDB API](https://www.themoviedb.org/documentation/api)**  
  Integrated The Movie Database API to fetch real-time movie data.

- **Custom Code**  
  Most of the UI and application logic were built by me from scratch, with some occasional help and resources for guidance.



## 🔥 Tech Stack

- **Frontend**: React, CSS, JSX
- **Backend**: Firebase Auth, Firebase Firestore
- **Styling**: Custom CSS (fully responsive)
- **Deployment**: Firebase Hosting (optional)

---

## ✅ Current Features

- 🔐 **Authentication**
  - User **Sign Up** & **Log In** using Firebase Auth
  - Session persistence with `onAuthStateChanged`
  
- 🧑‍💻 **Secure Routing**
  - Protected routes accessible only when logged in

- 🧭 **Navigation**
  - Fully responsive navbar with scroll animation
  - Dynamic dropdown menu and profile section

- 🎨 **Responsive Design**
  - Optimized layout for mobile (450px and below)
  - Mobile-first navbar behavior

- 🔗 **Firebase Database Integration**
  - Connected to Firebase Firestore / Realtime Database
  - Future-ready for storing user data like favorites, history

---

## 🌟 Upcoming Features

- 👨‍👩‍👧‍👦 **User Profiles**
  - Support for multiple user profiles (name, avatar, preferences)

- ❤️ **"My List" Functionality**
  - Save movies/shows to personal watchlist using Firestore
  
- 🎞️ **Movie/Show Previews**
  - Stream trailers using `react-player` or embed previews

- 🧠 **TMDB API Integration**
  - Fetch real-time content (top rated, trending, genres)

- 💬 **Dynamic Genre Browsing**
  - Filter content by genre or language

- 📱 **Improved Mobile Experience**
  - Optimized mobile UI/UX with larger touch targets

- 🚀 **Firebase Hosting Deployment**
  - Host your app and share with others

- 💡 **Performance Enhancements**
  - Lazy loading, skeletons for loading states, and smooth transitions

---

## 🛠️ Installation

```bash
git clone https://github.com/abhisheek2/netflix-clone.git
cd netflix-clone
npm install
npm run dev
```


