import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';
import ItemCard from "../ItemCard/ItemCard";
import '../Items.css'

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        let url = 'https://dummyjson.com/products';
        if (category) {
            url += `/category/${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }, [category]);

    useEffect(() => { fetchData(); }, [fetchData]);
    
    return (
        <div className="cards">
            {products.products?.map((product) => (
                <ItemCard key={product.id} item={product}/>
            ))}
        </div>
    )
}
