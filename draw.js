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

export const updateBoard = (row, col, value, board) => {
  board[row][col] = value;
};

export const setBlock = () => {};

export const removeBlock = () => {};

export const drawBlock = (row, col, cellSize, color, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
};
