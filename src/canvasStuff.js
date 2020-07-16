var canvasElement = document.querySelector("#corner-thing");
var context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.moveTo(0, 0);
context.lineTo(20, 0);
context.lineTo(0, 20);
context.closePath();

// the outline
// context.lineWidth = 1;
// context.strokeStyle = '#C0324C';
// context.stroke();

// the fill color
context.fillStyle = "#C0324C";
context.fill();
