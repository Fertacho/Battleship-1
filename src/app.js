/* eslint-disable */
import "bootstrap";
import "./style.css";

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};

let myGridSize = prompt("¿De qué tamaño quieres tu tablero?");
let enemyGridSize = prompt("¿De qué tamaño quieres el tablero enemigo?");
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize);

printGrid(enemyGrid, true);
printGrid(myGrid);

function createGrid(size) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = "-";
    }
  }
  return grid;
}

function printGrid(grid, isEnemy = false) {
  const headers = createHeaders(grid.length);
  console.log(headers);
  for (let i = 0; i < grid.length; i++) {
    let rowStr = i + "  ";
    for (let cell of grid[i]) {
      if (isEnemy && cell == "O") {
        rowStr += "- ";
      } else {
        rowStr += cell + "  ";
      }
    }
    console.log(rowStr);
  }
}

function createHeaders(size) {
  let result = "  ";

  for (let i = 0; i < size; i++) {
    result += i + " ";
  }
  return result;
}
