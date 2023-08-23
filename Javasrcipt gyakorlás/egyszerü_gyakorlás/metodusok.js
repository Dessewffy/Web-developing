//array függvény map metódussal, minden elemet megszoroz
const sorozvaOttel = szam => szam * 5 ;

const vegeredmeny = [1, 7, 25, 50, 10,8].map(sorozvaOttel);

console.log(vegeredmeny)


//filter metódus szűr
const nagyobbtiz = szam => szam > 10;

const result = [1, 7, 25, 50, 10,8].filter(nagyobbtiz);

console.log(result)