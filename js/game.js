const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const box = 20;
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10* box
}

let direction;
document.addEventListener("keydown", setDirection);

function setDirection(event) {
    if (event.keycode == 37 && direction != "RIGHT") {
        direction = "LEFT";
    } else if (event.keycode == 39 && direction != "LEFT"){
        direction = "RIGHT";
    } else if (event.keycode == 38 && direction != "DOWN") {
        direction = "UP";
    } else if (event.keycode == 40 && direction != "UP") {
        direction = "DOWN";
    }
}