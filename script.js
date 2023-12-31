function getRandomColor() {
  const red = Math.floor(Math.random() * 256); // Random between 0-255
  const green = Math.floor(Math.random() * 256); // Random between 0-255
  const blue = Math.floor(Math.random() * 256); // Random between 0-255
  return `rgb(${red}, ${green}, ${blue})`; // Template string for RGB
}

function darkenColor(element) {
  const reductionFactor = 25.5; // 10% of 255

  let interactionCount =
    parseInt(element.getAttribute("data-interaction-count")) || 0;
  if (interactionCount < 10) {
    interactionCount++;
    element.setAttribute("data-interaction-count", interactionCount);
    const color = element.style.backgroundColor.match(/\d+/g); // Get RGB values
    const red = Math.max(color.red - reductionFactor * interactionCount, 0);
    const green = Math.max(color.green - reductionFactor * interactionCount, 0);
    const blue = Math.max(color.blue - reductionFactor * interactionCount, 0);
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  if (interactionCount >= 10) {
    element.style.backgroundColor = "black";
  }
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "Reset";
  button.style.width = "100px";
  button.style.height = "50px";
  button.style.margin = "10px";

  document.body.appendChild(button);

  button.addEventListener("click", function () {
    clearGrid();
    let num;
    do {
      num = prompt("Enter grid size");
      if (num > 100) {
        alert("Grid size must be less than 100");
        num = 16;
      }
      if (num < 1) {
        alert("Grid size must be greater than 0");
        num = 16;
      }
      if (num === null) {
        alert("User cancelled the input.");
        num = 16;
        break;
      }
    } while (num && num.length > 100);

    createGridContainer();
    createGrid(num);
  });
}

function clearGrid() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.remove();
}

function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  gridContainer.style.width = "160px";
  gridContainer.style.height = "160px";

  document.body.appendChild(gridContainer);
}

function createGrid(num = 16, size = 160) {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.width = size / num + "px";
      gridItem.style.height = size / num + "px";
      gridItem.setAttribute("data-interaction-count", 0); // Initialize interaction count

      gridContainer.appendChild(gridItem);

      gridItem.addEventListener("mouseover", function () {
        gridItem.classList.add("active");
        gridItem.style.backgroundColor = getRandomColor();
        darkenColor(gridItem);
        console.log(gridItem);
      });
    }
  }
}

createButton();
createGridContainer();
createGrid();
