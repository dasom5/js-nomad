const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const USERNAME = loginInput.value;
    loginForm.classList.add("HIDDEN_CLASSNAME");
    console.log(USERNAME);
    localStorage.setItem("username", USERNAME); 
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}