export function mapProductToCard(product)
{
    return  `
    <div class="card">
<div class="info">
   <div class="img">
       <img src="${product.imageURL}" alt="">
   </div>
   <div class="name">
       <h4>${product.name}</h4>
   </div>
   <div class="price">
       ${product.price} lei
   </div>
</div>
<button class="add-to-cart">Adauga in cos</button>
</div>
   `
}

export function mapProductToAdminTableRow(product)
{
    return `
    <tr>
                    <td>${product.name}</td>
                    <td>${product.price} lei</td>
                    <td><img src="${product.imageURL}" alt="${product.name}" width="50"></td>
                    <td>${product.details}</td>
                    <td>
                    <button class= "edit-btn" data-productId=${product.id}>Edit</button>
                    </td>

                    <td>
                    <button class = "delete-btn" data-productId=${product.id}>Delete</button>
                    </td>
                </tr>
    `
}