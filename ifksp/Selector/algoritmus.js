/*
Összegzés algoritmusa:

Összeg(akkumulátor-összegyűjtő)=0
CIKLUS AMÍ vannak szám, ADDIG
    szám = következő elem
    Összeg = összeg + szám
CKLUS vége
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("sum: " , sum);

/*
számlálás algoritmusa
db = 0
CIKLUS AMÍG van szám, ADDIG 
    szám = következő elem
    Ha igaza feltétel a számra, AKKOR
        db = darab + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0 ){

        db++;
    }
}
console.log("Even numbers: ", db);



/*
Szélsőérték keresése algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG 
    szám = következő szám
    HA szám > legnagyobb AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest ){
        biggest = numericArray[i]; 
    } 
    
}
console.log("The biggest element: ", biggest );


let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest){
        smallest = numericArray[i]; 
    } 
    
}
console.log("The smallest element: ", smallest );

/*
Eldöntés algoritmusa/tétele:

találat = hamis
CIKLUS AMÍG van elem  és HAMIS találat
    szám = következő elem
    HA iagz a feltétel a számra, AKKOR
        találat = igaz
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5 ) {
        contains = true;
    }
    
}
console.log("This array contains 5: ", contains );