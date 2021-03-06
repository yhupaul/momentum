const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos =toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox =document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.append(li);
}



function handleToDoSubmit(event) {
  event.preventDefault(event);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const paredToDos = JSON.parse(savedTodos);
  toDos = paredToDos;
  paredToDos.forEach(paintToDo);
}