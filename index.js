import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";



const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";
const productContainer = document.querySelector(".products");

document.addEventListener("DOMContentLoaded",displayProducts);

async function displayProducts(){
    const products = await getAllProducts();

    productContainer.innerHTML = products.map(
       mapProductToCard).join("");
       const addToCartButtons = document.querySelectorAll(".add-to-cart");
       console.log(addToCartButtons);
       addToCartButtons.forEach((button)=>{
         button.addEventListener("click",() => {
            
          const productId = button.getAttribute("data-productId");
          const name = button.getAttribute("data-name");
          const price = button.getAttribute("data-price");
          const imageURL = button.getAttribute("data-image");


          let cart = JSON.parse(localStorage.getItem("cart")) || {};

          if(cart[productId])
          {
            cart[productId].quantity++;
          }else{
            cart[productId] = {quantity: 1,
               price: Number(price),
               image: imageURL,
               name: name,
            };
          }

          localStorage.setItem("cart",JSON.stringify(cart));

    
    });

         });
          
 }

  

