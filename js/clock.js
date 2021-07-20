const today = document.querySelector("h2.today");
const clock = document.querySelector("h2.clock");
const stopWatchContainer = document.querySelector(".stopwatch-container");
const startBtn = document.querySelector(".startWatch");

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

let times = [];

const TIMELABS_KEY = "timelabs";

const stopWatch = document.querySelector(".stop-watch");

let intervalId = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  stopWatchArr = stopWatch.innerText.split(":");

function buttonDisable() {
  startBtn.disabled = true;
}

function buttonable() {
  startBtn.disabled = false;
}

function handleStartWatch() {
  startBtn.addEventListener("click", buttonDisable);
  startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
      console.log(stopWatch);
      if (!parseInt(stopWatch[2])) {
        seconds += 1;
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
  stopBtn.addEventListener("click", buttonable);
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  hours = parseInt(stopWatchArr[0]);
  minutes = parseInt(stopWatchArr[1]);
  seconds = parseInt(stopWatchArr[2]);
}

function paintTodoList(todoValueObj) {
  const li = document.createElement("li");
  li.id = todoValueObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = todoValueObj.text;
  button.innerText = "❌";

  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function paintTimelabs(timelabsObj) {
  const timeLab = document.querySelector(".time-lab ul");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.classList.add("fas");
  button.classList.add("fa-times-circle");
  li.id = timelabsObj.id;
  span.innerText = timelabsObj.text;

  button.addEventListener("click", deleteTimes);

  li.appendChild(span);
  li.appendChild(button);
  timeLab.appendChild(li);
}

function deleteTimes(event) {
  const li = event.path[0].parentNode;
  li.remove();
  times = times.filter((times) => times.id !== parseInt(li.id));
  savesTimelabs();
}

function handleResetWatch() {
  const resetBtn = stopWatchContainer.querySelector(".resetWatch");
  resetBtn.addEventListener("click", buttonable);
  resetBtn.addEventListener("click", () => {
    const timelabsObj = {
      text: stopWatch.innerText,
      id: Date.now(),
    };
    paintTimelabs(timelabsObj);
    times.push(timelabsObj);
    savesTimelabs(timelabsObj);
    stopWatch.innerText = `00:00:00`;
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
  });
}

function savesTimelabs() {
  localStorage.setItem(TIMELABS_KEY, JSON.stringify(times));
}

const loadTimelabs = localStorage.getItem(TIMELABS_KEY);

if (localStorage.getItem(TIMELABS_KEY) !== null) {
  const parseTodo = JSON.parse(loadTimelabs);
  times = parseTodo;
  parseTodo.forEach(paintTimelabs);
}

function init() {
  handleStartWatch();
  handleStopWatch();
  handleResetWatch();
}

getTime();
setInterval(getTime, 1000);

init();
