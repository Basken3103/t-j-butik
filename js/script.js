document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Produkt 1", price: 100 },
        { id: 2, name: "Produkt 2", price: 200 },
        { id: 3, name: "Produkt 3", price: 300 }
    ];

    const productContainer = document.getElementById("products");
    const cartList = document.getElementById("cart");
    let cart = [];

    // Generer produkter i HTML
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Pris: ${product.price} DKK</p>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Tilføj til kurv</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Håndter "Add to Cart"-knap
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            // Tilføj produkt til kurv
            cart.push({ id, name, price });
            updateCart();
        });
    });

    // Opdater kurven
    function updateCart() {
        cartList.innerHTML = ""; // Rens kurven før opdatering
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} DKK`;
            cartList.appendChild(li);
        });
    }
});
