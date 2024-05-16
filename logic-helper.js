import { CELL_COMBINATIONS } from "./constants.js";

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const checkBirthCells = (board, nextBoard) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== 0) continue; // only empty cells get checked

      let neighbourCounter = 0;

      CELL_COMBINATIONS.forEach((combination) => {
        try {
          if (board[row + combination[0]][col + combination[1]] == 1)
            neighbourCounter++;
        } catch (err) {}
      });

      if (neighbourCounter === 3) nextBoard[row][col] = 1;
    }
  }
};
