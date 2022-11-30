/* eslint-disable */
import "./style.css";

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};

let myGridSize = prompt("¿De qué tamaño quieres tu tablero?");
let enemyGridSize = prompt("¿De qué tamaño quieres el tablero enemigo?");
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize);
let myShips = 3;
let enemyShips = 3;
let enemyLocations = {};

printGrid(enemyGrid, true);
printGrid(myGrid);

for (let i = 1; i < 4; i++) {
  let x = prompt("Ingresa las coordenadas de tu barco" + i);
  let y = prompt("Ingresa las coordenadas de tu barco" + i);
  placeCharacter(x, y, "O", myGrid);
  placeRandomCharacter("O", enemyGrid, enemyGridSize);
}

printGrid(enemyGrid, true);
printGrid(myGrid);

while (enemyShips > 0 && myShips > 0) {
  let x = prompt("ingresa la coordenada x para tu ataque");
  let y = prompt("ingresa la coordenada y para tu ataque");

  if (attack(x, y, enemyGrid)) {
    enemyShips--;
  }

  printGrid(enemyGrid, true);
  printGrid(myGrid);
}

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

function placeCharacter(x, y, c, grid) {
  grid[y][x] = c;
}

function placeRandomCharacter(c, grid, max) {
  let didPlace = false;
  while (!didPlace) {
    let x = getRandomInt(max);
    let y = getRandomInt(max);
    if (!enemyLocations["${x}-${y}"]) placeCharacter(x, y, c, grid);
    didPlace = true;
    enemyLocations["${x}-${y}"] = true;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function attack(x, y, grid) {
  if (grid[y][x] == "O") {
    grid[y][x] == "!";
    return true;
  } else if (grid[y][x] == "-") {
    grid[y][x] = "x";
    return false;
  } else {
    return false;
  }
}
