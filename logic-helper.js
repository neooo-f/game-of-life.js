// hard coded combinations to loop over for each field (8 positions)
const CELL_COMBINATIONS = [
  [0, -1],
  [0, +1],
  [-1, 0],
  [-1, -1],
  [-1, +1],
  [+1, 0],
  [+1, -1],
  [+1, +1],
];

// for no edge limit
const getWrappedIndex = (index, max) => {
  if (index < 0) {
    return max - 1;
  }
  if (index >= max) {
    return 0;
  }
  return index;
};

// algo
export const checkCells = (board, nextBoard) => {
  const rows = board.length;
  const cols = board[0].length;

  // loop takes action for every cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let neighbourCounter = 0;

      CELL_COMBINATIONS.forEach((combination) => {
        const newRow = getWrappedIndex(row + combination[0], rows);
        const newCol = getWrappedIndex(col + combination[1], cols);

        if (board[newRow][newCol] === 1) {
          neighbourCounter++;
        }
      });

      // four game rules
      if (neighbourCounter === 3) nextBoard[row][col] = 1;
      if (
        neighbourCounter >= 4 ||
        neighbourCounter === 1 ||
        neighbourCounter === 0
      ) {
        nextBoard[row][col] = 0;
      }
    }
  }
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
