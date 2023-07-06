import { board } from "../knightTravails.js";
const boardSection = document.querySelector("#board")

// Creates 8x8 chess board plus an aditional column for row legend
for (let i = board.length - 1; i >= 0; i--) {
  const row = board[i];
  for (let j = 0; j < row.length; j++){
    const squareValue = row[j];
    if(j === 0){
      const rowLegend = document.createElement("div");
      rowLegend.classList.add("legend", "row-legend")
      rowLegend.setAttribute("data-row-legend", i + 1)
      rowLegend.textContent = i + 1;
      boardSection.append(rowLegend);
    }
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    squareElement.setAttribute("data-value", squareValue)
    boardSection.append(squareElement)
  }
}
// Creates aditional row con column legend
for (let i = 0; i < 9; i++){
  const colLegend = document.createElement("div");
  colLegend.classList.add("legend", "col-legend")
  colLegend.setAttribute("data-col-legend", String.fromCharCode(64 + i))
  colLegend.textContent = String.fromCharCode(64 + i);
  if (i === 0){
    colLegend.classList.remove("legend", "col-legend")
    colLegend.removeAttribute("data-col-legend")
    colLegend.textContent = "";
  }
  boardSection.append(colLegend);
}