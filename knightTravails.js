export const board = getChessBoard();
class Knight {
  constructor (row, col) {
    this.row = row;
    this.col = col;
  }

  get square(){
    return board[this.row][this.col]
  }

  getPossibleMoves(){
    const result = []
    const moves = [
      [
      this.row - 2,
      this.col - 1,
      ],
      [
      this.row - 2,
      this.col + 1,
      ],
      [
      this.row - 1,
      this.col - 2,
      ],
      [
        this.row - 1,
        this.col + 2,
      ],
      [
      this.row + 2,
      this.col - 1,
      ],
      [
      this.row + 2,
      this.col + 1,
      ],
      [
      this.row + 1,
      this.col - 2,
      ],
      [
        this.row + 1,
        this.col + 2,
      ],
    ];
    
    moves.forEach(possibleMove => {
      if(isInsideBoard(...possibleMove)){
        result.push(new Knight(...possibleMove));
      }
    })

    return result;
  }
}

// const knight = new Knight(2, 7);
// console.log(knight.getPossibleMoves());

function isInsideBoard(x, y){
  return (x >= 0 && x <= 7 && y >= 0 && y <= 7)
}

function getChessBoard(){
  const chessBoard = [];
  // Loop to create 8 rows
  for (let row = 0; row < 8; row++) {
    const rowArray = []; 
    // Loop to create 8 columns for each row
    for (let col = 0; col < 8; col++) {
      const position = String.fromCharCode(65 + col) + (row + 1);
      rowArray.push(position);
    }   
    chessBoard.push(rowArray);
  }
  return chessBoard;
}

function knightTravails(initial, end){
  let counter = 0;
  const queu = [];
  queu.push(new Knight(...initial));
  while ((queu[0].row !== end[0]) || (queu[0].col !== end[1])){
    const currentKnight = queu.shift();
    const possibleMoves = currentKnight.getPossibleMoves();
    possibleMoves.forEach(possibleMove => possibleMove.parent = currentKnight);
    queu.push(...possibleMoves);
    counter ++;
  }
  let resultKnight = queu.shift();
  const result = [];
  while(resultKnight.parent){
    result.push([resultKnight.row, resultKnight.col]);
    resultKnight = resultKnight.parent
  }
  result.push([resultKnight.row, resultKnight.col])
  return result.reverse()
}