import PropTypes from 'prop-types'
import './Cards.css'
import { Link } from 'react-router-dom'

AddToBasket.propTypes = {
  id: PropTypes.number,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
}
function AddToBasket(props) {
  function handleClick(e) {
    props.addToCart(e.target.id)
  }

  return (
    <button id={props.id} type="button" onClick={handleClick}>
      Add to Basket
    </button>
  )
}

BuyNow.propTypes = {
  id: PropTypes.number,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
}
function BuyNow(props) {
  function handleClick(e) {
    props.addToCart(e.target.id)
  }

  return (
    <Link to="/checkout">
      <button id={props.id} onClick={handleClick} type="button">
        Buy Now
      </button>
    </Link>
  )
}

Cards.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}
function Cards(props) {
  return (
    <div className="card" id={props.id}>
      <img src={props.image} alt="product image" />
      <div className="title">{props.title}</div>
      <div>{'€ ' + props.price.toFixed(2).toString().replace('.', ',')}</div>
      <AddToBasket {...props} />
      <BuyNow {...props} />
    </div>
  )
}

export default Cards
