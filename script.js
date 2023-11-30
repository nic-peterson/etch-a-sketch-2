function createGrid() {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
    }
  }
}

function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  document.body.appendChild(gridContainer);
}

createGridContainer();
createGrid();
