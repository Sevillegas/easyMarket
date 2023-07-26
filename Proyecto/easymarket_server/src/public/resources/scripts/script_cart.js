class Producto {
    constructor(
        id_producto,
        descripcion_producto,
        id_categoria,
        precio,
        cantidad,
        id_oferta,
        enCompra
    ) {
        this.id_producto = id_producto,
            this.descripcion_producto = descripcion_producto,
            this.id_categoria = id_categoria,
            this.precio = precio,
            this.cantidad = cantidad,
            this.id_oferta = id_oferta,
            this.enCompra = enCompra
    }

}


$(document).ready(function () {


    let list = $('.list');
    let listCard = $('.listCard');
    let total = $('.total');
    let quantity = $('.quantity');

    let productsList = [];
    let compraList = [];


    $.ajax({
        type: "GET",
        url: "/product",
        success: function (response) {

            //alert("productos obtenidos correctamente");

            response.map(e => {
                productsList.push(
                    new Producto(
                        id_producto = e.id_producto,
                        descripcion_producto = e.descripcion_producto,
                        id_categoria = e.id_categoria,
                        precio = e.precio,
                        cantidad = e.cantidad,
                        id_oferta = e.id_oferta,
                        enCompra = 0
                    ));
            });


            console.log(productsList);

            function loadProducts() {

                $.each(productsList, (key, value) => {

                    let newProductItem = document.createElement('div');

                    $(newProductItem).attr('class', 'item');

                    $(newProductItem).html(
                        `<div class="title">${value.descripcion_producto}</div>
                        <div class='price'>Precio: ${value.precio.toLocaleString()}</div>
                        <div class="cantidad">Disponible: ${value.cantidad.toLocaleString()}</div>
                        <div class="oferta">Oferta: ${value.id_oferta}</div>
                        <button>Añadir</button>
                    `);

                    $(newProductItem).on('click', 'button', function () {
                        alert(`button ${key}`);
                        addCart(key);
                    });


                    $(list).append(newProductItem);


                })

            }

            loadProducts();



            function addCart(key) {

                if (compraList.includes(productsList[key])) {

                    let item = compraList.find(e => e === productsList[key]);

                    changeQuantityPlus(item);


                }
                else {

                    compraList.push(productsList[key]);
                    let item = compraList.find(e => e === productsList[key]);
                    item.enCompra = 1;

                }

                updateListItem();


            }


            function updateListItem() {

                $(listCard).html("");

                let totalCartCount = 0;
                let totalPrice = 0;


                compraList.forEach(
                    (compraItem) => {

                        let newItem = document.createElement('li');

                        $(newItem).html(
                            `
                            <div>${compraItem.descripcion_producto}</div>
                            <div>${compraItem.precio.toLocaleString()}</div>
                            <div></div>
                            <div>
                                <button id="minusBtn">-</button>
                                <div>${compraItem.enCompra}</div>
                                <button id="moreBtn">+</button>
                            </div>
                        `);

                        $(newItem).on('click', '#minusBtn', function () {

                            changeQuantitySubs(compraItem);

                        });

                        $(newItem).on('click', '#moreBtn', function () {

                            changeQuantityPlus(compraItem);

                        });


                        listCard.append(newItem);

                        totalPrice += (compraItem.precio * compraItem.enCompra);
                        totalCartCount += compraItem.enCompra;

                    });

                $(total).text(totalPrice.toLocaleString());
                $(quantity).text(totalCartCount);

                console.log(compraList);

            }


            function changeQuantityPlus(cartItem) {

                if (cartItem.enCompra >= cartItem.cantidad) {

                    alert("Upss, no hay mas elementos disponibles para esta referencia");

                }
                else {

                    cartItem.enCompra += 1;

                }

                updateListItem();

            }



            function changeQuantitySubs(cartItem) {

                

                if (cartItem.enCompra === 0) {

                    itemidx =  compraList.indexOf(cartItem);

                    console.log(itemidx);

                    delete compraList[itemidx];

                }

                else {

                    cartItem.enCompra -= 1;

                }

                updateListItem();


            }

            $('.closeShopping').on('click', function () {

                
                if (compraList.length != 0) {
                    alert("Orden realizada");
                    compraList = [];
                    

                }
                else {
                    alert("Agrega Elementos para realizar un pedido");
                }

                updateListItem();

            })


        },

        error: function (response) {

            alert("ha ocurrido un error");

        },


    })




    /*


      if (quantity == 0) {
                $(compraList[key]).remove();
            } else {
                $(compraList[key]).price = quantity * products[key].price;



    
    
     {
            id: 1,
            name: 'PRODUCTO 1',
            image: 'product1.JPEG',
            price: 1200000
    },
    
    
    function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(compraList[key] == null){
        // copy product form list to list card
        compraList[key] = JSON.parse(JSON.stringify(products[key]));
        compraList[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    compraList.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete compraList[key];
    }else{
        compraList[key].quantity = quantity;
        compraList[key].price = quantity * products[key].price;
    }
    reloadCard();
}
    */






});




