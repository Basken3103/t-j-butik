// Indlæs udsalgsprodukter fra en JSON-fil
document.addEventListener("DOMContentLoaded", () => {
    fetch("udsalg.json")
        .then(response => response.json())
        .then(data => visUdsalgsProdukter(data))
        .catch(error => console.error("Fejl ved indlæsning af produkter:", error));
});

function visUdsalgsProdukter(produkter) {
    const container = document.getElementById("udsalg-container");
    container.innerHTML = ""; // Ryd eksisterende indhold

    produkter.forEach(produkt => {
        const produktElement = document.createElement("div");
        produktElement.classList.add("produkt-kort");
        produktElement.innerHTML = `
            <img src="${produkt.billede}" alt="${produkt.navn}">
            <h3>${produkt.navn}</h3>
            <p class="rabat-pris">Før: <s>${produkt.originalPris} DKK</s></p>
            <p class="pris">Nu: ${produkt.tilbudspris} DKK</p>
            <button onclick="tilfojTilKurv(${produkt.id})">Læg i kurv</button>
        `;
        container.appendChild(produktElement);
    });
}

function tilføjTilKurv(produktId) {
    let kurv = JSON.parse(localStorage.getItem("kurv")) || [];

    const eksisterendeProdukt = kurv.find(item => item.id === produktId);
    if (eksisterendeProdukt) {
        eksisterendeProdukt.antal += 1;
    } else {
        kurv.push({ id: produktId, antal: 1 });
    }

    localStorage.setItem("kurv", JSON.stringify(kurv));
    alert("Produkt tilføjet til kurven!");
}
