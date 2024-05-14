import { drawCells, drawGrid, refresh } from "./draw.js";

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

// game
// draw game board
drawGrid(GRID_ROWS, GRID_COLS, GRID_CELLSIZE, GRID_COLOR, ctx);

// array representing board
const board = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS).fill(0));

board[0][0] = 1;
board[1][1] = 1;
board[1][2] = 1;

drawCells(board, GRID_CELLSIZE, BLOCK_COLOR, ctx);

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let index = 0;
let index2 = 0;

async function update() {
  // TODO: just call it every 100th frame or so

  if (index == board.length) {
    index = 0;
    index2 = 0;
  }

  //   if (index2 == board[0].length) {
  //     index2 = 0;
  //   }

  board[index][index2] = 1;

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

  board[index][index2] = 0;
  index++;
  index2++;

  await wait(1000);

  console.log("frame updated");
  requestAnimationFrame(update);
}

update();

// board[0][0] = 0;
// board[1][1] = 0;

// refresh(
//   canvasWidth,
//   canvasHeight,
//   GRID_ROWS,
//   GRID_COLS,
//   board,
//   GRID_CELLSIZE,
//   GRID_COLOR,
//   BLOCK_COLOR,
//   ctx
// );
