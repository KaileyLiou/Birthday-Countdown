function startCountdown() {

}

setInterval(() => {
  confetti({
    particleCount: 2,
    angle: 90,
    spread: 45,
    origin: { x: Math.random(), y: 0 },
    colors: ['#ff69b4', '#ffd700', '#87ceeb', '#ffb6c1']
  });
}, 100);