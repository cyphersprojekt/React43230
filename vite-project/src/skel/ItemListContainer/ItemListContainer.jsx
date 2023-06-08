import { useState, useEffect, useCallback } from "react";
import ItemCard from "../ItemCard/ItemCard";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
    }, []);

    useEffect(() => {fetchData();}, [fetchData]);
    return (
        <div>
            {products.products?.map((product) => {
                return (
                    <ItemCard key={product.id} item={product}/>
                )
            })
        }
        </div>
    )
}
