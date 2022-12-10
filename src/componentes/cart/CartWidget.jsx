import React, {useContext} from 'react'
import {cartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'


function CartWidget() {
  const miContext= useContext(cartContext)
  return (
    <div>
        <form className="d-flex">
        <Link to='/cart'>
    <button type="button"  className="btn btn-outline-dark "  >
        <i className="bi-cart-fill me-1"></i>
        Carrito
        <span className=" badge bg-dark text-white ms-1 rounded-pill">{miContext.itemsincart()}</span>
    </button>
    </Link>
        </form>
</div>
  )
}

export default CartWidget