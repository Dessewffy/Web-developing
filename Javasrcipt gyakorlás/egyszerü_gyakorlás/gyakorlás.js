


 alert("Kérem töltse ki az űrlapot")
let quantity = prompt('Adja meg a mennyiséget!');
let type = prompt('Válasszaon az alábbi tipusok közül: student, adult, retired')

let types = {
    student: 300,
    adult: 500,
    retired: 280
}

let price = types[type];
if (price === undefined){
    alert("Érvénytelen tipus")
}else {
if (price == undefined) {
    alert('Helytelenül töltötte ki!')

} else {
    let discount = quantity > 5 ? 0.9 : 1;
    let total = quantity * price * discount;

    alert(total + "  forint lesz")
} }

 


