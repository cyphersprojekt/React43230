// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../../util/Categories/getAllCategories';
import { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'
export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
    }, []);

    useEffect(() => {fetchData();}, [fetchData]);

    return (
        <div>
            <nav className='navBar'>
                {categories?.map((category) => {
                    return (
                        <Link key={category} to={`/category/${category}`}>{category}</Link>
                    )
                })
                }
            </nav>
        </div>
    )
}