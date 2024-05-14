import { drawBoard, drawCells, refreshBoard } from "./draw.js";

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
const BG_COLOR = "white";
const GRID_ROWS = Math.ceil(canvasHeight / GRID_CELLSIZE);
const GRID_COLS = Math.ceil(canvasWidth / GRID_CELLSIZE);

// game
// draw game board
drawBoard(GRID_ROWS, GRID_COLS, GRID_CELLSIZE, GRID_COLOR, ctx);

// array representing board
const board = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS).fill(0));

board[0][0] = 1;
board[1][1] = 1;
board[1][2] = 1;

drawCells(board, GRID_CELLSIZE, BLOCK_COLOR, ctx);

board[0][0] = 0;
board[1][1] = 0;

refreshBoard(
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
