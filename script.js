let userName = document.getElementById("username");
let continueBtn = document.getElementById("continue-btn");

continueBtn.addEventListener("click", () => {

    if (userName && userName.value.trim()) {
        
        localStorage.setItem("userNameInput", userName.value.trim());

        window.location.href = "level.html";
    } else {
        alert("No input");
    }
})
// user.textContent = userNameInput;