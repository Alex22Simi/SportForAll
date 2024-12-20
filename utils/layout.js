export function mapProductToCard(product) {
    return `
    <div class="card">
        <div class="info">
            <div class="img">
                <a href="../pages/details.html?id=${product.id}">
                    <img src="${product.imageURL}" alt="${product.name}">
                </a>
            </div>
            <div class="name">
                <a href="../pages/details.html?id=${product.id}">
                    <h4>${product.name}</h4>
                </a>
            </div>
            <div class="price">
                ${product.price} lei
            </div>
        </div>
        <button class="add-to-cart"
            data-productId="${product.id}"
            data-name="${product.name}"
            data-price="${product.price}"
            data-image="${product.imageURL}">
            Adauga in cos
        </button>
    </div>
    `;
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