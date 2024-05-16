import { refresh } from "./draw.js";
import { checkCells, wait } from "./logic-helper.js";

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
const GRID_ROWS = Math.ceil(canvasHeight / GRID_CELLSIZE);
const GRID_COLS = Math.ceil(canvasWidth / GRID_CELLSIZE);

// array representing board
let board = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS).fill(0));

// board[0][2] = 1;
// board[1][1] = 1;
// board[2][2] = 1;
// board[1][2] = 1;
// board[1][3] = 1;

board[3][5] = 1;
board[4][6] = 1;
board[5][4] = 1;
board[5][5] = 1;
board[5][6] = 1;

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

  const nextBoard = board.map((row) => [...row]);
  checkCells(board, nextBoard);
  board = nextBoard;

  // time diff between every iteration
  await wait(200);
  console.log("frame updated");
  requestAnimationFrame(update);
}

// update();
