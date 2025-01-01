let canvas = document.getElementById("gameCanvas");
let currentScore = document.getElementById("current-score");
let highScoreT = document.getElementById("highscore");

let toggler = document.getElementById("toggler");
let container = document.getElementById("container")

toggler.addEventListener("click", () => {
    container.classList.toggle("dark");
    toggler.style.color = "#FFFFFF";
    toggler.classList.remove("bx-sun");
    toggler.classList.add()
})

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


let whereFace = "up";

let ourGameInt;
let gameSDelay = 200;

function moveSnake() {
    const ori = {
        x: snake[0].x,
        y: snake[0].y
    }

    if (whereFace == "up") {
        ori.y--;
    } else if (whereFace == "right") {
        ori.x++;
    } else if (whereFace == "down") {
        ori.y++;
    } else if (whereFace == "left") {
        ori.x--;
    }

    snake.unshift(ori);

    if (ori.x === food.x && ori.y === food.y) {
        food = generateRandomFood();
        speedIncrease();
        clearInterval(ourGameInt);
        ourGameInt = setInterval(() => {
            moveSnake();
            checkForCollision();
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

    let i = 1;

    while (i < snake.length) {
        if (ori.x === snake[i].x && ori.y === snake[i].y) {
            resetGame();
            break;
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
    if (!gameStarted) {
        if (event.key === " " || event.code === "Space") {
            startGame();
        }
        return;
    } else if (event.key === "ArrowRight" && whereFace !== "left") {
        whereFace = "right";
    } else if (event.key === "ArrowUp" && whereFace !== "down") {
        whereFace = "up";
    } else if (event.key === "ArrowDown" && whereFace !== "up") {
        whereFace = "down";
    } else if (event.key === "ArrowLeft" && whereFace !== "right") {
        whereFace = "left";
    }
}

document.addEventListener("keydown", handleKeys);


function endGame() {
    clearInterval(ourGameInt);
    gameStarted = false;
    document.getElementById("instruction").style.display = "block";
    document.getElementById("img-snake").style.display = "block";
}

function resetGame() {
    updateHighScore();
    endGame();
    snake = [
        {
            x: 10,
            y: 10
        }
    ];
    updateHighScore();
    food = generateRandomFood();
    direction = 'left';
    gameSDelay = 200;
    updateScore();
}

function updateScore() {
    let score = snake.length - 1;
    currentScore.innerHTML = score;
}

function updateHighScore() {
    const currentScore = snake.length - 1;

    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreT.innerHtml = highScore.toString().padStart(3, '0');
    }

    highScoreT.style.display = "block";
}