import React from 'react'
import Itemcount from '../count/Itemcount'
import {useContext, useState} from 'react'
import {cartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'
function Itemdetail({products}) {
  const {addToCart} = useContext(cartContext)
  const [isInCart,setisInCart]= useState(false)
  function onAddToCart(count){
    alert(`agregaste ${count} items al carrito`)
    addToCart(products,count)
    setisInCart(count)
  }
  return (
    <div>

        <section className='container my-4 py-4 '>
          <div className='row'>
          <div className="card card-detail my-4 mx-auto">
                  <img src={products.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className='text-center'> <strong>${products.price}</strong></p>
                    <p className="card-text">{products.descripcion}</p>
                    {
                      isInCart?
                      <div>
                     <Link to='/cart'> <button className="mx-3 btn btn-primary">Ir al carrito</button></Link>
                     <Link to='/'><button className="mx-5  btn btn-primary">Seguir comprando</button></Link></div>
                    
                    :<Itemcount onAddToCart={onAddToCart}/>}
                    </div>
                  </div>
  
          </div>
        </section>
</div>
  )
}

export default Itemdetail