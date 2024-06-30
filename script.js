let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;
let lapTimes = [];

const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const lapList = document.getElementById('lap-list');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapTime);

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
  }
}

function pauseStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTimes = [];
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  lapList.innerHTML = '';
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function lapTime() {
  const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  lapTimes.push(lapTime);
  const lapListItem = document.createElement('li');
  lapListItem.textContent = lapTime;
  lapList.appendChild(lapListItem);
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  hourElement.textContent = hours.toString().padStart(2, '0');
  minuteElement.textContent = minutes.toString().padStart(2, '0');
  secondElement.textContent = seconds.toString().padStart(2, '0');
}