let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    const productContainer = document.getElementById("products");
    if (!productContainer) return; // Sikrer at elementet findes

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
    const totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - ${item.price} kr <button onclick="removeFromCart(${index})">❌</button>`;
        cartContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: ${totalPrice} kr`;

    // Gem kurven i localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Opdater kurven ved indlæsning af siden
document.addEventListener("DOMContentLoaded", renderCart);

