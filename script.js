// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const marker = L.marker(umkmData.coords).addTo(map);
map.setView(marker.getLatLng(), 10); // Menyesuaikan peta agar terfokus pada marker


// Animasi Halaman
window.addEventListener('load', function () {
    const sections = document.querySelectorAll('.service-item, .about, .contact');
    sections.forEach(section => {
        section.classList.add('hidden');
        setTimeout(() => {
            section.classList.add('visible');
        }, 300);
    });
});

// Validasi Form (Sederhana)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '';
        }
    });
    if (!valid) {
        e.preventDefault();
        alert('Tolong isi semua kolom dengan benar.');
    }
    
    window.location.href="https://wa.me/6285825453794?text=Halo%2C%20saya%20ingin%20mengirimkan%20laundry%20dengan%20informasi%20berikut%3A%0ANama%3A%20John%20Doe%0ANomor%20Telepon%3A%2008123456789%0AAlamat%3A%20Jl.%20Contoh%20No.%201%2C%20Kota%20X%0ALayanan%3A%20Cuci%20Reguler%0AJumlah%3A%202%20kg">
    // Reset form
    document.getElementById('order-form').reset();
});
L.control.zoom().addTo(map); // Menambahkan kontrol zoom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


