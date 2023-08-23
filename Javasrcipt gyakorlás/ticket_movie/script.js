/*
Önálló feladat:

1. Bármelyik filmet ki lehessen választani
  - A renderelés során jelenítsd meg a filmválasztó inputot és 
    dinamikusan generálj bele option-öket minden egyes film kapcsán!
  - Hozz létre új state változót selectedId néven!
  - Form change eseményre reagálva írd be a kiválasztott értéket a
    state változó alá!
  - Módosítsd a renderelő függvényt, hogy a selectedId-nak megfelelő 
    filmet rajzolja ki

2. Lehessen üléseket kiválasztani
  - Hozz létre state változót selectedSeats néven és 
    inicializáld üres tömb értékkel!
  - Kattintás eseményre tegyél a tömbbe egy adott ülést
    beazonosító elemet, az alábbi séma szerint:
      { row: "H", number: 6 }
  - Rendereléskor a selectedSeats tartalmának függvényében az
    adott ülés-elementhez add hozzá a "selected" class-t!

3. Lehessen leadni a foglalást
  - Form submitkor küldd meg a selectedSeats értékét AJAX kéréssel, az 
    alábbi URL-re, JSON formátumban:
  - POST https://kodbazis.hu/api/book-seats/${movieId}

Sok sikert!
*/


// State
let movie = {};

fetch("https://kodbazis.hu/api/movies")
  .then((res) => (res.ok ? res.json() : []))
  .then((movies) => {
    movie = movies[0];
    
    render();
  })

function render() {
  const numberOfRows = movie.numberOfRows;
  const numberOfSeats = movie.numberOfSeats;
  const seatMap = generateSeats(numberOfRows, numberOfSeats);

  for (let bookedSeat of movie.bookedSeats) {
    seatMap.get(bookedSeat.row).set(bookedSeat.number, "Foglalt");
  }

  let rowsHTML = "";

  let firstRow = "<div class='row-symbol'></div>";
  seatMap.get("A").forEach((seat, seatKey) => {
    firstRow += `<div class="column-number">${seatKey}</div>`;
  });

  rowsHTML += `<div class="seat-row">${firstRow}</div>`;

  seatMap.forEach((rowValue, rowKey) => {

    let singleRowHTML = "";
    rowValue.forEach((seatValue, seatKey) => {
     singleRowHTML += `
          <div 
            class="seat ${seatValue === "Foglalt" ? "occupied" : ""}" 
            data-row="${rowKey}" 
            data-seat="${seatKey}"
          >  
          </div>
         `;
    });

    rowsHTML += `
          <div class="seat-row">
            <span class="row-symbol me-2">${rowKey}</span>
            ${singleRowHTML}
          </div>
        `;
  });

  document.querySelector(".app-container").innerHTML = rowsHTML;
}

function generateSeats(numberOfRows, numberOfSeatsPerRow) {
  const rowSymbols = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  let ret = new Map();
  for (let i = 0; i < numberOfRows; i++) {
    ret.set(rowSymbols[i], new Map());
    for (let j = 1; j < numberOfSeatsPerRow + 1; j++) {
      ret.get(rowSymbols[i]).set(j);
    }
  }
  return ret;
}
