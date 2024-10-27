const productsTableBody = document.getElementById("products-table").querySelector("tbody");

document.addEventListener("DOMContentLoaded", displayProducts);
const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";

function displayProducts() {
    fetch(URL)
        .then(response => response.json())
        .then(products => {
            productsTableBody.innerHTML = products.map(product => `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price} lei</td>
                    <td><img src="${product.imageURL}" alt="${product.name}" width="50"></td>
                    <td>${product.details}</td>
                    <td>
                    <button data-productId=${product.id}>Edit</button>
                    </td>

                    <td>
                    <button data-profuctId=${product.id}>Delete</button>
                    </td>
                </tr>
            `).join("");
        })
        .catch(error => console.error('Eroare la încărcarea produselor:', error));
}
