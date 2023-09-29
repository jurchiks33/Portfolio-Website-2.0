document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth - 0.5;
    let y = e.clientY / window.innerHeight - 0.5;
    let shadow = `${20 * x}px ${20 * y}px 20px rgba(0, 0, 0, 0.4)}`;
    document.querySelector('h2').style.textShadow = shadow;
});