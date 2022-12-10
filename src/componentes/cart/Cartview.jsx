import { useContext } from "react"
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {cartContext} from '../Context/CartContext'
import './cartview.css'
import { createOrder } from "../mockService/firestore"

function Cartview() {
  const {cart, clearItem, priceInCart, removeItem} = useContext(cartContext)
  const navigate = useNavigate()
  async function checkOut(evt){
    const order = {
      buyer: {
        name: 'Santiago',
        email:'santicbsn9@gmail.com',
        phone:'78r8390',
      },
      items: cart,
      total: 0,
      date: new Date(),
    };
    const  orderID= await createOrder(order);
    navigate(`/thankyou/${orderID}`)
  }
  if(cart.length===0) return <div className="row boton-vaciar"><h4 className="col-lg-12 text-center">Que esperas para agregar productos al carrito?</h4><Link to='/'><div type="button" style={{display:'flex', flexDirection:'row', justifyContent:`center`, width:'400px'}}  className=" btn btn-outline-success mx-auto my-1" >Ver los productos de la tienda!</div></Link></div>
  return (
    <div> 
      {cart.map((product)=>{
        return(
          <section className="container my-2" key={product.id} >
            <div className="row">
            <div className="col-lg-2">ID:{product.id}</div>
            <div className="col-lg-2">IMG:<img src={product.img} className="aver card-img-top" alt="..."/></div>
            <div className="col-lg-2">TITULO:{product.title}</div>
            <div className="col-lg-2">PRECIO: <strong>${product.price}</strong></div>
            <div className="col-lg-2">CANTIDAD: <strong>{product.count}</strong></div>
            <button onClick={()=>removeItem(product.id)} style={{width: '50px', height: '50px'}}className="col-lg-1 bg-danger">X</button>
            <hr className='dropdown-divider'></hr>
            </div>
          </section>
        )
      })}
      <div style={{display:'flex', justifyContent:'space-around'}} className="">PRECIO TOTAL: <strong>${priceInCart()}</strong></div>
      <div className="boton-vaciar">
        <Link to='/'>
      <button   className="  text-center btn btn-outline-success mx-2  ">SEGUIR COMPRANDO</button>
      </Link>
      <button onClick={clearItem}  className="  btn-outline-danger btn mx-2">VACIAR CARRITO</button>
      <button onClick={checkOut}   className=" text-center btn btn-outline-success mx-2 ">FINALIZAR COMPRA</button>
      </div>
    </div>
  )
}

export default Cartview