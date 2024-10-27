fetch('https://670fe590a85f4164ef2c6146.mockapi.io/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            // Creează și adaugă fiecare card de produs în DOM
            const productCard = document.createElement('div');
            productCard.classList.add('card');
            productCard.innerHTML = `
                <img src="${product.imageURL}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price} lei</p>
                <button>ADAUGA IN COS!</button>
            `;
            document.querySelector('.products').appendChild(productCard);
        });
    })
    .catch(error => console.error('Eroare la încărcarea produselor:', error));
