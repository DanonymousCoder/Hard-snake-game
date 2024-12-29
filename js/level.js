let user = document.getElementById("user");

let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");

user.innerHTML = localStorage.getItem("userNameInput");

easy.addEventListener("click", () => {
    window.location.href = "../game.html";
})

medium.addEventListener("click", () => {
    window.location.href = "../game.html";
})

