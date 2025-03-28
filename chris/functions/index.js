let productDiv = document.getElementById("product-div");
let searchBar = document.getElementById("search-bar");

if (productDiv) {
    productDiv.innerHTML = generateProducts(true);
}

function generateProducts(featured) {
    if (!Array.isArray(products)) return "<p>Ingen produkter fundet.</p>";

    return products
        .filter(p => p.featured === featured) // Filtrer featured produkter
        .map(p => `
            <a href="product.html?product=${p.id}">
                <h2>${p.name}</h2>
                <img src="${p.image}" alt="${p.name}">
                <p class="price">${(p.price * 1.25).toFixed(2)} DKK</p>
            </a>
        `)
        .join(""); // Samler HTML-strengen effektivt
}


// Indlæs alle produkter ved start
if (productDiv) {
    productDiv.innerHTML = generateProducts("", true);
}

// Lytter efter søgeinput
searchBar.addEventListener("input", function () {
    let searchTerm = searchBar.value.toLowerCase();
    productDiv.innerHTML = generateProducts(searchTerm, true);
});

function generateProducts(searchTerm = "", featured) {
    if (!Array.isArray(products)) return "<p>Ingen produkter fundet.</p>";

    return products
        .filter(p => 
            (p.featured === featured) &&
            (p.name.toLowerCase().includes(searchTerm) || 
             p.description.toLowerCase().includes(searchTerm))
        )
        .map(p => `
            <a href="product.html?product=${p.id}">
                <h2>${p.name}</h2>
                <img src="${p.image}" alt="${p.name}">
                <p class="price">${(p.price * 1.25).toFixed(2)} DKK</p>
            </a>
        `)
        .join("");
            
}


