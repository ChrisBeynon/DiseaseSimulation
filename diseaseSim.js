//--------------------version 1----------------------------------------------*

//----------------------Initial page setup ----------------------------------*

//COLUMN THE ROW.

//KEY:
//  0 = blank
//  1 = uninfected
//  2 = infected

//setting canvas selctor to variable
var canvas = document.querySelector('canvas');
//defining grid grid sizes
var gridSize = 10;
var canvasSize = 500;
//resizing canvas
canvas.width = canvasSize;
canvas.height = canvasSize;

//Calculation for the X and Y position of squares. multiplies the x and y position to fit increases in grid size
var positionMultiplier = canvasSize/gridSize;

//setting variables for simulation
var gridCols = gridSize;
var gridRows = gridSize;

var gridArray = [];

var amountOfPeople = 10;

//setting up 2d array
for (var i = 0; i < gridSize; i++) {
  gridArray[i] = [];
  for (var x = 0; x <gridRows; x++) {
    gridArray[i][x] = 0;
  }
}

//Randomise peoples initial positions
initialPersonCol = 0;
initialPersonRow = 0;
for (var i =0; i < amountOfPeople; i++) {
  initialPersonCol =  Math.floor(Math.random() * (gridSize) );
  //console.log(initialPersonCol);
  initialPersonRow =  Math.floor(Math.random() * (gridSize) );
  //console.log(initialPersonRow);
  gridArray[initialPersonCol][initialPersonRow] = 1;
}

//setting size of squares
var squareSize = (canvasSize/gridSize) - 1;

//creating 2d "super object"
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//creating  initial rectangles
//fillRect (x, y, width, height)
//for (var col of gridArray) {
  for (var i = 0; i < gridSize; i++) {
    console.log(i)
    for (var row of gridArray[i]) {
      if (gridArray[i][x] = 1) {
        console.log(gridArray[i][x]);
        ctx.fillRect((i), (gridArray[i][x] * positionMultiplier), gridSize - 1, gridSize - 1);
      };
    };
  };
//};



//--------------------Simulation logic -------------------------------------*

//--------------------Move position-----------------------------------------*
//        How arrayOfPeople works
//  Is a 2d array of the entire grid. With specific values for different things
//  which dictate the logic that the "person" will follow
//
//  e.g: if grid poisiton [4][8] is a person, they will check all 4 cardinal
//  directions for another "person" (or the edge of the screen) and move to an
//  empty space.


//
