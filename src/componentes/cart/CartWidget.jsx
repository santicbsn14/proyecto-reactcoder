import React, {useContext} from 'react'
import {cartContext} from '../Context/CartContext'


function CartWidget() {
  const miContext= useContext(cartContext)
  return (
    <div>
        <form className="d-flex">
    <button type="button"  className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="bi-cart-fill me-1"></i>
        Carrito
        <span className=" badge bg-dark text-white ms-1 rounded-pill">{miContext.itemsincart()}</span>
    </button>
        </form>
</div>
  )
}

export default CartWidget