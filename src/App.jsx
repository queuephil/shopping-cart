import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { CartContext } from './hooks/cart'
import { useContext } from 'react'
import { ShoppingCart, Feather } from 'lucide-react'

function App() {
  const { cart } = useContext(CartContext)
  return (
    <>
      <nav>
        <Link to="/">
          <Feather />
        </Link>
        <Link to="/">Shop</Link>
        <Link to="checkout">
          <div className="cartIcon">
            <ShoppingCart></ShoppingCart>
            <div>{cart.reduce((total, item) => total + item.count, 0)}</div>
          </div>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}
export default App
