let canvas = document.getElementById("gameCanvas");
let currentScore = document.getElementById("current-score");
let highScore = document.getElementById("high-score");

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
            snakeElement.style.gridRow = segment.y;
            snakeElement.style.gridColumn = segment.x;
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
    foodElement.style.gridRow = food.y;
    foodElement.style.gridColumn = food.x;
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


let whereFace = "left";

let ourGameInt;
let gameSDelay = 500;

function moveSnake() {
    const ori = {
        x: snake[0].x,
        y: snake[0].y
    }

    if (whereFace == "up") {
        ori.y++;
    } else if (whereFace == "right") {
        ori.x++;
    } else if (whereFace == "down") {
        ori.y--;
    } else {
        ori.x--;
    }

    snake.unshift(ori);
    snake.pop();

    if (ori.x === food.x && ori.y === food.y) {
        food = generateRandomFood();
        clearInterval();

        ourGameInt = setInterval(() => {
            moveSnake();
            draw();
        }, gameSDelay);
    } else {
        snake.pop();
    }
}


function speedIncrease() {
    if (gameSDelay > 150) {
        gameSDelay = gameSDelay - 5;
    } else if (gameSDelay > 100) {
        gameSDelay = gameSDelay - 3;
    } else if (gameSDelay > 50) {
        gameSDelay = gameSDelay - 2;
    } else if (gameSDelay > 25) {
        gameSDelay = gameSDelay - 1;
    }
}

const gridSize = 20;

function checkForCollision() {
    const ori = snake[0];


    if (ori.x < 0 || ori.x >= canvas.width || ori.y < 0 || ori.y >= canvas.height) {
        resetGame();
    }

    const i = 1;

    while (i < snake.length) {
        if (!snake[i]) {
            console.error(`Undefine snake position at index ${i}`);
            break;
            // resetGame();
        }
        i++;
    }
}

let gameStarted = false;

function startGame() {
    gameStarted = true;
    document.getElementById("instruction").style.display = "none";
    document.getElementById("img-snake").style.display = "none";
    ourGameInt = setInterval(() => {
        moveSnake();
        checkForCollision();
        draw();
    }, gameSDelay);
}

function handleKeys(event) {
    if (!(gameStarted && (event.key === " " || event.code === "Space"))) {
        startGame()
    } else {
        if (event.code == "ArrowRight") {
            direction = "right";
        } else if (event.code == "ArrowUp") {
            direction = "up";
        } else if (event.code == "ArrowLeft") {
            direction = "left";
        } else {
            direction = "down";
        }
    }
}

document.addEventListener("keydown", handleKeys);

function endGame() {
    clearInterval(ourGameInt);
    gameStarted = false;
    document.getElementById("instruction").style.display = "block";
    document.getElementById("image-snake").style.display = "block";
}

function resetGame() {
    endGame();
    updateScore();
    snake = [
        {
            x: 20,
            y: 20
        }
    ];
    food = generateRandomFood();
    direction = 'left';
    gameSDelay = 1000;
}

function updateScore() {
    let score = snake.length - 1;
    currentScore.innerHTML = score;
}

function updateHighScore() {

}