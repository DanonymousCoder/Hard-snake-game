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

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    