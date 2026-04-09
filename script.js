const startBtn = document.getElementById('start-signin');
const logoCont = document.getElementById('logo-container');
const landingSec = document.getElementById('landing-section');
const loginSec = document.getElementById('login-section');
const mainBtn = document.getElementById('mainBtn');
const passSec = document.getElementById('password-section');
const passkeyBtn = document.getElementById('passkeyBtn');
const faceidOverlay = document.getElementById('faceid-overlay');
const topNav = document.querySelector('.top-nav');

let loginStep = 'email';

// 1. Landing to Login Transition
startBtn.addEventListener('click', () => {
    logoCont.classList.replace('logo-hero', 'logo-small');
    landingSec.classList.add('hidden');
    topNav.classList.remove('hidden');
    
    setTimeout(() => {
        loginSec.classList.remove('hidden');
        loginSec.style.opacity = '1';
    }, 400);
});

// 2. Email to Password Drop-down
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (loginStep === 'email') {
        passSec.classList.add('field-expanded');
        mainBtn.textContent = 'Sign In';
        document.getElementById('password').focus();
        loginStep = 'password';
    } else {
        mainBtn.textContent = 'Signing in...';
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Open your next site
        }, 1500);
    }
});

// 3. FaceID Simulation
passkeyBtn.addEventListener('click', () => {
    faceidOverlay.classList.remove('faceid-hidden');
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 2500);
});