class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const clearCanvas = (canvasWidth, canvasHeight, ctx) => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

const drawLine = (p1, p2, ctx) => {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
};

export const drawGrid = (rows, cols, cellSize, color, ctx) => {
  ctx.strokeStyle = color;

  for (let row = 0; row <= rows; row++) {
    drawLine(
      new Point(0, row * cellSize),
      new Point(cols * cellSize, row * cellSize),
      ctx
    );
  }

  for (let col = 0; col <= cols; col++) {
    drawLine(
      new Point(col * cellSize, 0),
      new Point(col * cellSize, rows * cellSize),
      ctx
    );
  }
};

const drawBlock = (row, col, cellSize, color, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
};

export const setBlock = (e, cellSize, board) => {
  // places block on canvas based on user input (click)
  const col = Math.floor(e.x / cellSize);
  const row = Math.floor(e.y / cellSize);

  // if a block already exists on that position, delete it
  if (board[row][col] === 1) {
    board[row][col] = 0;
  } else board[row][col] = 1;
};

export const drawCells = (board, cellSize, color, ctx) => {
  // draws all blocks on the canvas based on the given board array

  const numRows = board.length;
  const numCols = board[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (board[row][col] == 1) drawBlock(row, col, cellSize, color, ctx);
    }
  }
};

export const refresh = (
  canvasWidth,
  canvasHeight,
  rows,
  cols,
  board,
  cellSize,
  gridColor,
  blockColor,
  ctx
) => {
  clearCanvas(canvasWidth, canvasHeight, ctx);
  drawGrid(rows, cols, cellSize, gridColor, ctx);
  drawCells(board, cellSize, blockColor, ctx);
};
