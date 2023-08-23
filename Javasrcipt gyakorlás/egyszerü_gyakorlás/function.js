//függvény
function név () {
//végrehajtandó kód
//itt is hívhatsz meg másik függvényt, ilyenkor annak kódja fut le majd a köv sor ebben a függvényben
}

//Függvény meghívása 
név();

//Matematikai függvényként is működhetnek, azaz inputokból csinál outputot(gép)
//A paraméter lokális, csak a függvényen belűl létezik!
function addOne(szam) {
    //ilyenkor a return kell
    return szam +1;
}
addOne(5)

function addTwo(szam) {
return {
    0:1,
    1:2,
    2:3

} [szam]
}
console.log(addTwo(addTwo(0)))  
//eredmény:2 (2-őt ad hozzá)


//Anonim function
//változóba mented

let addThree = function(){ //itt nem kell nevet adni a függvénynek
    return szam + 3;
}
//DE csak a deklarálás után tudod meghívni, tehát a 33 sor fölötti sorokban nem!
addThree(4)