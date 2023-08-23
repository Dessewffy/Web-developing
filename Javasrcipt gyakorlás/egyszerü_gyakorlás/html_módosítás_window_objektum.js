//window egy hatalmas objektum, amibe benne van az összes eleme a weblapnak

// globális objektum
//window elhagyható
window.console.log("szia");
/*
  - adott element JS reprezentációja: document.all[5]
  - milyen esemény kapcsán akarsz reagálni pl.: onclick
  - milyen kódot akarsz futtatni pl:legyen piros
*/

//document.all[indexszám] veszélyes, mert ha új elem van, akkor borul a indexelés!! 
document.all[5].onclick = function() {
    //html módosítása, kattintasz piros lesz a kocka
  document.all[5].style.backgroundColor = "red";
  console.log("ok");
};

console.dir(document.all[5]);
Footer

