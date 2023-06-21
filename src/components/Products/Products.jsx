import React, { useState, useEffect, useContext } from 'react'

import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'


export default function Products() {

  const { products, setProducts } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchProducts('bomba').then((resp) => {
      setProducts(resp)
      setLoading(false)
    })

  }, [])
  return (
    (loading && <Loading />) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
      </section>
    )


  )
}
