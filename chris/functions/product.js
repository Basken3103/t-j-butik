//DOM element til js oputput

let productDiv = document.getElementById("product-div")

//Tekst streng med url
let url = window.location.href
//kovertér til object
url = new URL(url)
let productId = url.searchParams.get("product")

//vi er lige nødt til at trække 1 fra produkt ID'et 
// fordi arrays starter på 0 -Ikke 1
productId = parseInt(productId) - 1

productDiv.innerHTML = generateProduct()

function generateProduct() {
    let htmlString = "<div>"
    htmlString += `<h1>${products[productId][1]}</h1>`

    htmlString += `<img src="${products[productId][9]}" >`

    htmlString += `<p>${products[productId][6]}</p>`

    htmlString += `<h3>${(products[productId][7] * 1.25).toFixed(2)} DKK</h3>`

    htmlString += `<form action="checkout.html">`
    htmlString += `<label>Vælg farve</label>`
    htmlString += `<select name="color">`


    products[productId][5].forEach(function (element) {
        htmlString += `<option value="${element}">${element}</option>`
    })

    htmlString += `</select>`
    htmlString += `<br>`
    htmlString += `<label>Vælg størrelse</label>`
    htmlString += `<select name="size">`

    products[productId][4].forEach(function (element) {
        htmlString += `<option value="${element}">${element}</option>`
    })

    htmlString += `</select>`

    htmlString += `<br>`

    htmlString += `<label>Vælg antal</label>`
    htmlString += `<input type="number" min="0" max="10" name="amount" value="1">`
    htmlString += `<br>`

    htmlString += `<input type="submit" value="Føj til kurv">`
    htmlString += `</form>`

    htmlString += "</div>"

    return htmlString
}