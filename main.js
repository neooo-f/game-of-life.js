import { refresh, setBlock } from "./draw.js";
import { checkCells, wait } from "./logic-helper.js";

// canvas and context
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

ctx.canvas.width = canvasWidth;
ctx.canvas.height = canvasHeight;

// game constants
const GRID_CELLSIZE = 50; // init 50
const GRID_COLOR = "grey";
const BLOCK_COLOR = "black";
const GRID_ROWS = Math.ceil(canvasHeight / GRID_CELLSIZE);
const GRID_COLS = Math.ceil(canvasWidth / GRID_CELLSIZE);
const ITERATION_TIMEOUT = 0; // init 1000

// array representing board
let board = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS).fill(0));

// random stuff
// for (let row = 0; row < GRID_ROWS; row++) {
//   for (let col = 0; col < GRID_COLS; col++) {
//     board[row][col] = Math.random() < 0.5 ? 0 : 1;
//   }
// }

// random with range
// for (let row = 0; row < GRID_ROWS; row++) {
//   for (let col = 0; col < GRID_COLS; col++) {
//     if ((row + col) % 2 === 0) {
//       board[row][col] = Math.random() < 0.5 ? 0 : 1;
//     } else {
//       board[row][col] = 0;
//     }
//   }
// }

// initial refresh on pageload
refresh(
  canvasWidth,
  canvasHeight,
  GRID_ROWS,
  GRID_COLS,
  board,
  GRID_CELLSIZE,
  GRID_COLOR,
  BLOCK_COLOR,
  ctx
);

// track player click on board
const handleCanvasClick = (e) => {
  setBlock(e, GRID_CELLSIZE, board);
  refresh(
    canvasWidth,
    canvasHeight,
    GRID_ROWS,
    GRID_COLS,
    board,
    GRID_CELLSIZE,
    GRID_COLOR,
    BLOCK_COLOR,
    ctx
  );
};

canvas.addEventListener("click", handleCanvasClick);

// init variable for anmination id to get controll over animationloop
let animate = false;

// one iteration of the game
async function update() {
  refresh(
    canvasWidth,
    canvasHeight,
    GRID_ROWS,
    GRID_COLS,
    board,
    GRID_CELLSIZE,
    GRID_COLOR,
    BLOCK_COLOR,
    ctx
  );

  if (!animate) return;

  const nextBoard = board.map((row) => [...row]);
  checkCells(board, nextBoard);
  board = nextBoard;

  // time diff between every iteration
  await wait(ITERATION_TIMEOUT);
  console.log("frame updated");
  requestAnimationFrame(update);
}

document.addEventListener("keyup", (e) => {
  console.log("enter event", animate);

  // checks if enter key is released -> starts / pauses game
  if (e.keyCode == 13) {
    if (!animate) {
      canvas.removeEventListener("click", handleCanvasClick);
      animate = true;
      update();
      return;
    }

    animate = false;
    canvas.addEventListener("click", handleCanvasClick);
  }
});
