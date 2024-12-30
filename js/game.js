let canvas = document.getElementById("gameCanvas");

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

    const drawSnake = () => {
        snake.forEach((segment) => {
            let snakeElement = document.createElement("div");
            snakeElement.classList.add("snake");
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            canvas.appendChild(snakeElement);
        })
    };

    drawSnake();
    snakeFood();
}




// Draw testing
draw();


// function to draw the snake food

function snakeFood() {
    let foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridRowStart = 5;
    canvas.appendChild(foodElement);
}


function generateRandomFood() {
    let x = Math.floor(Math.random() * 20) + 1;
    let y = Math.floor(Math.random() * 20) + 1;
    return {
        x,
        y
    }
}