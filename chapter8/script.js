let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", event => {
    let word = event.target.textContent;
    sentence.textContent += word;
    sentence.textContent += " ";
});

let box = document.querySelector("#box");

let currentMouseX = 0
let currentMouseY = 0

let currentOffsetX = -10;
let currentOffsetY = -10;

document.querySelector("html").addEventListener("mousemove", e => {
    currentMouseX = e.clientX;
    currentMouseY = e.clientY;

    box.style.left = currentMouseX + currentOffsetX + "px";
    box.style.top = currentMouseY + currentOffsetY + "px";
});

document.querySelector("html").addEventListener("keydown", e => {
    if (e.key == "w") {
        currentOffsetY -= 5;
    } else if (e.key == "a") {
        currentOffsetX -= 5;
    } else if (e.key == "s") {
        currentOffsetY += 5;
    } else if (e.key == "d") {
        currentOffsetX += 5;
    }

    box.style.left = currentMouseX + currentOffsetX + "px";
    box.style.top = currentMouseY + currentOffsetY + "px";
});
