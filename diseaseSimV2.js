//----------Version 2----------//

//----------Page setup---------//

//Creating a variable for the pange canvas for ease of access later.
var pageCanvas = document.querySelector('canvas');

//Setting the canvas size.Currently a cube, may change later.
var pageCanvasSize = 500;

//Setting the canvas size on the page.
canvas.width = pageCanvasSize;
canvas.height = pageCanvasSize;


//----------Simulation variable setup----------//

//Setting the grid size that will be used for the simulation.
//Means that the width/height of the canvas will be divided into 10 sections.
var gridSize = 10;

//Initalises the Array used to store the grid.
//This will be a 2d array to store rows and columns.
var gridArray = [];

//Number of "people" to simulate.
var peopleCount = 10;

//----------Visual variable setup----------//

//Variable used to position the squares correctly in the Canvas.
//+1 used to add a border to the squares. Works alonside the -2 squareSize.
var positionMultiplier = ((pageCanvasSize / gridSize) + 1);

//Variable used to size the grid squares.
//-2 used to add a border to the squares. Works alonside the +1 above.
var squareSize = ((pageCanvasSize / gridSize) - 2);


//---------Initial setup of simulation----------//






//----------Simulation knowledge----------//














//
