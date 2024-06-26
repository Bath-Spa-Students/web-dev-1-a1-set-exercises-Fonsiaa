document.addEventListener("DOMContentLoaded", function() {
    const numColors = 4;
    let colors = generateRandomColors(numColors);
    let pickedColor = pickColor();
    const colorDisplay = document.getElementById("rgb");
    const messageDisplay = document.getElementById("message");
    const colorPalette = document.getElementById("color-palette");
    const resetButton = document.getElementById("reset");
    const attemptCountDisplay = document.getElementById("attempt-count");
    let attempts = 0;
    let score = 0;

    colorDisplay.textContent = pickedColor;

    function resetGame() {
        attempts = 0;
        attemptCountDisplay.textContent = attempts;
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        const colorBoxes = document.querySelectorAll(".color-box");
        for (let i = 0; i < numColors; i++) {
            colorBoxes[i].style.backgroundColor = colors[i];
        }
        messageDisplay.textContent = "";
        score = 0;
    }

    //generating the colours
    function generateRandomColors(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    //the random number that the rgb will display
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }


    function pickColor() {
        const random = Math.floor(Math.random() * numColors);
        return colors[random];
    }

    function handleClick(clickedColor) {
        attempts++;
        attemptCountDisplay.textContent = attempts;
        if (clickedColor === pickedColor) {
            score++;
            resetGame();
        }
    }

    for (let i = 0; i < numColors; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = colors[i];
        colorBox.addEventListener("click", function() {
            handleClick(this.style.backgroundColor);
        });
        colorPalette.appendChild(colorBox);
    }

    resetButton.addEventListener("click", function() {
        resetButton.textContent = "New Colors";
        resetGame();
    });
});