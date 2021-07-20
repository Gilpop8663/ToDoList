const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let toDos = [];
const USERTODOLIST_KEY = "todos";

function savesTodo() {
  localStorage.setItem(USERTODOLIST_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.path[0].parentNode;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savesTodo();
}

function paintTodoList(todoValueObj) {
  const li = document.createElement("li");
  li.id = todoValueObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.classList.add("fas");
  button.classList.add("fa-times-circle");
  span.innerText = todoValueObj.text;

  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const todoValueObj = {
    text: todoInput.value,
    id: Date.now(),
  };

  todoInput.value = "";
  toDos.push(todoValueObj);
  paintTodoList(todoValueObj);
  savesTodo();
}

function loadTodo() {
  const userTodo = localStorage.getItem(USERTODOLIST_KEY);
  console.log(JSON.parse(userTodo));
}

const userGetTodo = localStorage.getItem(USERTODOLIST_KEY);

if (localStorage.getItem(USERTODOLIST_KEY) !== null) {
  const parseTodo = JSON.parse(userGetTodo);
  toDos = parseTodo;
  parseTodo.forEach(paintTodoList);
}

todoForm.addEventListener("submit", handleSubmitTodo);
