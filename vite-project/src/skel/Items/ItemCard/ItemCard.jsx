import '../Items.css'

export default function ItemCard({ item }) {
    return (
        <div className="card">
        <div className="card_image"><img src={item.images[0]}></img>
        </div>
        <div className="card_content">
          <p className="card_text">{item.title}</p>
          <p className="card_text">{item.description}</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    )
}