let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

document.getElementById("close").onclick = function () {
    navlist.classList.toggle('open')

}

//Udgør sidens indhold
let products = [
    [
        /*
        Produkt struktur
        [
            Products[0] - Unikt varenummer/ NUMBER,
            Products[1] - Produkt titel/ STRING,
            Products[2] - Tags/ ARRAY,
            Products[3] - Menu kategori(er)/ ARRAY,
            Products[4] - Størrelser/ ARRAY,
            Products[5] - Farver/ ARRAY,
            Products[6] - Beskrivelse/ STRING,
            Products[7] - Pris (uden moms)/ NUMBER,
            Products[8] - RABAT i % / NUMBER
            Products[9] - Produktbillede/ STRING
            Products[10] - Lagerstatus ( på lager eller udsolgt)/ BOOLEAN
            Products[11] - Featured Product - BOOLEAN

        ]
         */
        1,
        "Cardigan i kameluld", //Produkttitel
        ["Bluser", "Strik", "Overdele"], //Tags
        ["Herretøj"], //MenuItem
        ["s", "m", "l", "xl", "xxl"], //Størrelser
        ["Sort", "Rød", "Brun", "Hvid"],//Farver
        "Lækker cardigan i eksklusiv kamelud",//Produktbeskrivelse
        850, //Pris
        10, //Rabatprocent
        "images/1.jpg", //Billedsti
        true,
        true

    ],
    [
        2,
        "Festkjole",
        ["Kjoler", "Festtøj"],
        ["Dametøj"],
        ["xs", "s", "m", "l", "xl"],
        ["Sort", "Mørkerød", "Navy", "Hvid"],
        "Smuk og eksklusiv festkjole i akryl",
        700, //Pris
        0, //Rabatprocent
        "images/2.jpg",
        true, //Skal være på forsiden
        false //Skal ikke være på forsiden
    ],
    [
        3,
        "Konfimationskjole",
        ["Kjoler", "Festtøj"],
        ["Dametøj", "Børnetøj"],
        ["xs", "s", "m", "l", "xl"],
        ["Hvid"],
        "Elegant konfirmationskjole i bommuld og akryl",
        1200, //Pris
        15, //Rabatprocent
        "images/3.jpg",
        true,
        true
    ],
    [
        4,
        "Turtleneck Sweater",
        ["Strik", "Overdele"],
        ["Dametøj"],
        ["xs", "s", "m", "l"],
        ["Sort", "Rosa", "Hvid", "Gul"],
        "Komfortabel sweater med høj hals",
        760, //Pris
        10, //Rabatprocent
        "images/4.jpg",
        true,
        true
    ],
    [
        5,
        "Rullekrave Sweater",
        ["Strik", "Overdele"],
        ["Herretøj"],
        ["xs", "s", "m", "l", "xl", "xxl"],
        ["Sort", "Orange", "Hvid", "Grå"],
        "Lækker sweater med høj hals",
        649, //Pris
        0, //Rabatprocent
        "images/5.jpg",
        false,
        false
    ],
    [
        6,
        "Heavy Duty T-shirt",
        ["T-shirts", "Overdele"],
        ["Herretøj"],
        ["xs", "s", "m", "l", "xl", "xxl"],
        ["Sort", "Hvid", "Blå"],
        "Slidstærk T-shirt i 100% bommuld",
        649, //Pris
        5, //Rabatprocent
        "images/6.jpg",
        true,
        true
    ],
    [
        7,
        "Slim fit Jeans",
        ["Bukser"],
        ["Herretøj"],
        ["s", "m", "l", "xl"],
        ["Sort", "Blå"],
        "Smarte Wrangler jeans der sidder perfekt",
        649, //Pris
        5, //Rabatprocent
        "images/7.jpg",
        true,
        true
    ]
]

//function updateCart() {
//  const cartList = document.getElementById("cart");
//  const totalPriceElement = document.getElementById("total-price");
//  cartList.innerHTML = "";
//  let totalPrice = 0;

//  cart.forEach(item => {
//      const li = document.createElement("li");
//      li.textContent = `${item.name} - ${item.price} DKK`;
//      cartList.appendChild(li);
//      totalPrice += item.price;
//  });

//  totalPriceElement.textContent = totalPrice;
//}

//function addToCart(productId) {
//    const product = products.find(p => p.id === productId);
//    cart.push(product);
//    renderCart();
//}

//function addToCart(product) {
//    cart.push(product);
//    updateCart();
//}

//function removeFromCart(index) {
//    cart.splice(index, 1);
//    renderCart();
//}

//renderProducts();




// test
document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartElement = document.getElementById("cart"); // Sørg for, at der er et HTML-element med id="cart"

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productElement = this.closest(".row");
            const productName = productElement.querySelector("h3").innerText;
            const productPrice = productElement.querySelector(".price").innerText;

            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartElement.innerHTML = "";
        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.name} - ${item.price}`;
            cartElement.appendChild(listItem);
        });
    }
});


