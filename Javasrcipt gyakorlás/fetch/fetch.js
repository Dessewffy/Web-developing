/*
    Login url: https://reqres.in/api/login
    Body:
    {
      email: "eve.holt@reqres.in",
      password: "ok"
    }
    Users url: https://reqres.in/api/users
*/
var state = [];

//így kell egy form-ból kinyerni az adatokat
document.getElementById('login').onsubmit = function (event) {
    event.preventDefault()
var email = event.target.elements.email.value;
var password = event.target.password.value;

//ezután kell kiküldenünk a kérést a login útvonalra és a request bodyban ezek adatoknsk kell utaznia
    //stringify-olni kell, hogy olvasható legyen
var body = JSON.stringify({
    email:email,
    password:password
})
//küldés paraméternek kell a login linkje felülről
fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: body,
    headers: {
        'content-type': 'application/json'
    }
} )
//fetch response-al tér vissza, ez kell a thennek
.then(function (response){
    if (!response.ok) {
        return Promise.reject("Bejelentkezés sikertelen");
      }
    //Ezzel kell kiolvasni a visszajött adatot
    return response.json();
})
//köv then blokkban tudom használni a visszatért adatot
.then(function(response){
return fetch('https://reqres.in/api/users')
})
.then(function(response) {
    if (!response.ok) {
        return Promise.reject("users error");
      }
    return response.json()
})
//Ez ami a state-et(állapot) megváltoztatja, erre kell reagálnunk
.then(function(userPage) {
    state = userPage.data
    //render
    renderUsers();
})
//hibaüzenet, ha nem válaszolna a szerver valamiért
.catch(function(error) {
    state.isLoginPending = false;
    renderLoginComponent();
    alert(error);
  });


}

function renderUsers () {
    var userHTML = "";
    for (var user of state) {
        //html-ből emeltem át ezt a elemet és univerzálissá teszem(dinamikus érték)  és forof iterációval végig megyek
            //user.last_name a user tömbből van(html része)
       userHTML += ` <li class="list-group-item">${user.first_name} ${user.last_name} </li>` 
    }
    //  <ul class="list-group"> ez az elem körbe vette a fentit, de hozzá lehet fűzni így: = '<ul class="list-group">' + userHTML  + '</ul>';
    document.getElementById('user-list-container').innerHTML = '<ul class="list-group">' + userHTML  + '</ul>';
}