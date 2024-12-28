let userName = document.getElementById("username");
let continueBtn = document.getElementById("continue-btn");
let txt = `Welcome to the <span>hardest</span> snake game on <span>EARTH</span>`;
let i = 0;
let speed = 50;

window.addEventListener("DOMContentLoaded", typewriter);

function typewriter(){
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}


continueBtn.addEventListener("click", () => {

    if (userName && userName.value.trim()) {
        
        localStorage.setItem("userNameInput", userName.value.trim());

        window.location.href = "level.html";
    } else {
        alert("No input");
    }
})
// user.textContent = userNameInput;