import { checkBirthCells } from "./logic-helper.js";

// canvas and context
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

ctx.canvas.width = canvasWidth;
ctx.canvas.height = canvasHeight;

// constants
const GRID_CELLSIZE = 50;
const GRID_COLOR = "grey";
const BLOCK_COLOR = "black";
// const BG_COLOR = "white";
const GRID_ROWS = Math.ceil(canvasHeight / GRID_CELLSIZE);
const GRID_COLS = Math.ceil(canvasWidth / GRID_CELLSIZE);

// array representing board
const board = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS).fill(0));

board[0][2] = 1;
board[1][1] = 1;
board[2][2] = 1;
// board[1][3] = 1;
// board[0][3] = 1;
// board[0][1] = 1;
console.table(board);

// combinations to loop over for each field (8 positions)
const combinations = [
  [0, -1],
  [0, +1],
  [-1, 0],
  [-1, -1],
  [-1, +1],
  [+1, 0],
  [+1, -1],
  [+1, +1],
];

// deep copy of board for the next iteration
let nextBoard = board.map((row) => [...row]);

checkBirthCells(board, nextBoard);

// for (let row = 0; row < board.length; row++) {
//   for (let col = 0; col < board[0].length; col++) {
//     if (board[row][col] !== 0) continue; // only empty cells get checked

//     let neighbourCounter = 0;

//     combinations.forEach((combination) => {
//       try {
//         if (board[row + combination[0]][col + combination[1]] == 1)
//           neighbourCounter++;
//       } catch (err) {}
//     });

//     if (neighbourCounter === 3) nextBoard[row][col] = 1;
//   }
// }

console.table(nextBoard);

// combinations
// board[row][col - 1];
// board[row][col + 1];

// board[row - 1][col];

// board[row - 1][col - 1];
// board[row - 1][col + 1];

// board[row + 1][col];

// board[row + 1][col - 1];
// board[row + 1][col + 1];

// iterate over every element
// for (let row = 0; row < board.length; row++) {
//   for (let col = 0; col < board[0].length; col++) {
//     if (board[row][col] == 1) console.log("indexes: ", row, col);
//   }
// }

// let row = 0;
// let col = 0;

// async function update() {
//   if (row == board.length) {
//     row = 0;
//     col++;
//   }

//   if (col == board[0].length) {
//     col = 0;
//     row = 0;
//   }

//   board[row][col] = 1;

//   refresh(
//     canvasWidth,
//     canvasHeight,
//     GRID_ROWS,
//     GRID_COLS,
//     board,
//     GRID_CELLSIZE,
//     GRID_COLOR,
//     BLOCK_COLOR,
//     ctx
//   );

//   board[row][col] = 0;
//   row++;

//   // time diff between every iteration
//   await wait(1000);

//   console.log("frame updated");
//   requestAnimationFrame(update);
// }

// update();
