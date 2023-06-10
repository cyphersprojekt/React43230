//CategoryListContainer.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';
import ItemCard from "../ItemCard/ItemCard";
import '../Items.css'

export const CategoryListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/products/category/' + category);
        const data = await response.json();
        setProducts(data);
    }, [category]);

    useEffect(() => {fetchData();}, [fetchData]);
    
    return (
        <div className="cards">
            {products.products?.map((product) => {
                return (
                    <ItemCard key={product.id} item={product}/>
                )
            })}
        </div>
    )
}
