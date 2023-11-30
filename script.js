function createButton() {
  const button = document.createElement("button");
  button.textContent = "Reset";
  button.style.width = "100px";
  button.style.height = "50px";
  button.style.margin = "10px";

  document.body.appendChild(button);

  button.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      item.classList.remove("active");
    });
  });
}

function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  gridContainer.style.width = "160px";
  gridContainer.style.height = "160px";

  document.body.appendChild(gridContainer);
}

function createGrid() {
  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.width = "10px";
      gridItem.style.height = "10px";
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
