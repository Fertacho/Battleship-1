import React, { useState } from "react";

// create a function to generate a random game board
function generateBoard() {
  // create an empty board
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push(new Array(10).fill(null));
  }

  // add a random ship to the board
  const shipRow = Math.floor(Math.random() * 10);
  const shipCol = Math.floor(Math.random() * 10);
  board[shipRow][shipCol] = "ship";

  return board;
}

function GameBoard() {
  // generate a random game board on initial render
  const [board, setBoard] = useState(generateBoard());

  // define a function to handle cell clicks
  function handleClick(row, col) {
    // create a copy of the current board
    const newBoard = board.slice();

    // if the cell at the specified row and column has a ship, mark it as hit
    if (board[row][col] === "ship") {
      newBoard[row][col] = "hit";
    } else {
      // otherwise, mark it as a miss
      newBoard[row][col] = "miss";
    }

    // update the board state with the new board
    setBoard(newBoard);
  }

  // render the game board
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div key={colIndex} onClick={() => handleClick(rowIndex, colIndex)}>
              <Ship cell={cell} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Ship({ cell }) {
  // if the cell contains a ship, render a ship
  if (cell === "ship") {
    return <div className="ship">Ship</div>;
  }

  // if the cell contains a hit, render a hit
  if (cell === "hit") {
    return <div className="hit">Hit</div>;
  }

  // if the cell contains a miss, render a miss
  if (cell === "miss") {
    return <div className="miss">Miss</div>;
  }

  // otherwise, render an empty cell
  return <div className="empty">Empty</div>;
}
