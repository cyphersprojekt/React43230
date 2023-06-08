import { Branding } from './skel/Branding/Branding'
import { NavBar } from './skel/NavBar/NavBar'
import { ShoppingCart } from './skel/ShoppingCart/ShoppingCart'
import { ItemListContainer } from './skel/Items/ItemListContainer/ItemListContainer'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to={`/`}><Branding/></Link>
        <NavBar />
        <Link to={`/cart`}><ShoppingCart /></Link>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>
      </Router>
        
    </div>
  )
}

export default App
