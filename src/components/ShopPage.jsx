import Cards from './Cards'
import './ShopPage.css'
import { CartContext } from '../hooks/cart'
import { ProductContext } from '../hooks/products'
import { useContext } from 'react'

function ShopPage() {
  const { data } = useContext(ProductContext)
  const { cart, addToCart } = useContext(CartContext)

  return (
    <div className="page">
      <div className="products">
        {data.map((el) => (
          <Cards key={el.id} {...el} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  )
}
export default ShopPage
