<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form
    $jenis_pakaian = $_POST['jenis_pakaian'];
    $jumlah = $_POST['jumlah'];
    $harga = $_POST['harga'];

    // Validasi input
    if (!is_numeric($jumlah) || !is_numeric($harga)) {
        die("Input tidak valid. Harap masukkan angka yang benar.");
    }

    // Menghitung total harga berdasarkan jenis pakaian
    $total_harga = $jumlah * $harga;

    // Menampilkan hasil perhitungan
    echo "<h2>Hasil Perhitungan Pesanan Laundry</h2>";
    echo "<p><strong>Jenis Pakaian:</strong> " . ucfirst($jenis_pakaian) . "</p>";
    echo "<p><strong>Jumlah Pakaian:</strong> $jumlah buah</p>";
    echo "<p><strong>Harga per Pakaian:</strong> Rp " . number_format($harga, 0, ',', '.') . "</p>";
    echo "<p><strong>Total Harga:</strong> Rp " . number_format($total_harga, 0, ',', '.') . "</p>";
} else {
    echo "<p>Form belum disubmit.</p>";
}
?>
