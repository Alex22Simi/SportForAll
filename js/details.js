import { getProductById } from "../api/products.js";

document.addEventListener("DOMContentLoaded", showProductDetails);

async function showProductDetails() {
    try {
        // Preluarea ID-ului produsului din URL
        const urlSearchParams = new URLSearchParams(window.location.search);
        const productId = urlSearchParams.get("id");

        // Asigură-te că există un ID de produs valid
        if (!productId) {
            document.querySelector(".content").innerHTML = `
                <p>Produsul nu a fost găsit!</p>
            `;
            return;
        }

        // Preia datele produsului
        const product = await getProductById(productId);

        // Verifică dacă produsul există
        if (!product) {
            document.querySelector(".content").innerHTML = `
                <p>Produsul cu ID-ul <strong>${productId}</strong> nu a fost găsit!</p>
            `;
            return;
        }

        // Afișează detaliile produsului
        document.querySelector(".content").innerHTML = `
            <div class="details-text">
                <h2>${product.name}</h2>
                <p>${product.details}</p>
                <p class="price">Preț: ${product.price} Lei</p>
            </div>
        `;
    } catch (error) {
        console.error("A apărut o eroare:", error);
        document.querySelector(".content").innerHTML = `
            <p>Eroare la încărcarea detaliilor produsului. Încercați din nou mai târziu!</p>
        `;
    }
}
