// ===================================================
// KONFIGURASI PUSAT FIREBASE WEB SDK & AUTH SECURITY
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

// Inisialisasi Firestore Service
const db = firebase.firestore();

// ===================================================
// PROTEKSI HALAMAN ADMIN (PIN / PASSWORD SESSION)
// ===================================================
const ADMIN_PIN = "123456"; // <-- GANTI PASSWORD ADMIN ANDA DI SINI

function checkAdminAuth() {
    const isAuth = sessionStorage.getItem("admin_authenticated");
    if (isAuth !== "true") {
        const inputPin = prompt("Masukkan PIN/Password Admin Portal Guru:");
        if (inputPin === ADMIN_PIN) {
            sessionStorage.setItem("admin_authenticated", "true");
            alert("Akses Admin Diterima.");
        } else {
            alert("PIN Salah! Akses ditolak.");
            window.location.href = "about:blank"; // Atau keluarkan dari halaman
            throw new Error("Unauthorized Access");
        }
    }
}

function logoutAdmin() {
    sessionStorage.removeItem("admin_authenticated");
    alert("Berhasil Keluar.");
    window.location.reload();
}

// Jalankan proteksi otomatis saat file di-load
checkAdminAuth();
