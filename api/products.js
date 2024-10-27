const URL = "https://670fe590a85f4164ef2c6146.mockapi.io/products";

//modulul care ia toate produsele
//separare diferite functionalitati care pot fi folosite in mai multe fisiere
export async function getAllProducts()
{
    const response = await fetch(URL);
    const products = await response.json();

    return products;
}
export async function getElementById(id)
{
    const response = await fetch(`${URL}/${id}`);
    const product = await response.json();

    return product;
}

export async function addNewProduct(product)
{
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product),
    });
    const newProduct  =response.json();
    return newProduct;
}

export async function updateProduct(product, id)
{
    const response =await  fetch(`${URL}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product),
    });
    const editedProduct = await response.json();
    return editedProduct;
}
export async function deleteProduct(id)
{
    await fetch(`${URL}/${id}`,
        {method: "DELETE"}
    );
}