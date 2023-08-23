let printButton = document.getElementById("print-button");

printButton.onclick = function () {
    window.print();
};

//Actuel date render
var date = new Date();
var hour = date.getHours();
var day = date.getDay();

var title = "Szép napot!";

if (hour <= 8) {
    title = "Jóreggelt!"
} else
if (hour > 19) {
    title = "Kellemes estét!"
}

document.querySelector('h1').innerHTML = title;
