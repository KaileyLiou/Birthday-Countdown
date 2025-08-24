function startCountdown() {
    const birthdayInput = document.getElementById("birthday").value;
    const countdown = document.getElementById('countdown');

    if(!birthdayInput) {
        countdown.innerHTML = "Please enter a valid birthday.";
        return;
    }

    const now = new Date();
    let birthday = new Date(birthdayInput);

    birthday.setFullYear(now.getFullYear());
    if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

}

setInterval(() => {
  confetti({
    particleCount: 5,
    angle: 90,
    spread: 45,
    origin: { x: Math.random(), y: 0 },
    // colors: ['#ff69b4', '#ffd700', '#87ceeb', '#ffb6c1']
    colors: ['#c71585', '#b8860b', '#4682b4', '#dc143c'],
    gravity: 1,
    ticks: 200
  });
}, 50);