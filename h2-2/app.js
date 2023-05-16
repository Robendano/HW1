var timer;
var minutes = 5;
var seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 5;
  seconds = 0;
  displayTime();
}

function updateTimer() {
  if (seconds === 0 && minutes === 0) {
    stopTimer();
    displayMessage("Таймер завершен!");
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }

  displayTime();
}

function displayTime() {
  var timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function displayMessage(message) {
  var timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = message;
}
