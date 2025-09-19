// Firebase Student Module for student.html
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// Use the SAME config used in signup.js/login.js
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

// Guard route and personalize UI
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = './login.html';
        return;
    }

    const displayName = user.displayName || (user.email ? user.email.split('@')[0] : 'User');

    // Update sidebar name
    const nameEl = document.querySelector('.user-profile-preview h3');
    if (nameEl) {
        nameEl.textContent = displayName;
    }

    // Update welcome message if present
    const welcomeEl = document.querySelector('#dashboard .alert-success');
    if (welcomeEl && welcomeEl.innerHTML.includes('Welcome back,')) {
        welcomeEl.innerHTML = welcomeEl.innerHTML.replace(/Welcome back, [^!]+!/, `Welcome back, ${displayName}!`);
    }
});

// Wire Logout
const logoutLink = document.querySelector('.sidebar-footer .sidebar-nav a');
if (logoutLink) {
    logoutLink.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
        } finally {
            window.location.href = './login.html';
        }
    });
}

export { auth };


