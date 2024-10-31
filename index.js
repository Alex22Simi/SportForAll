import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";



const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";
const productContainer = document.querySelector(".products");

document.addEventListener("DOMContentLoaded", displayProducts);

async function displayProducts() {
    const products = await getAllProducts();

    productContainer.innerHTML = products.map(mapProductToCard).join("");
    
    // Adăugăm evenimentele pe butoanele de adăugare în coș
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Previne navigarea către pagina de detalii
            
            const productId = button.getAttribute("data-productId");
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");
            const imageURL = button.getAttribute("data-image");

            // Adăugăm produsul în coș
            let cart = JSON.parse(localStorage.getItem("cart")) || {};

            if (cart[productId]) {
                cart[productId].quantity++;
            } else {
                cart[productId] = {
                    quantity: 1,
                    price: Number(price),
                    image: imageURL,
                    name: name,
                };
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
}

  

