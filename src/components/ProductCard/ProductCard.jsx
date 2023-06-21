import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'

import './ProductCard.css'
import AppContext from '../../context/AppContext'

export default function ProductCard({ data }) {

  const { title, thumbnail, price } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }


  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className="card__image" />

      <div className="card__info">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button
        type="button"
        className="button__add-card"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}
ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired