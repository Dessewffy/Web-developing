var state = {
    //objektumok tömbje
    products: [
        {
            id: uuidv4(),
            name: 'Teszt termék 1',
            price: 2500,
            isInStock: true

        },
        {
            id: uuidv4(),
            name: 'Teszt termék 2',
            price: 3500,
            isInStock: true

        },
        {
            id: uuidv4(),
            name: 'Teszt termék 3',
            price: 4500,
            isInStock: true
        },

    ],
    editedId: ''




}

function renderEditProduct() {

    if(state.editedId === "") {
        document.getElementById('edit-product').innerHTML = "";
        return;
    }
    let foundProduct;
    for (let product of state.products) {
        if (product.id === state.editedId) {
            foundProduct = product;
            break;
        }

    }

    let editFormHTML =
        `<h3>Termék szerkesztése</h3>
        <form id="update-product" class="p-5">
    <label class="w-100">
    Név:
    <input class="form-control" type="text" name="name" value="${foundProduct.name}">
    </label>
    <label class="w-100">
     Ár:
    <input class="form-control" type="number" name="price"value="${foundProduct.price}">
    </label>
    <label class="w-100">
     Van készleten?
    <input class="form-control" type="checkbox" name="isInStock"${foundProduct.isInStock ? 'checked' : " "}">
    </label>
    <button class="btn btn-primary" type="submit">Küldés</button>
    </form>`

    document.getElementById('edit-product').innerHTML = editFormHTML;
    document.getElementById("update-product").onsubmit = function (event) {
        event.preventDefault()

        let name = event.target.elements.name.value;
        let price = Number(event.target.elements.price.value);
        let isInStock = event.target.elements.isInStock.checked;



        var foundIndex;

        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === state.editedId) {
                foundIndex = i;
                break;
            }
        };
    


        state.products[foundIndex] ={
            id: state.editedId,
            name:name,
            price:price,
            isInStock:isInStock
        }
        state.editedId ="";
        renderProducts()
        renderEditProduct()
    }


}

function renderProducts() {
    let productList = ""
    for (var product of state.products) {
        productList = productList + `
    <div class="card m-2 p-2 ${product.isInStock ? "" : "bg-danger"}"
    <p>${product.name}</p>
    <p>${product.price}</p>
    <button class="btn btn-warning m-2 p-2 float-right edit-product" data-productid=${product.id} >Szerkesztés</button>
   <button class="btn btn-danger float-right delete-product" data-productid=${product.id} >Törlés</button>
    </div>  
    
    `
    }


    document.getElementById("product-list-component").innerHTML = productList;


    for (const editBtn of document.querySelectorAll('.edit-product')) {
        editBtn.onclick = function (event) {
            var id = event.target.dataset.productid
            state.editedId = id;

            renderEditProduct()
        }
    }

    for (const deleteBtn of document.querySelectorAll('.delete-product')) {
        deleteBtn.onclick = function (event) {
            var foundIndex;
            var id = event.target.dataset.productid
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].id === id) {
                    foundIndex = i;
                    break;
                }
            }

            state.products.splice(foundIndex, 1)
            renderProducts()
        }
    }


}

window.onload = renderProducts;


document.getElementById("create-product").onsubmit = function (event) {
    event.preventDefault()

    let name = event.target.elements.name.value;
    let price = Number(event.target.elements.price.value);
    let isInStock = event.target.elements.isInStock.checked;


    state.products.push({
        id: uuidv4(),
        name: name,
        price: price,
        isInStock: isInStock

    })

    renderProducts()
}



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}