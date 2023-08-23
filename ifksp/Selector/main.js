function calcAmount() {

    let price = 1000;
    let amountInput = document.querySelector("input[name=' amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amouuntNumber;
    
    showSumPrice(price, amountNumber );
}


function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");

    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket vásárolhat!");

    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
    
let helpText = document.createElement("small");
helpText.className = "form text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";

let parent = document.querySelector("div.form-grpup: nth-child(1)");
parent.appendChild(helpText);
//window event
let sendButton = document.querySelector("form .btn.btn-primary")
sendButton.onclick = finction() {
    alert("Hello js!");
}

sendButton.addEventListener("click", function()  [
    alert("Hello Js!");

]);

// Űrlap események(events)
let ordeForm = document.querySelector("#oederForm");
ordeForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log( this );

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        
    }
});












