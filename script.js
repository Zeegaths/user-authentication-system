// script.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFT1l1uz7xIDNfbWKBNsBJKzPfep6KXEM",
    authDomain: "mary-assessment.firebaseapp.com",
    projectId: "mary-assessment",
    storageBucket: "mary-assessment.appspot.com",
    messagingSenderId: "23515313380",
    appId: "1:23515313380:web:730eb9a4d9eb94f45ea8f1",
    measurementId: "G-3F7HD4NXJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase Authentication object
const auth = getAuth(app);

// Elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const logoutBtn = document.getElementById("logout-btn");
const dashboard = document.getElementById("dashboard");

// User Authentication State Listener
auth.onAuthStateChanged(user => {
    if (user) {
        loginForm.style.display = "none";
        registerForm.style.display = "none";
        logoutBtn.style.display = "block";
        dashboard.style.display = "block";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "block";
        logoutBtn.style.display = "none";
        dashboard.style.display = "none";
    }
});

// Register User
function register() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error.message);
        });
}

// Login User
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error.message);
        });
}

// Logout User
function logout() {
    auth.signOut();
}
