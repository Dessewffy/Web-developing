/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.

      1. kell az elem js reprezentációja
        document.getElementById('IDneve')
      2.Esemény kiválasztása
        onclick
      3.funkcionalitás leírása
        function
*/

//el kell tárolni a memóriába, hogy a blur aktív-e, hogy ki be tudjam kapcsolni.
//Belső éllapot
let isblur = false;
//esemény
document.getElementById('element-one').onclick = function () {
  //állapot változás
  isblur = !isblur;
  //Újra kell renderelni
  if (isblur) { document.getElementById('element-one').classList.add("blur") }
  else { document.getElementById('element-one').classList.remove("blur") }


}


/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/


let ishoveredOver = false;
document.getElementById('element-two').onmouseover = function () {
  ishoveredOver = true;
  renderSecondbox();
}

document.getElementById('element-two').onmouseout = function () {
  ishoveredOver = false;
  renderSecondbox();
}

function renderSecondbox() {
  if (ishoveredOver) {
    document.getElementById('element-two').style.backgroundColor = 'red';
  } else {
    document.getElementById('element-two').style.backgroundColor = 'firebrick';
  }
}
/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/


document.getElementById('element-three').ondblclick = function () {




  document.getElementById("element-three").firstElementChild.innerHTML = parseInt(getRandomArbitrary(1, 20));

}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}




/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById("element-four").onclick = function () {

  document.getElementById("element-four").classList.add("hidden");
  setTimeout(function () {
    document.getElementById("element-four").classList.remove("hidden");
  }, 1000)
}



/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
//elemek tömeges megváltoztatása

document.getElementById("element-five").onclick = function () {
  var boxes = document.querySelectorAll('.shape');

  for (var box of boxes) {
    box.style.borderRadius = "50%";


  }
}

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

//onsubmitnál kell event paraméter
document.getElementById("box-6").onsubmit = function (event) {
  //event.preventDefault() beépítettfügvény meghívásával nem töltődik újra az oldal automat + eventbe van a kellő adat
  event.preventDefault();
  //event.target.elements.boxNumber.value-val a felhasználó bevitt adataival módosítom a kockát. (firstElementChild azért kell mert az elment-six első gyerekét módosítom)
  document.getElementById('element-six').firstElementChild.innerHTML = event.target.elements.boxNumber.value;
}

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

document.getElementById('box7-input').onkeypress = function (event) {
  document.getElementById('element-seven').firstElementChild.innerHTML = event.key;
}

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/


document.onmousemove = function kordinate(event) {
  let x = event.clientX; //clientx az event objectum tulajdonsága
  let y = event.clientY;
  let coor = (" " + x + "," + y + "");
  document.getElementById("element-eight").firstElementChild.innerHTML = coor;

}

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.
Az előállt végeredményt tároljuk el új state-ként!
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9
  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

let state = 9;

document.getElementById('box-9').onsubmit = function (event) {
  event.preventDefault();

  let operand = Number(event.target.elements.operand.value);
  let operator = event.target.elements.operator.value;

  switch (operator) {
    case "mult": state = state * operand; break;
    case "div": state = state / operand; break;
    case "add": state = state + operand; break;
    case "sub": state = state - operand; break;

  }
  document.getElementById("element-nine").firstElementChild.innerHTML = state;
}



















