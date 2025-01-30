// JavaScript

// Love Timer
function updateLoveTimer() {
    const startDate = new Date("2024-08-09T00:00:00");
    const now = new Date();
    const diffInSeconds = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diffInSeconds / (60 * 60 * 24));
    const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
    const seconds = diffInSeconds % 60;

    document.getElementById("loveTimer").innerText = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

updateLoveTimer();
setInterval(updateLoveTimer, 1000);

// Countdown for each day
function setCountdown(targetDate, targetId) {
    const target = new Date(targetDate);
    const countdownElement = document.getElementById(targetId);
    
    const interval = setInterval(function() {
        const now = new Date();
        const timeDiff = target - now;
        
        if (timeDiff <= 0) {
            clearInterval(interval);
            countdownElement.innerText = "Event Started!";
            document.getElementById(`${targetId}-btn`).disabled = false;
        } else {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Set Countdown for each special day
setCountdown("2025-02-07T00:00:00", "rose-countdown");
setCountdown("2025-02-08T00:00:00", "propose-countdown");
setCountdown("2025-02-09T00:00:00", "chocolate-countdown");
setCountdown("2025-02-10T00:00:00", "teddy-countdown");
setCountdown("2025-02-11T00:00:00", "promise-countdown");
setCountdown("2025-02-12T00:00:00", "hug-countdown");
setCountdown("2025-02-13T00:00:00", "kiss-countdown");
setCountdown("2025-02-14T00:00:00", "valentine-countdown");
setCountdown("2025-02-09T00:00:00", "anniversary-countdown");

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 600);

// Unlock Page (e.g., Rose Day)
function unlockPage(page) {
    alert(`Unlocked ${page} surprise!`);
}

// Hug Animation
function showHug() {
    document.getElementById("hug-container").innerHTML = "🤗 Sending you a big hug!";
}