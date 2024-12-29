const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const box = 20;
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10* box
}

let direction;