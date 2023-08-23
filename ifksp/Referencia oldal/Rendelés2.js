
// Ár kiszámítása
function calcAmount() {
    let szállítás = document.querySelectorAll("input");
    let szállításiérték = {};
    for (let i = 0; i < szállítás.length; i++) {
        if (szállítás[i].name == 'Átvétel' && szállítás[i].checked) {

            szállításiérték[szállítás[i].name] = szállítás[i].value;

        }


    }
    
    console.log(szállításiérték)
    let amountInput = document.querySelector("input[name ='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    let price = 1000;
    
    
    for (let [key, value] of Object.entries(szállításiérték)) {
        szállításiérték = parseInt(`${value}`);
 
     }
    

   
    showSumPrice(szállításiérték, amountNumber, price)
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; 
        


}



function showSumPrice(szállításiérték,amountNumber = 1, price = 1000 ) {
    

    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 darabot kell vásárólnia!")
    } 
    else { 
    let amount = amountNumber * price + szállításiérték;
    showAmount.innerHTML = amount;
    }


}
// Ez a submit esemény által küldendő adatok függvénye
let orderForm = document.querySelector("#Form");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    // console.log( this );

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == 'Átvétel' && inputs[i].checked) {

            values[inputs[i].name] = inputs[i].value;
        }
        else if (inputs[i].name == 'amount-input') {
            values[inputs[i].name] = inputs[i].value;

        }

     
    }

    let options = this.querySelectorAll("select");
    let optionvalues = {};
    for (let i = 0; i < options.length; i++) {
        optionvalues[options[i].name] = options[i].value;
    }
    // Ár elküldése a szervernek
    let price = 1000;
    
    let amountInput = document.querySelector("input[name ='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat!");
    }    else if (amountNumber < 1) {
        alert("Minimum 1 darabot kell vásárólnia!")
    }

    let szállítás = document.querySelectorAll("input");
    let szállításiérték = {};
    for (let i = 0; i < szállítás.length; i++) {
        if (szállítás[i].name == 'Átvétel' && szállítás[i].checked) {

            szállításiérték[szállítás[i].name] = szállítás[i].value;

        }


    }
    for (let [key, value] of Object.entries(szállításiérték)) {
        szállításiérték = parseInt(`${value}`);
 
     }
    
    let totalPrice = amountNumber  * price + szállításiérték + "FT";


    console.log(values, optionvalues, totalPrice);
   
    
});