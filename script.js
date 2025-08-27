// function startCountdown() {
//     const birthdayInput = document.getElementById("birthday").value;
//     const countdown = document.getElementById('countdown');

//     if(!birthdayInput) {
//         countdown.innerHTML = "Please enter a valid birthday.";
//         const inputField = document.getElementById("birthday");
//         inputField.classList.add("input-error");
//         return;
//     }

//     const now = new Date();
//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     const input = new Date(birthdayInput);
//     const birthday = new Date(today.getFullYear(), input.getMonth(), input.getDate());

//     if (birthday < today) {
//         birthday.setFullYear(today.getFullYear() + 1);
//     }

//     // let birthday = new Date(birthdayInput);

//     // birthday.setFullYear(now.getFullYear());

//     // if(birthday < now) {
//     //     birthday.setFullYear(now.getFullYear() + 1);
//     // }

//     const oneDay = 24 * 60 * 60 * 1000;
//     const diffDays = Math.round((birthday - today) / oneDay);
//     // const daysLeft = Math.ceil(diffDays / oneDay);

//     if(diffDays <= 0) {
//         countdown.innerHTML = "Happy Birthday! 🎉";
//     } else {
//         countdown.innerHTML = `Your birthday is in ${diffDays} day(s)! 🎈`;
//     }
// }

function startCountdown() {
    const birthdayInput = document.getElementById("birthday").value;
    const countdown = document.getElementById("countdown");
    const inputField = document.getElementById("birthday");

    inputField.classList.remove("input-error");

    if (!birthdayInput) {
        countdown.innerHTML = "Please enter a valid birthday.";
        inputField.classList.add("input-error");
        return;
    }

    const today = new Date();
    const inputDate = new Date(birthdayInput);
    let nextBirthday = new Date(today.getFullYear(), inputDate.getMonth(), inputDate.getDate());

    // Handle Feb 29 birthdays
    if (inputDate.getMonth() === 1 && inputDate.getDate() === 29) {
        while (!(nextBirthday.getMonth() === 1 && nextBirthday.getDate() === 29)) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
    } else if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.ceil((nextBirthday - today) / oneDay);

    countdown.innerHTML = diffDays === 0
        ? "Happy Birthday! 🎉"
        : `Your birthday is in ${diffDays} day(s)! 🎈`;
}

setInterval(() => {
    confetti({
        particleCount: 10,
        angle: 90,
        spread: 60,
        origin: { x: Math.random(), y: 0.1 },
        colors: ['#c71585', '#b8860b', '#4682b4', '#dc143c'],
        gravity: 1,
        ticks: 200
    });
}, 500);