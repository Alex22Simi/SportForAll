import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";



const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";
const productContainer = document.querySelector(".products");

document.addEventListener("DOMContentLoaded",displayProducts);

async function displayProducts(){
    const products = await getAllProducts();

    productContainer.innerHTML = products.map(
       mapProductToCard).join("");
       const addToCartButtons = document.querySelectorAll(".add-to-chart");
       console.log(addToCartButtons);
       addToCartButtons.forEach((button)=>{
         button.addEventListener("click",() => {
            
          const productId = button.getAttribute("data-productId");
          let cart = JSON.parse(localStorage.getItem("cart")) || {};

          if(cart[productId])
          {
            cart[productid].quantity++;
          }else{
            cart[productId] = {quantity: 1};
          }

          localStorage.setItem("cart",JSON.stringify(cart));
          
    
    });

         });
          
 }

  

