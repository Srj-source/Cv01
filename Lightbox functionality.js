 const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

// Open lightbox
document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', () => {
        const src = container.getAttribute('data-src');
        const alt = container.querySelector('img').alt;

        // Check if the source is a video
        if (src.endsWith('.mp4')) {
            lightboxContent.innerHTML = `
                <video controls autoplay loop muted playsinline style="max-width: 90%; max-height: 80vh;">
                    <source src="${src}" type="video/mp4">
                </video>
            `;
        } else {
            // For images
            lightboxContent.innerHTML = `<img src="${src}" alt="${alt}" style="max-width: 90%; max-height: 80vh;">`;
        }

        lightboxCaption.textContent = alt;
        lightbox.style.display = 'block';
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    // Pause the video when the lightbox is closed
    const video = lightboxContent.querySelector('video');
    if (video) {
        video.pause();
    }
});

// Close lightbox when clicking outside the content
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        // Pause the video when the lightbox is closed
        const video = lightboxContent.querySelector('video');
        if (video) {
            video.pause();
        }
    }
});
