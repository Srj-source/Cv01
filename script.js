// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Create a 3D cube with a texture
const geometry = new THREE.BoxGeometry(2, 2, 2);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('profile.jpg'); // Replace with your image
const material = new THREE.MeshPhongMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Add sound effects
const hoverSound = new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2411/2411-preview.mp3'], // Hover sound effect
    volume: 0.5,
});

const clickSound = new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2697/2697-preview.mp3'], // Click sound effect
    volume: 0.5,
});

// GSAP animations
let isHovering = false;

// Hover animation
document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Rotate cube based on mouse position
    gsap.to(cube.rotation, {
        y: mouseX * 2,
        x: mouseY * 2,
        duration: 1,
        ease: "power2.out",
    });

    // Scale cube on hover
    if (!isHovering) {
        gsap.to(cube.scale, {
            x: 1.2,
            y: 1.2,
            z: 1.2,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
        hoverSound.play();
        isHovering = true;
    }
});

// Reset cube scale when mouse leaves
document.addEventListener('mouseout', () => {
    gsap.to(cube.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
    });
    isHovering = false;
});

// Click animation
document.addEventListener('click', () => {
    clickSound.play();
    gsap.to(cube.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
    });

    // Move camera on click
    gsap.to(camera.position, {
        z: 3,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(camera.position, {
                z: 5,
                duration: 1,
                ease: "power2.inOut",
            });
        },
    });

    // Change background color
    gsap.to(document.body, {
        backgroundColor: "#2c3e50",
        duration: 1,
        ease: "power2.inOut",
    });
});

// Floating text animation
const infoPanel = document.getElementById('info-panel');
gsap.from(infoPanel, {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    delay: 1,
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Start the animation
animate();
