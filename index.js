import { getAllProducts } from "./api/products";
import { mapProductToCard } from "./utils/layout";



const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";
const productContainer = document.querySelector(".products");

document.addEventListener("DOMContentLoaded",displayProducts);

async function displayProducts(){
    const products = await getAllProducts();

    productsContainer.innerHTML = products.map(
       mapProductToCard).join("");
    }

