import './ShoppingCart.css'
import ShoppingCartSVG from './ShoppingCart.svg'

export const ShoppingCart = () => {
  return (
    <div className="ShoppingCart">
      <img src={ShoppingCartSVG} alt="Shopping Cart" />
      <span class="ShoppingCart__counter">10</span>
    </div>
  )
}