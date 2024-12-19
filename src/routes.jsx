import App from './App'
import ErrorPage from './components/ErrorPage'
import ShopPage from './components/ShopPage'
import CheckoutPage from './components/CheckoutPage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ShopPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]

export default routes
