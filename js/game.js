const canvas = document.getElementById("gameCanvas");

let snake = [
    {
        x: 10,
        y: 10
    }
];

let food = generateRandomFood();

function draw() {
    canvas.innerHTML = " ";

    // Draw snake
    drawSnake();
}


function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.classList.add("snake");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        canvas.appendChild(snakeElement);
    })
};


// Draw testing
draw();


// function to draw the snake food

function snakeFood() {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridRowStart = 5;
}