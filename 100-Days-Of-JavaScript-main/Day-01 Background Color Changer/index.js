const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = ["blue", "pink", "yellow", "red", "brown", "purple", "orange", "navy blue", "aqua", "gray", "black"];

function changeTheBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex];
};

body.style.backgroundColor = "white";
button.addEventListener("click", changeTheBackground);