//--------------------version 1----------------------------------------
//setting canvas selctor to variable
var canvas = document.querySelector('canvas');
//defining grid grid sizes
var gridSize = 100;
var gridSum = gridSize / 2;
var canvasSize = 500;
//resizing canvas
canvas.width = canvasSize;
canvas.height = canvasSize;

//Calculation for the X and Y position of squares. multiplies the x and y position to fit increases in grid size
var positionMultiplier = canvasSize/gridSize;

//setting variables for simulation
var gridCols = gridSize;
var gridRows = gridSize;

var arrayOfPeople = [];

//setting up 2d array
for (var i = 0; i <gridCols; i++) {
  arrayOfPeople[i] = [];
  for (var x = 0; x <gridRows; x++) {
    arrayOfPeople [i][x] = Math.floor(Math.random() * (gridSize + 1) + 1);
  }
}

//setting size of squares
var squareSize = (canvasSize/gridSize) - 1;

//creating 2d super object
var context = canvas.getContext('2d');

//creating  a rectangle
//c.fillStyle = 'rgba(0, 255, 0, 0.5)';
i=0
for (var each of arrayOfPeople) {
  i+=1;
  currentRow = each[i];
  console.log("row");
  console.log(i);
  console.log(currentRow);
  context.fillRect(each[currentRow] * positionMultiplier,i * positionMultiplier,squareSize,squareSize);
};
