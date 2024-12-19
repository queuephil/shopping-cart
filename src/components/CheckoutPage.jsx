import { ProductContext } from '../hooks/products'
import { CartContext } from '../hooks/cart'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import './CheckoutPage.css'

CheckoutCard.propTypes = {
  id: PropTypes.string,
  count: PropTypes.number,
}

function CheckoutCard({ id, count }) {
  const { data } = useContext(ProductContext)
  const item = data.find((item) => item.id == id)

  const { decreaseAmount, increaseAmount, removeItem } = useContext(CartContext)

  return (
    <div className="checkoutCard">
      <img src={item.image} alt="checkout image" />
      <div className="info">
        <div>{item.title}</div>
        <div>{'€ ' + item.price.toFixed(2).toString().replace('.', ',')}</div>
        <div className="amount">
          <button
            className="changeAmount"
            type="button"
            id={id}
            onClick={(e) => decreaseAmount(e.target.id)}
          >
            -
          </button>
          <div>{count}</div>
          <button
            className="changeAmount"
            type="button"
            id={id}
            onClick={(e) => increaseAmount(e.target.id)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="removeItem"
        type="button"
        id={id}
        onClick={(e) => removeItem(e.target.id)}
      >
        Remove
      </button>
    </div>
  )
}

function Summary() {
  const { cart } = useContext(CartContext)
  const { data } = useContext(ProductContext)

  const subtotal = cart.reduce((total, el) => {
    const item = data.find((item) => item.id == el.id)
    return total + el.count * item.price
  }, 0)

  return (
    <div className="summary">
      <div>Subtotal:</div>
      <div>{'€ ' + subtotal.toFixed(2).toString().replace('.', ',')}</div>
      <button type="button" onClick={() => alert('Woohoooo')}>
        Checkout
      </button>
    </div>
  )
}

function CheckoutPage() {
  const { cart } = useContext(CartContext)

  return (
    <div className="page">
      {cart.length > 0 &&
        cart.map((el) => {
          return <CheckoutCard key={el.id} id={el.id} count={el.count} />
        })}

      <Summary />
    </div>
  )
}
export default CheckoutPage
