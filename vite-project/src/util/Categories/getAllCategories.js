import fetch from 'node-fetch';

export default async function getAllCategories() {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
}