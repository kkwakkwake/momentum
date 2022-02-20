const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_KEY = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_KEY);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) { //유저 없을 때 폼 보여주기
  loginForm.classList.remove(HIDDEN_KEY);
  loginForm.addEventListener('submit', onLoginSubmit);
} else { //유저 있을 때 greeting보여주기
  paintGreeting(savedUsername);
}