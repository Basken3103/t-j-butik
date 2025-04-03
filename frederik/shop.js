document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCartCount();
});

// **1. Hent produkter fra JSON og vis dem**
function loadProducts() {
    fetch("products.json") // Sørg for, at din JSON-fil findes!
        .then(response => response.json())
        .then(products => {
            renderProducts(products);
        })
        .catch(error => console.error("Fejl ved hentning af produkter:", error));
}

// **2. Render produkter i HTML**
function renderProducts(products) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} kr</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Tilføj til kurv</button>
        `;
        productContainer.appendChild(productEl);
    });
}

// **3. Tilføj produkt til kurven**
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find om produktet allerede er i kurven
    let existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// **4. Opdater antal varer i kurv (badge)**
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}
