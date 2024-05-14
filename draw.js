class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const drawLine = (p1, p2, ctx) => {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
};

export const drawBoard = (rows, cols, cellSize, color, ctx) => {
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

const clearCanvas = (canvasWidth, canvasHeight) => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
};

const clearCell = (
  canvasWidth,
  canvasHeight,
  rows,
  cols,
  cellSize,
  color,
  ctx
) => {
  clearCanvas(canvasWidth, canvasHeight);
  drawBoard(rows, cols, cellSize, color, ctx);
  // drawCells
};

// use later for optimization (redrawing only the cleared rects)
/* const clearCell = (row, col, cellSize, bgColor, color, ctx) => {
  const x = col * cellSize;
  const y = row * cellSize;
  ctx.fillStyle = bgColor;
  ctx.fillRect(x, y, cellSize, cellSize);

  ctx.strokeStyle = color;

  // redraws horizontal lines of the board
  drawLine(new Point(x, y), new Point(x + cellSize, y), ctx);
  drawLine(
    new Point(x, y + cellSize),
    new Point(x + cellSize, y + cellSize),
    ctx
  );

  // redraws vertical lines of the board
  drawLine(new Point(x, y), new Point(x, y + cellSize), ctx);
  drawLine(
    new Point(x + cellSize, y),
    new Point(x + cellSize, y + cellSize),
    ctx
  );
}; */

export const updateBoard = (row, col, value, board) => {
  board[row][col] = value;
};

export const setBlock = (row, col, cellSize, color, board, ctx) => {
  drawBlock(row, col, cellSize, color, ctx);
  updateBoard(row, col, 1, board);
};

export const removeBlock = (
  row,
  col,
  cellSize,
  bgColor,
  gridColor,
  board,
  ctx
) => {
  clearCell(row, col, cellSize, bgColor, gridColor, ctx);
  updateBoard(row, col, 0, board);
};
