// Firebase Login Module for login.html
// Replace the firebaseConfig values with your project's credentials

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// TODO: Paste your Firebase config here (from Firebase Console > Project Settings > General)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0Pnggdn6_I4xAeTpBDI6NfxyEozvIR9U",
    authDomain: "cursor-d6eb0.firebaseapp.com",
    projectId: "cursor-d6eb0",
    storageBucket: "cursor-d6eb0.firebasestorage.app",
    messagingSenderId: "767343685657",
    appId: "1:767343685657:web:7828787870c8f1a9707a88",
    measurementId: "G-RDXTXBK1HZ"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const form = document.querySelector('form.form-container');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.querySelector('.remember-me input');
const forgotLink = document.querySelector('.forgot-link');

// Handle login submit
form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput?.value?.trim() || '';
    const password = passwordInput?.value || '';

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    try {
        const persistence = (rememberCheckbox && rememberCheckbox.checked)
            ? browserLocalPersistence
            : browserSessionPersistence;
        await setPersistence(auth, persistence);

        await signInWithEmailAndPassword(auth, email, password);

        // Redirect on success (adjust path if needed)
        window.location.href = './student.html';
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message || 'Failed to sign in. Please try again.');
    }
});

// Handle password reset
forgotLink?.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = emailInput?.value?.trim() || '';
    if (!email) {
        alert('Enter your email above, then click Forgot Password.');
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset email sent. Check your inbox.');
    } catch (error) {
        console.error('Reset error:', error);
        alert(error.message || 'Failed to send reset email.');
    }
});

export { auth };


