let userName = document.getElementById("username");
let continueBtn = document.getElementById("continue-btn");
let user = document.getElementById("user");

continueBtn.addEventListener("click", (e) => { 
    e.preventDefault();

    const usernameInput = username.value.trim();
        if (usernameInput) {
            console.log(`Nickname entered: ${username}`);
        } else {
            alert("Please enter a valid nickname!");
        }
})