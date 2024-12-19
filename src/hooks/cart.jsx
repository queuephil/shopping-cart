import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (clickedItem) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id == clickedItem)
      if (existingItem) {
        return prev.map((item) =>
          item.id == clickedItem ? { ...item, count: item.count + 1 } : item
        )
      }
      return [...prev, { id: clickedItem, count: 1 }]
    })
  }

  const decreaseAmount = (clickedItem) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === clickedItem ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    )
  }

  const increaseAmount = (clickedItem) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === clickedItem ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const removeItem = (clickedItem) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === clickedItem ? { ...item, count: 0 } : item))
        .filter((item) => item.count > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseAmount, increaseAmount, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
}
