import { refresh } from "./draw.js";

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

let row = 0;
let col = 0;

async function update() {
  // TODO: just call it every 100th frame or so

  if (row == board.length) {
    row = 0;
    col++;
  }

  if (col == board[0].length) {
    col = 0;
    row = 0;
  }

  board[row][col] = 1;

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

  board[row][col] = 0;
  row++;

  await wait(1000);

  console.log("frame updated");
  requestAnimationFrame(update);
}

update();
