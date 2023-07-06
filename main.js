const allSquares = document.querySelectorAll(".square");

allSquares.forEach(square => {
  square.addEventListener("click", (e)=> {
    console.log(e.target.getAttribute("data-value"));
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

