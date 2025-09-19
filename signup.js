// Firebase Signup Module for signup.html
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// Use the SAME config you used in login.js
const firebaseConfig = {
    apiKey: "AIzaSyB0Pnggdn6_I4xAeTpBDI6NfxyEozvIR9U",
    authDomain: "cursor-d6eb0.firebaseapp.com",
    projectId: "cursor-d6eb0",
    storageBucket: "cursor-d6eb0.firebasestorage.app",
    messagingSenderId: "767343685657",
    appId: "1:767343685657:web:7828787870c8f1a9707a88",
    measurementId: "G-RDXTXBK1HZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('signup-email');
const passwordInput = document.getElementById('signup-password');
const confirmInput = document.getElementById('signup-confirm');
const rememberCheckbox = document.getElementById('remember');

form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const displayName = nameInput?.value?.trim() || '';
    const email = emailInput?.value?.trim() || '';
    const password = passwordInput?.value || '';
    const confirm = confirmInput?.value || '';

    if (!displayName || !email || !password || !confirm) {
        alert('Please fill in all fields.');
        return;
    }
    if (password !== confirm) {
        alert('Passwords do not match.');
        return;
    }

    try {
        const persistence = (rememberCheckbox && rememberCheckbox.checked)
            ? browserLocalPersistence
            : browserSessionPersistence;
        await setPersistence(auth, persistence);

        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (cred?.user && displayName) {
            await updateProfile(cred.user, { displayName });
        }
        // Redirect to login or directly to student.html
        window.location.href = './student.html';
    } catch (error) {
        console.error('Signup error:', error);
        alert(error.message || 'Failed to sign up. Please try again.');
    }
});

export { auth };


