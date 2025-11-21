// file: js/validation.js

// Pastikan SEMUA kode dijalankan hanya setelah seluruh dokumen HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Ambil elemen form LOGIN di sini!
    const loginForm = document.getElementById('loginForm');

    // Cek apakah elemen form ditemukan di halaman
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Mencegah refresh halaman
            event.preventDefault(); 

            // Mengambil nilai dari input form
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // --- STRUKTUR PERCABANGAN IF (VALIDASI LOGIN) ---
            if (username === "admin" && password === "admin123") {
                alert("Login Berhasil! Selamat datang, Admin.");
                window.location.href = "menu.html"; 
            
            } else if (username === "user" && password === "userpass") {
                alert("Login Berhasil! Selamat datang, User.");
                window.location.href = "menu.html"; 
            
            } else {
                alert("❌ Login Gagal! Username atau Password tidak sesuai.");
                document.getElementById('password').value = "";
            }
        });
    }
});