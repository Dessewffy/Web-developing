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



function showSumPrice(szállításiérték,  amountNumber = 1, price = 1000 ) {

    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 darabot kell vásárólnia!")

    } else {
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


    console.log(values, optionvalues);

});







// Biztonsági másolat!

/* function calcAmount() {
        let szállítás = document.querySelector("input[name='Átvétel']");
        let szállításiérték = parseInt(szállítás.value);
        let amountInput = document.querySelector("input[name ='amount-input']");
        let amountNumber = parseInt(amountInput.value);
        let price = 1000;
        
    
        amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
           
    
        showSumPrice(szállításiérték, amountNumber, price)
        
    }
    
    
    

function showSumPrice(price = 1000, amountNumber = 1, szállításiérték)
 {
    
    let showAmount = document.querySelector("span.show-amount");
        if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 darabot kell vásárólnia!")
        
    } else {
        let amount = amountNumber * price + szállításiérték;
        showAmount.innerHTML = amount;
    }
    
    
}
// Ez a submit esemény által küldendő adatok függvénye
let orderForm = document.querySelector("#Form");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault(); 
    // console.log( this );

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
       if (inputs[i].name == 'Átvétel' && inputs[i].checked) {
            
            values[inputs[i].name] = inputs[i].value;
        }
       else if (inputs[i].name == 'amount-input')  {
        values[inputs[i].name] = inputs[i].value;

       }

       
    }

    let options = this.querySelectorAll("select");
    let optionvalues = {};
    for (let i = 0; i < options.length; i++) {
        optionvalues[options[i].name] = options[i].value;
        }
        
    
    console.log( values, optionvalues);
    
}); */






