// ===================================================
// KONFIGURASI PUSAT FIREBASE WEB SDK & AUTHENTICATION
// Portal Guru SMK Jetis
// ===================================================

const firebaseConfig = {
  apiKey: "AIzaSyAR_9SDtOM-SGjQywqd-oXmajgroAhFBfw",
  authDomain: "portal-guru-jetis-36d41.firebaseapp.com",
  projectId: "portal-guru-jetis-36d41",
  storageBucket: "portal-guru-jetis-36d41.firebasestorage.app",
  messagingSenderId: "339557702349",
  appId: "1:339557702349:web:740cdd828375299561a784",
  measurementId: "G-K0DED36NSS"
};

// Inisialisasi Firebase App
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

// Proteksi Sesi Halaman Admin
auth.onAuthStateChanged((user) => {
    const isLoginPage = window.location.pathname.endsWith('login.html');
    
    if (!user && !isLoginPage) {
        window.location.href = "login.html";
    } else if (user && isLoginPage) {
        window.location.href = "index.html";
    }
});

function logoutAdmin() {
    auth.signOut().then(() => {
        alert("Berhasil keluar.");
        window.location.href = "login.html";
    });
}
