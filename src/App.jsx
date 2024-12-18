// import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to="homepage">homepage</Link>
        <Link to="shop">shop</Link>
        <Link to="checkout">checkout</Link>
      </nav>
      <Outlet />
    </>
  )
}
export default App
// Comp: nav bar
//  Comp: cart icon with number that increases
//  page: home
//  page: shop
//  page: checkout
//  utils: https://fakestoreapi.com/

// use prop names
// use tests
// style with css modules and icon components
