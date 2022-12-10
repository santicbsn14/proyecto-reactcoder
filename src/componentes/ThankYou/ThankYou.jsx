import React from 'react'
import {useState, useEffect} from 'react'
import {getOrderItem} from '../mockService/firestore'
import {useParams} from 'react-router-dom'
import "../ItemDetail/itemdetail.css";
function ThankYou() {
  const {idOrder} = useParams()
  const [isLoading, setisLoading]= useState(true)
  const [order, setOrder] = useState([])
  async function getitemsAsync(){
    getOrderItem(idOrder).then(respuesta=>{
    setOrder(respuesta)
  setisLoading(false)})
   }
   useEffect(()=>{
    getitemsAsync();
   }, [idOrder]);
   if(isLoading) return (<div className="loadingio-spinner-interwind-lu6je3gk35e "><div className="ldio-7uip3qwc579">
 <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
 </div></div>
 )
  return (
    <div>
    <div>Gracias por tu compra, tu id de compra es  {order.id}</div>
    <div>Enviaremos la informacion de tu pedido a tu email: {order.buyer.email}</div>
    </div>
    
  )
}

export default ThankYou