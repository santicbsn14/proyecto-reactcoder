import React from 'react'
import "./NavBaR.css";
function CartWidget (props) {
  return (
    <div>
                  <img className='carrito'
              src={require('../imagenes/cartlogo.png')}
              />
    </div>
  )
}

export default CartWidget