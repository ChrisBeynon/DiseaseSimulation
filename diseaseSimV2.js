//----------Version 2----------//

//----------KEY----------//
//Numbers used to save space. (possibly speed up calculation as no converting and shorter read write?)
// 0 = empty - no color
// 1 = uninfected - blue
// 2 = infected - red
// 3 = recovered - green
// 4 = dead - black


//----------Page setup---------//

//Creating a variable for the pange canvas for ease of access later.
var pageCanvas = document.querySelector('canvas');

//Setting the canvas size.Currently a cube, may change later.
var pageCanvasSize = 1000;

//Setting the canvas size on the page.
canvas.width = pageCanvasSize;
canvas.height = pageCanvasSize;


//----------Simulation variable setup----------//

//Setting the grid size that will be used for the simulation.
//Means that the width/height of the canvas will be divided into 10 sections.
var gridSize = 50;

//Initalises the Array used to store the grid.
//This will be a 2d array to store rows and columns.
var gridArray = [];

//Number of "people" to simulate.
var peopleCount = 3;

//Setting the initial amount of infected people.
var initialInfections = 2;

//Chance of a person being infected.(in %).
var infectionChance = 10;

//----------Visual variable setup----------//

//Creating the "Super object" that will be used for drawing to the canvas in 2d (contains the methods).
var ctx = pageCanvas.getContext('2d');

//Variable used to position the squares correctly in the Canvas.
//+1 used to add a border to the squares. Works alonside the -2 squareSize.
var positionMultiplier = (pageCanvasSize / gridSize);

//Variable used to size the grid squares.
//-2 used to add a border to the squares. Works alonside the +1 above.
var squareSize = ((pageCanvasSize / gridSize) - 1);


//---------Initial setup of simulation----------//

//Setting up the grid in the 2d array.
//Loops through while i is less that "gridSize" ("less than" not "less than or equal to" because arrays start at 0 not 1 in JS.)
for (var i=0; i <gridSize; i++){
  //Setting each value of the array to another array.
  gridArray[i] = [];
  for (var x = 0; x < gridSize; x++){
    //sets the value of each "nested" array to 0 (uninfected).
    gridArray[i][x] = 0;
  }
}

//Randomising the initial position of "people".
//TODO check if the grid position is occupied before making.

for (var i = 0; i < (peopleCount - initialInfections); i++) {
  initialPersonCol = Math.floor(Math.random() * Math.floor(gridSize));
  initialPersonRow = Math.floor(Math.random() * Math.floor(gridSize));
  gridArray[initialPersonCol][initialPersonRow] = 1;
}
for (var i = 0; i < initialInfections; i++) {
  initialPersonCol = Math.floor(Math.random() * Math.floor(gridSize));
  initialPersonRow = Math.floor(Math.random() * Math.floor(gridSize));
  gridArray[initialPersonCol][initialPersonRow] = 2;
}

//----------Initial draw to canvas----------//

//for (var i = 0; i < gridSize; i++) {
//  for (var x = 0; x < gridSize; x++) {
//    //console.log(gridArray[i][x]);
//    //ctx.fillRect(i * positionMultiplier, x * positionMultiplier, squareSize, squareSize);
//    if (gridArray[i][x] != 0) {
//      draw();
//    }
//  };
//};

//----------Simulation----------//

//----------Simulation Functions----------//

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < gridSize; i++) {
    for (var x = 0; x < gridSize; x++) {
      if (gridArray[i][x] == 1) {
        ctx.fillStyle = 'rgb(0, 0, 250)';
        ctx.fillRect(i * positionMultiplier, x * positionMultiplier, squareSize, squareSize);
        console.log('blue drawn');
      };
      if (gridArray[i][x] == 2) {
        ctx.fillStyle = 'rgb(250, 0, 0)';
        ctx.fillRect(i * positionMultiplier, x * positionMultiplier, squareSize, squareSize);
        console.log('red drawn');
      };
      if (gridArray[i][x] == 3) {
        ctx.fillStyle = 'rgb(0, 250, 0)';
        ctx.fillRect(i * positionMultiplier, x * positionMultiplier, squareSize, squareSize);
      };
      if (gridArray[i][x] == 4) {
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(i * positionMultiplier, x * positionMultiplier, squareSize, squareSize);
      };
    };
  };
};



function peopleMove() {
  //
  for (var i = 0; i < gridSize; i++) {
    for (var x = 0; x < gridSize; x++) {
      //picks a random direction to move the square.
      var currentStatus = gridArray[i][x];
      //TODO CHANGE TO CASE STATEMENT.
      if (gridArray[i][x] != 0) {
        direction = Math.floor(Math.random() * Math.floor(5));
        if (direction == 1){

          if (checkIfOccupied(i,x-1) == false && checkIfEdge(i,x) == false) {
            gridArray[i][x] = 0;
            gridArray[i][x-1] = currentStatus;
          };
        };
        if (direction == 2){
          //right
          //column +1
          //check if edge of grid
          if (checkIfOccupied(i+1,x) == false && checkIfEdge(i,x) == false) {
            //console.log("not occupied")
            gridArray[i][x] = 0;
            gridArray[i+1][x] = currentStatus;
          };
          //move.(set current to 0)
        };
        if (direction == 3){
          //down
          //row +1
          //check if edge of grid
          if (checkIfOccupied(i,x+1) == false && checkIfEdge(i,x) == false) {
            //console.log("not occupied")
            gridArray[i][x] = 0;
            gridArray[i][x+1] = currentStatus;
          };
          //move.(set current to 0)

        };
        if (direction == 4){
          //left
          //column -1
          //check if edge of grid
          if (checkIfOccupied(i-1,x) == false && checkIfEdge(i,x) == false) {
            //console.log("not occupied")
            gridArray[i][x] = 0;
            gridArray[i-1][x] = currentStatus;
          };
          //move.(set current to 0)

        };
      };
    };
  };
};

function checkIfOccupied(nextX, nextY) {
  //Check if grid is occupied
  //If != 0 = occupied
  if (gridArray[nextX][nextY] == 0) {
    return false
  };
  if (gridArray[nextX][nextY] != 0) {
    return true
  };
}

function checkIfEdge(nextX, nextY) {
  //Check if edge of grid
  //if <0 = edge && >gridSize
  if (gridArray[nextX][nextY] < gridSize && gridArray[nextX][nextY] >= 0) {
    return false
  };
  if ((gridArray[nextX][nextY] >= gridSize) && (gridArray[nextX][nextY] < 0)) {
    return true
  };

};

function attemptInfection() {
  //if infected (==2) check infectionChance,if does infect check all directions and infect
  min = Math.ceil(0);
  max = Math.floor(100);
  for (var i = 0; i < gridSize; i++) {
    for (var x = 0; x < gridSize; x++) {
      if (gridArray[i][x] == 2) {
        infectionRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        //check if infecting
        if (infectionRandom <= infectionChance) {
          console.log('infection');
        }
        else {
          console.log('not infected')
        };
      };
    };
  };





};



function main() {
  peopleMove();
  attemptInfection();
  draw();
};
//----------Runnign simulation----------//
var intervalID = window.setInterval(main, 500);



//
