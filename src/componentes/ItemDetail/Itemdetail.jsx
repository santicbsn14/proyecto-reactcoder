import React from 'react'
import Itemcount from '../count/Itemcount'
import {useContext} from 'react'
import {cartContext} from '../Context/CartContext'

function Itemdetail({products}) {
  const {addToCart} = useContext(cartContext)
  function onAddToCart(count){
    alert(`agregaste ${count} items al carrito`)
    addToCart(products,count)

  }
  return (
    <div>

        <section className='container my-4 '>
          <div className='row'>
          <div className="card card-detail my-4 mx-auto">
                  <img src={products.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className='text-center'> <strong>${products.price}</strong></p>
                    <p className="card-text">{products.descripcion}</p>
                    <Itemcount onAddToCart={onAddToCart}/>
                  </div>
                </div>
          </div>
        </section>
</div>
  )
}

export default Itemdetail