document.addEventListener("DOMContentLoaded", function() {
    const cart = [];
    const cartElement = document.getElementById("cart"); // Sørg for, at der er et HTML-element med id="cart"
    const searchInput = document.getElementById("search"); // Sørg for, at der er et inputfelt med id="search"
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
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
    
    // Søgefunktion
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll(".row").forEach(row => {
            const productName = row.querySelector("h3").innerText.toLowerCase();
            if (productName.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
