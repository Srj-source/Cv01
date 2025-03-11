  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Set a random horizontal position within the viewport width
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Append to body
    document.body.appendChild(heart);

    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Generate hearts at an interval
setInterval(createHeart, 500);