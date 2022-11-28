import React from 'react'
import {useState} from 'react'

function Itemcount({onAddToCart}) {
    const [count, setCount]= useState(1)
    function sumarCount(){
        setCount(count + 1) 
    }
    function restarCount(){
      if(count> 1)setCount(count - 1) 
    }
  return (
    <div ><button onClick={restarCount}  type="button"className="btn btn-outline-success mx-auto my-1" >-</button>
    <span>{count}</span>
    <button onClick={sumarCount}  type="button"className="btn btn-outline-success mx-auto my-1" >+</button>
    <button onClick={()=>onAddToCart(count)} className="mx-auto btn btn-primary">Agregar al carrito</button></div>
  )
}

export default Itemcount