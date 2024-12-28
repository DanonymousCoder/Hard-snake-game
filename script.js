let userName = document.getElementById("username");
let continueBtn = document.getElementById("continue-btn");
let txt = "Welcome to the <span>hardest</span> snake game on <span>EARTH</span>";
let i = 0;
let speed = 50;

function typewriter() {
    
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