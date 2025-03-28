document.getElementById("checkout-btn").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Din kurv er tom. Tilføj varer før du går til betaling!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let confirmation = confirm(`Din total er ${total} kr. Vil du fortsætte til betaling?`);

    if (confirmation) {
        alert("Tak for dit køb! 🎉 Din ordre er blevet placeret.");
        cart.length = 0; // Tøm kurven efter køb
        renderCart(); // Opdater visningen
    }
});
