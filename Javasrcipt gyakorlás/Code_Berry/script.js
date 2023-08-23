var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillStyle = 'orange';
//context.fillRect(125, 50, 200, 200);

/*
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(0,300);
context.lineTo(450,0);
context.stroke();
*/
/*
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.fillRect(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2);
*/
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
//Óra logika
for (var unitCounter = 0; unitCounter <= canvasWidth; unitCounter++) {
    if (unitCounter % 3 === 0) {
        context.beginPath();
        context.moveTo(unitCounter, canvasHeight / 2);
        if (unitCounter % 2 === 0) {
            context.lineTo(canvasWidth / 2, canvasHeight - canvasHeight);
        } else {
            context.lineTo(canvasWidth / 2, canvasHeight);
        }
        context.strokeStyle = 'rgba(255,0,0,.5)';
        context.stroke();
    }
}