let cart = [];

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");
    cartList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} DKK`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}
