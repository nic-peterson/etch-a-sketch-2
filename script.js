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
      gridContainer.appendChild(gridItem);

      gridItem.addEventListener("mouseover", function () {
        gridItem.classList.add("active");
      });
    }
  }
}

createButton();
createGridContainer();
createGrid();
