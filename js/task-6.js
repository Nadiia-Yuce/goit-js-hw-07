function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");
const input = document.querySelector("input");

createButton.addEventListener("click", handlerCreate);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = 30 + i * 10;
    box.classList.add("boxStyle");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function handlerCreate() {
  const amount = parseInt(input.value);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("A number should be between 1 and 100");
  }
}
