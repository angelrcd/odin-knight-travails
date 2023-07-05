const board = getChessBoard();
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

const knight = new Knight(1, 1);
console.log(knight.square);
const possibleMoves = knight.getPossibleMoves();
possibleMoves.forEach(move => {
  console.log(move.square);
})

function isInsideBoard(x, y){
  try {
    return Boolean(board[x][y]);
  } catch (e){
    return false;
  }
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