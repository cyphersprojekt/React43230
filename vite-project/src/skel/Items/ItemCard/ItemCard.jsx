import React, { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../Items.css';

export default function ItemCard({ item }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="card">
                <div className="card_image"><img src={item.images[0]} alt={item.title}></img></div>
                <div className="card_content">
                    <p className="card_text">{item.title}</p>
                    <p className="card_text">{item.description}</p>
                    <button className="btn card_btn" onClick={openModal}>Read More</button>
                </div>
            </div>

            {showModal && (
                <ItemDetail item={item} closeModal={closeModal} />
            )}
        </>
    );
}
