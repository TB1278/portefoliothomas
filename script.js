// Animation d'apparition des sections au scroll
const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) sec.classList.add('visible');
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Effet balle de padel rebondissante
const ball = document.createElement('div');
ball.style.width = '25px';
ball.style.height = '25px';
ball.style.background = '#FFD700';
ball.style.borderRadius = '50%';
ball.style.position = 'fixed';
ball.style.left = '20px';
ball.style.top = '20px';
ball.style.zIndex = '9999';
ball.style.boxShadow = '0 0 10px rgba(255,215,0,0.7)';
document.body.appendChild(ball);

let x = 20, y = 20, dx = 3, dy = 3;
const animateBall = () => {
    const w = window.innerWidth - 30;
    const h = window.innerHeight - 30;
    x += dx; y += dy;

    if (x <= 0 || x >= w) dx *= -1;
    if (y <= 0 || y >= h) dy *= -1;

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    requestAnimationFrame(animateBall);
};
animateBall();

// Messages inspirés de ta personnalité
const messages = [
    "Toujours adaptable 🚀",
    "Loyauté et ambition 💪",
    "Polyvalence sportive et pro ⚡",
    "Padel : passion, précision, performance 🎾",
    "Rester calme même dans la tempête 🌊",
    "Objectif : progresser encore et toujours 🔥"
];

const randomMessage = document.createElement('div');
randomMessage.style.position = 'fixed';
randomMessage.style.right = '20px';
randomMessage.style.bottom = '20px';
randomMessage.style.padding = '12px 20px';
randomMessage.style.background = 'rgba(0,0,0,0.4)';
randomMessage.style.borderRadius = '12px';
randomMessage.style.color = '#FFD700';
randomMessage.style.fontWeight = '600';
randomMessage.style.fontSize = '1rem';
randomMessage.style.backdropFilter = 'blur(6px)';
randomMessage.style.boxShadow = '0 0 12px rgba(0,0,0,0.4)';
randomMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
document.body.appendChild(randomMessage);

