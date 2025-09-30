const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score");
let randomColor = null;
let score = 0;


//will help to generate number b/w 0 to 255
function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red},${green},${blue})`;

}

function normalizeRGB(rgb) {
    return rgb.replace(/\s/g, ""); // Remove all spaces
}


function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
}


function validateResult(el) {
    const selectedColor = normalizeRGB(el.target.style.backgroundColor);
    const correctColor = normalizeRGB(randomColor);
    if (selectedColor ==correctColor) {
        incrementScore();
    } else {
        score = 0;
        scoreContainer.innerText = score;
    }
    window.localStorage.setItem("score", score);
    startGame();
}

function startGame() {
    score = Number(window.localStorage.getItem("score") ?? 0);
    scoreContainer.innerText = score;
    optionContainer.innerHTML = "";
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener("click", validateResult);
        div.style.backgroundColor = i === ansIndex ? randomColor : generateRandomColorRGB();
        optionContainer.append(div);
    }
}

window.addEventListener("load", () => startGame());

