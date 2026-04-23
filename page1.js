// Set the date of the anniversary in the past
const startDate = new Date("April 22, 2026 20:58:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    
    // Calculate the difference (Time passed since the start date)
    const distance = now - startDate;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);