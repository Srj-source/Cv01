  document.addEventListener("DOMContentLoaded", function () {  
        let audio = document.getElementById("bg-music");  
  
        function tryPlayAudio() {  
            audio.play().then(() => {  
                console.log("Audio autoplay successful!");  
            }).catch(() => {  
                console.log("Autoplay blocked, trying alternative methods...");  
  
                // Show an alert to encourage user action  
                alert("Click OK to enable background music.");  
  
                // Create an overlay button if needed  
                let overlay = document.createElement("div");  
                overlay.innerHTML = "<button style='font-size:20px;padding:10px 20px;'>Play Music</button>";  
                overlay.style.position = "fixed";  
                overlay.style.top = "0";  
                overlay.style.left = "0";  
                overlay.style.width = "100%";  
                overlay.style.height = "100%";  
                overlay.style.display = "flex";  
                overlay.style.alignItems = "center";  
                overlay.style.justifyContent = "center";  
                overlay.style.background = "rgba(0, 0, 0, 0.8)";  
                overlay.style.zIndex = "9999";  
                document.body.appendChild(overlay);  
  
                overlay.querySelector("button").addEventListener("click", () => {  
                    audio.play();  
                    document.body.removeChild(overlay);  
                });  
  
                // Also try playing on user interaction (click, touch, keypress, mouse move)  
                function playOnInteraction() {  
                    audio.play();  
                    document.removeEventListener("click", playOnInteraction);  
                    document.removeEventListener("touchstart", playOnInteraction);  
                    document.removeEventListener("keypress", playOnInteraction);  
                    document.removeEventListener("mousemove", playOnInteraction);  
                    document.removeEventListener("scroll", playOnInteraction);  
                }  
  
                document.addEventListener("click", playOnInteraction);  
                document.addEventListener("touchstart", playOnInteraction);  
                document.addEventListener("keypress", playOnInteraction);  
                document.addEventListener("mousemove", playOnInteraction);  
                document.addEventListener("scroll", playOnInteraction);  
            });  
        }  
  
        // First attempt at autoplay  
        tryPlayAudio();  
    });  