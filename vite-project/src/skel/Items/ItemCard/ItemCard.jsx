import '../Items.css'

export default function ItemCard({ item }) {
    return (
        <div class="card">
        <div class="card_image"><img src={item.images[0]}></img>
        </div>
        <div class="card_content">
          <p class="card_text">{item.title}</p>
          <p class="card_text">{item.description}</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    )
}