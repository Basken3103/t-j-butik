const products = [
    { id: 1, name: "Hyggetæppe", description: "Fucking hyggeligt bro og broinde!", image: "1-5e5a8068.jpg", price: 199, featured: true },
    { id: 2, name: "Cardigan i kameluld", description: "En lækker Cardigan", image: "1.jpg", price: 299.99, featured: true },
    { id: 3, name: "Festkjole", description: "Perfekt til at danse i", image: "2.jpg", price: 299.99, featured: true },
    { id: 4, name: "Konfirmationskjole", description: "Skal du konfirmeres? Så er det der kjolen du skal have!", image: "3.jpg", price: 299.99, featured: true },
    { id: 5, name: "Turtleneck Sweater", description: "Steve Jobs favorittrøje", image: "4.jpg", price: 299.99, featured: true },
    { id: 6, name: "Rullekrave Sweater", description: "En god sweater til de kolde vinterdage", image: "5.jpg", price: 299.99, featured: true },
    { id: 7, name: "Heavy Duty T-shirt", description: "Til knap så kolde dage", image: "6.jpg", price: 299.99, featured: true },
    { id: 8, name: "Slim fit Jeans", description: "Til knap så varme dage", image: "7.jpg", price: 299.99, featured: true }
];

// Anvend produkt formular fra Niels's eksempel på Teams. Den skal bruges til funktionaliteten til min kurv.

const cart = [];

function renderProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `
            <span>${product.name} - ${product.price} kr</span>
            <button class="button" onclick="addToCart(${product.id})">Tilføj til kurv</button>
        `;
        productContainer.appendChild(productEl);
    });
}

function renderCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - ${item.price} kr <button onclick="removeFromCart(${index})">❌</button>`;
        cartContainer.appendChild(cartItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

renderProducts();
