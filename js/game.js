const canvas = document.getElementById("gameCanvas");

let snake = [
    {
        x: 10,
        y: 10
    }
];

function draw() {
    canvas.innerHTML = " ";

    // Draw snake
    const drawSnake = () => {
        snake.forEach((segment) => {
            const snakeElement = document.createElement("div");
            snakeElement.classList.add("snake");
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            canvas.appendChild(snakeElement);
        })
    };
}


// Draw testing
draw();