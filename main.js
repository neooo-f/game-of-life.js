import { drawBoard, removeBlock, setBlock } from "./draw.js";

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

console.table(board);

// startpoints for the game
setBlock(1, 1, GRID_CELLSIZE, BLOCK_COLOR, board, ctx);
setBlock(2, 1, GRID_CELLSIZE, BLOCK_COLOR, board, ctx);
setBlock(1, 3, GRID_CELLSIZE, BLOCK_COLOR, board, ctx);
setBlock(1, 2, GRID_CELLSIZE, BLOCK_COLOR, board, ctx);

removeBlock(1, 1, GRID_CELLSIZE, BG_COLOR, GRID_COLOR, board, ctx);
removeBlock(1, 2, GRID_CELLSIZE, BG_COLOR, GRID_COLOR, board, ctx);

setBlock(5, 5, GRID_CELLSIZE, BLOCK_COLOR, board, ctx);
removeBlock(5, 5, GRID_CELLSIZE, BG_COLOR, GRID_COLOR, board, ctx);
