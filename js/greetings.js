const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = loginForm.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameThatTheUserWrote = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);
  location.reload();
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function rename() {
  // alert("유저네임을 바꾸시겠습니까?");
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginBtn.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  greeting.addEventListener("click", rename);
  loginForm.addEventListener("submit", onLoginSubmit);
}
