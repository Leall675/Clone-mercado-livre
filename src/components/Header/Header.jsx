import React from 'react'
import './Header.css'


import SearchBar from '../SearchBar/SearchBar'
import CartButton from '../CartButton/CartButton'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="my-name">Matheus Leal</h1>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  )
}
