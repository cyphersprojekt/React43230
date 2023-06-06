import { Branding } from './skel/Branding/Branding'
import { NavBar } from './skel/NavBar/NavBar'
import { ShoppingCart } from './skel/ShoppingCart/ShoppingCart'
import {Route, Routes} from 'react-router-dom'

function Constants() {
  return (
    <div>
        <Branding />
        <NavBar />
        <ShoppingCart />
      </div>
  )  
}

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Constants />}/>
        </Routes>
    </div>
  )
}

export default App
