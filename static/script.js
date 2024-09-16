// Add 3D animation to the cube
const cube = document.querySelector('.cube');
let angle = 0;

function animate() {
    angle += 1;
    cube.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
    requestAnimationFrame(animate);
}

animate();

// Add hover effect to the cube
cube.addEventListener('mouseover', () => {
    cube.style.transform = 'scale(1.1)';
});

cube.addEventListener('mouseout', () => {
    cube.style.transform = 'scale(1)';
});