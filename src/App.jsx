import React from 'react'

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Provider from './context/Provider'
import Cart from './components/cart/Cart'



export default function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  )
}
