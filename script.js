// Countdown to your anniversary date
const anniversaryDate = new Date('2023-11-04T00:00:00').getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = anniversaryDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();
