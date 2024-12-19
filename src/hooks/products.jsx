import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      mode: 'cors',
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error')
        }
        return response.json()
      })
      .then((response) => setData(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  )
}

ProductContextProvider.propTypes = {
  children: PropTypes.node,
}
