// import fetch from 'node-fetch';

export async function getAllAllProducts() {
    return await fetch('https://dummyjson.com/products');
}

export async function getAllCategoryProducts(category) {
    const response = await fetch(`https://dummyjson.com/products/${category}`);
    const data = await response.json();
    return data;
}