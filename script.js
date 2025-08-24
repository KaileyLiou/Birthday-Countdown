function startCountdown() {

}

setInterval(() => {
  confetti({
    particleCount: 2,
    angle: 90,
    spread: 45,
    origin: { x: Math.random(), y: 0 },
    // colors: ['#ff69b4', '#ffd700', '#87ceeb', '#ffb6c1']
    colors: ['#c71585', '#b8860b', '#4682b4', '#dc143c']
  });
}, 50);