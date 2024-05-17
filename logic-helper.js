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

export const checkCells = (board, nextBoard) => {
  // loop takes action for every cell
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let neighbourCounter = 0;

      CELL_COMBINATIONS.forEach((combination) => {
        try {
          if (board[row + combination[0]][col + combination[1]] == 1)
            neighbourCounter++;
        } catch (err) {}

        // TODO: implement no corner limit
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
