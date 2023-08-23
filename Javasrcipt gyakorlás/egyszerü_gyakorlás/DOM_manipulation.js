const body = document.body;
body.append("Hello World!")


//Ez csak le kreálja, de nem illeszti be
const div = document.createElement('div')

//Ez már beilleszti!
body.append(div);

// //Ezt a divbe írtam (text content jobb)
// div.innerText = 'Csá!'
// div.textContent = 'Ez talán jobb'
// //Lehet így formázva is beírni
// div.innerHTML = '<strong>Miután egy div-et houzam létre, ezért mindig csak egyet ír ki</strong>'

//Ez a biztonségos mód
const strong = document.createElement('strong');
div.append(strong)
strong.innerText = "Ez a legbiztonságosabb kiírási mód"



//adok egy span-t hozzá
const span = document.createElement('span');
div.append(span)

//eltávolítnai elemet:

//div.remove() //Mindent eltávolít ami a divbe volt
//Vagy 
//div.removeChild(span) //csak az adott gyerek elemet

//ezzel ad hozzá atribútumot, itt címet, de lehet id is
div.setAttribute("title", "cica")
div.title = "cica"; //mindkettő jó
div.id = "első"
//Ezzel tudom lekérni (cica)
console.log (div.getAttribute("title"))
console.log(div.title)
//így lehet törölni
div.removeAttribute("id")