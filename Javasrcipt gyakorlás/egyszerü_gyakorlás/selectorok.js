//lehet id-vel 

document.getElementById('idnév').

//Querrey selector
document.querySelector('.osztáynév').

//ha azt akarod, hogy a módosított/új elem megkapja az elöző css-ét, akkor:
document.getElementById("idnév").firstElementChild.innerHTML = új tartalom




//Több elem módosításánál:
document.querySelector('.osztáynév').children.módosítás
//vagy
document.querySelectorAll('.osztáynév').módosítás

//De itt végig kell iterálni pl:
var változó = document.querySelectorAll('.osztáynév');

for (var valami of változó) {
    parancs;
}