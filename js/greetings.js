const loginForm = document.querySelector(".login-form");

const loginInput = document.querySelector(".login-form input");

const loginBtn = document.querySelector(".login-form button");

const greeting = document.querySelector(".greeting");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASS_HIDDEN);
}

function handleLoginSubmit(event) {
  const username = loginInput.value;

  event.preventDefault();

  loginForm.classList.add(CLASS_HIDDEN);
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

const yourName = localStorage.getItem(USERNAME_KEY);

if (yourName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreetings(yourName);
}
