import { knightTravails, board } from "./knightTravails.js";

const allSquares = document.querySelectorAll(".square");
const initialSquareDisplay = document.querySelector("#initial-square")
const finalSquareDisplay = document.querySelector("#final-square")
const pathDisplay = document.querySelector("#path");
const numberMovesDisplay = document.querySelector("#num-moves");
const restartButton = document.querySelector("#restart-btn");

let initialSquare = null;
let finalSquare = null;
let knightTravailsResult = null;

allSquares.forEach(square => {
  square.addEventListener("click", (e)=> {
    const valueSelected = e.target.getAttribute("data-value");
    if (!initialSquare){
      initialSquare = valueSelected;
      initialSquareDisplay.textContent = initialSquare;
      e.target.classList.add("initial")
    } else if (!finalSquare){
      finalSquare = valueSelected;
      finalSquareDisplay.textContent = finalSquare;
      e.target.classList.add("final")
    }
    
    if (initialSquare && finalSquare && !knightTravailsResult){
      const initialIndex = getChessSquareIndex(initialSquare);
      const finalIndex = getChessSquareIndex(finalSquare);
      knightTravailsResult = knightTravails(initialIndex, finalIndex)

      drawPathOnBoard(knightTravailsResult)
      pathDisplay.textContent = (knightTravailsResult.map(index => board[index[0]][index[1]])).join(", ");
      numberMovesDisplay.textContent = knightTravailsResult.length - 1;
    }
  })

  square.addEventListener("mouseover", (e)=> {
    const squareValue = e.target.getAttribute("data-value");
    const colLegendValue = squareValue[0];
    const rowLegendValue = squareValue[1];
    
    const colLegendElement = document.querySelector(`.col-legend[data-col-legend=${colLegendValue}]`)
    const rowLegendElement = document.querySelector(`.row-legend[data-row-legend='${rowLegendValue}']`)
    
    colLegendElement.classList.add("legend-hover");
    rowLegendElement.classList.add("legend-hover");
  })

  square.addEventListener("mouseout", (e)=> {
    const squareValue = e.target.getAttribute("data-value");
    const colLegendValue = squareValue[0];
    const rowLegendValue = squareValue[1];
    
    const colLegendElement = document.querySelector(`.col-legend[data-col-legend=${colLegendValue}]`)
    const rowLegendElement = document.querySelector(`.row-legend[data-row-legend='${rowLegendValue}']`)
    
    colLegendElement.classList.remove("legend-hover");
    rowLegendElement.classList.remove("legend-hover");
  })
})

restartButton.addEventListener("click", () => {
  initialSquare = null;
  finalSquare = null;
  knightTravailsResult = null;

  initialSquareDisplay.textContent = "";
  finalSquareDisplay.textContent = "";
  pathDisplay.textContent = "";
  numberMovesDisplay.textContent = "";

  allSquares.forEach(square => {
    square.classList.remove("initial", "final");
    square.textContent = "";
  })

})

function getChessSquareIndex(square) {
  const col = parseInt(square.charAt(1)) - 1;
  const row = square.charCodeAt(0) - 65;
  return [col, row];
}

function drawPathOnBoard(knightTravailsResult){
  let moveCount = 0;
  for (let pathIndex of knightTravailsResult){
    const value = board[pathIndex[0]][pathIndex[1]];
    const square = document.querySelector(`.square[data-value=${value}]`)
    square.textContent = moveCount;
    moveCount++;
  }
}