import React, { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'



export default function SearchBar() {

  const { setProducts } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')


  const handleSearch = async (e) => {
    e.preventDefault()

    const products = await fetchProducts(searchValue)
    setProducts(products)

    setSearchValue('')
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
        className="search__input"
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}
