const countdownInterval = setInterval(updateCountdown, 1000);
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const currentDate = new Date();
    const selectedDate = new Date("2024-08-29.");
    const timeDifference = selectedDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = '¡Feliz Cumpleaños Victor!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }
}

