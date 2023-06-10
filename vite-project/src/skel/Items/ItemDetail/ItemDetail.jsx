import React from 'react';
import '../Items.css';

export default function ItemDetail({ item, closeModal }) {
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.images[0]} alt={item.title} />
                <p>Price: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <p>Rating: {item.rating}</p>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}