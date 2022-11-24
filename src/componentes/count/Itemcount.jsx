import React from 'react'
import {useState} from 'react'

function Itemcount() {
    const [count, setCount]= useState(0)
    function sumarCount(){
        setCount(count + 1) 
    }
    function restarCount(){
        setCount(count - 1) 
    }
  return (
    <div ><button onClick={restarCount}  type="button"className="btn btn-outline-success mx-auto my-1" >-</button>
    <span>{count}</span>
    <button onClick={sumarCount}  type="button"className="btn btn-outline-success mx-auto my-1" >+</button></div>
  )
}

export default Itemcount