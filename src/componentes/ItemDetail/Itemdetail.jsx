import React from 'react'
import Itemcount from '../count/Itemcount'
import {useContext} from 'react'
import {cartContext} from '../Context/CartContext'

function Itemdetail({product}) {
  const {addToCart} = useContext(cartContext)
  function onAddToCart(count){
    alert('agregaste ${count} items al carrito')
    addToCart(product,count)

  }
  return (
    <div>

        <section className='container my-4 '>
          <div className='row'>
          <div className="card card-detail my-4 mx-auto">
                  <img src={product.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className='text-center'> <strong>${product.price}</strong></p>
                    <p className="card-text">{product.descripcion}</p>
                    <Itemcount onAddToCart={onAddToCart}/>
                    <a href="#" onClick={onAddToCart} className="mx-auto btn btn-primary">Agregar al carrito</a>
                  </div>
                </div>
          </div>
        </section>
</div>
  )
}

export default Itemdetail