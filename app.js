const cells = document.getElementsByClassName("cell");
// const cellsArray = [...cells];
console.log(cells);
console.log(cells[0]);
// const cellsArray = Array.from(cells);
// console.log(cellsArray);
// console.log(cells.length);
for (let i = 0; i < cells.length; i++) {
  //   let checkBox = cells[i].querySelector(".box");
  console.log("this is checkbox: ", cells[i]);
}

function changeColor(e) {
  console.log(e);
}

boxes = document.getElementsByClassName("box");
console.log(boxes);
const box0 = boxes[0];
box0.onclick(changeColor);
