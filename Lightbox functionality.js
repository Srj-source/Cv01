// Lightbox functionality

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

// Open lightbox
document.querySelectorAll('.image-container').forEach(container => {
container.addEventListener('click', () => {
lightbox.style.display = 'block';
lightboxImg.src = container.getAttribute('data-src');
lightboxCaption.textContent = container.querySelector('img').alt;
});
});

// Close lightbox
closeBtn.addEventListener('click', () => {
lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
if (e.target !== lightboxImg) {
lightbox.style.display = 'none';
}
});
