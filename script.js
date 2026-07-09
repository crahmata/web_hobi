document.addEventListener('DOMContentLoaded', () => {

  // Notifikasi saat klik alat editing
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const tool = card.dataset.tool;
      const nama = { brightness: 'Brightness & Contrast', filter: 'Filter Cepat', crop: 'Crop & Resize' };
      alert(`Fitur "${nama[tool] || tool}" sedang dalam pengembangan. Nantikan update ya!`);
    });
  });

  // Form kontak
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Terima kasih! Pesanmu sudah terkirim (simulasi).');
    e.target.reset();
  });
});
