// List of emojis to show (change or add more)
    const emojis = ["❤️", "💖", "💘", "😊", "😘", "💞", "🥰", "🌸"];

    document.addEventListener("click", function(event) {
        for (let i = 0; i < 3; i++) {  // Spawn 3 emojis per click
            createEmoji(event.clientX, event.clientY);
        }
    });

    function createEmoji(x, y) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Set emoji position near the click
        emoji.style.left = (x + Math.random() * 30 - 15) + "px"; 
        emoji.style.top = (y + Math.random() * 30 - 15) + "px"; 
        
        // Randomize animation duration slightly
        emoji.style.animationDuration = (1.5 + Math.random() * 1.5) + "s"; 
        
        document.body.appendChild(emoji);

        // Remove emoji after animation
        setTimeout(() => { emoji.remove(); }, 2000);
    }
             