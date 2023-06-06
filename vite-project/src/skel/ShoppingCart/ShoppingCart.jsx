import './ShoppingCart.css'
import ShoppingCartSVG from './ShoppingCart.svg'
import { Link } from 'react-router-dom'

export const ShoppingCart = () => {
  return (
    <div className="ShoppingCart">
      <Link to={`/cart`}><img src={ShoppingCartSVG} alt="Shopping Cart" /></Link>
      <span className="ShoppingCart__counter">10</span>
    </div>
  )
}