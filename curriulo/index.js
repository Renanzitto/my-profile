const textElement = document.getElementById('neon-text');

textElement.addEventListener('mousemove', (e) => {
    // Cria múltiplas partículas por movimento para dar um efeito denso de brilho
    for (let i = 0; i < 3; i++) {
        createParticle(e);
    }
});

function createParticle(e) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Posição do mouse relativa à janela
    const x = e.clientX;
    const y = e.clientY;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Tamanho aleatório para as estrelinhas/brilhos
    const size = Math.random() * 10 + 4; // Entre 4px e 14px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Direção de dispersão aleatória
    const destinationX = (Math.random() - 0.5) * 120; // Espalha para os lados
    const destinationY = (Math.random() - 0.5) * 120; // Espalha para cima/baixo

    particle.style.setProperty('--dx', `${destinationX}px`);
    particle.style.setProperty('--dy', `${destinationY}px`);

    document.body.appendChild(particle);

    // Remove o elemento após a animação acabar para não acumular no DOM
    setTimeout(() => {
        particle.remove();
    }, 800);
}