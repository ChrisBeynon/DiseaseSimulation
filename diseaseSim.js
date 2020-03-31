//setting canvas selctor to variable
var canvas = document.querySelector('canvas');
//resizing canvas
canvas.width = 500;
canvas.height = 500;

//setting variables for simulation
var gridSize = 100;
var squareSize = (500/100) - 1;


//creating 2d super object
var context = canvas.getContext('2d');


//creating  a rectangle
c.fillStyle = 'rgba(0, 255, 0, 1)';
context.fillRect(10,10,squareSize,squareSize);
