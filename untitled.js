document.addEventListener('DOMContentLoaded', function() {
            // Text elements to be typed
            const elements = [
                { id: 'h1-1', text: 'Hello😀', speed: 100 },
                { id: 'h1-2', text: 'meeting after a long time', speed: 50 },
                { id: 'h1-3', text: 'please use laptop', speed: 50 },
                { id: 'h1-4', text: 'please', speed: 50 },
                { id: 'h1-5', html: 'good now <a href="https://srj-source.github.io/bdygameplay1/">click on me ;-)</a>', speed: 50 }
            ];
            
            // Function to type out text
            function typeWriter(element, text, speed, index = 0) {
                if (index < text.length) {
                    element.innerHTML = text.substring(0, index + 1) + '<span class="cursor-blink">|</span>';
                    setTimeout(() => typeWriter(element, text, speed, index + 1), speed);
                } else {
                    element.innerHTML = text;
                    element.style.borderRight = 'none';
                }
            }
            
            // Process each element with delay
            elements.forEach((item, i) => {
                setTimeout(() => {
                    const element = document.createElement('h1');
                    element.id = item.id;
                    document.body.appendChild(element);
                    
                    if (item.html) {
                        // For HTML content, we'll fade it in instead of typing
                        element.innerHTML = item.html;
                        element.style.opacity = 0;
                        element.style.transition = 'opacity 0.5s ease-in';
                        setTimeout(() => element.style.opacity = 1, 100);
                    } else {
                        element.classList.add('cursor-blink');
                        typeWriter(element, item.text, item.speed);
                    }
                }, i * 2000); // Start each element 2 seconds after the previous one
            });
        });
