import './ItemCard.css'

export default function ItemCard({ item }) {
    return (
        <div className="card">
            <div className="imgBox">
                <img src={item.images[0]} className="mouse"></img>
            </div>
            <div className="contentBox">
                <h3>{item.title}</h3>
                <h2 className="price">{item.price}</h2>
                <a href="#" className="buy">Ver mas</a>
            </div>
        </div>
    )
}