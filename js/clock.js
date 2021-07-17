const today = document.querySelector("h2.today");
const clock = document.querySelector("h2.clock");
const stopWatchContainer = document.querySelector(".stopwatch-container");

const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function getTime() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDay());
  const numberDay = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  today.innerText = `${year} , ${month} , ${numberDay} , ${days[day]}`;
  clock.innerText = `${hour}:${minute}`;
}

const stopWatch = document.querySelector(".stop-watch");

let intervalId = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  stopWatchArr = stopWatch.innerText.split(":");

function handleStartWatch() {
  const startBtn = document.querySelector(".startWatch");
  startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
      console.log(stopWatch);
      if (!parseInt(stopWatch[2])) {
        seconds += 1;
        console.log(seconds);
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
          if (minutes > 59) {
            minutes = 0;
            hours += 1;
          }
        }
        stopWatch.innerText = `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
      }
    }, 1000);
  });
}

function handleStopWatch() {
  const stopBtn = stopWatchContainer.querySelector(".stopWatch");
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  hours = parseInt(stopWatchArr[0]);
  minutes = parseInt(stopWatchArr[1]);
  seconds = parseInt(stopWatchArr[2]);
}

function handleResetWatch() {
  const resetBtn = stopWatchContainer.querySelector(".resetWatch");
  resetBtn.addEventListener("click", () => {
    const timeLab = document.querySelector(".time-lab ul");
    const li = document.createElement("li");
    console.log(stopWatch.innerText);
    li.innerText = stopWatch.innerText;
    timeLab.appendChild(li);
    localStorage.setItem();
    stopWatch.innerText = `00:00:00`;
    console.log(stopWatch.innerText);
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
  });
}

function init() {
  handleStartWatch();
  handleStopWatch();
  handleResetWatch();
}

getTime();
setInterval(getTime, 1000);

init();
