import React from 'react'
import {useState, useEffect} from 'react'
import Itemdetail from './Itemdetail';
import "./itemdetail.css";
import {getSingleItem} from '../mockService/firestore'
import {useParams} from 'react-router-dom'
function ItemDetailContainer() {
  const {id}= useParams()
  const [isLoading, setisLoading]= useState(true)
  const [products, setProducts] = useState([])
 async function getitemsAsync(){
  getSingleItem(id).then(respuesta=>{
  setProducts(respuesta)
setisLoading(false)})
 }
 useEffect(()=>{
  getitemsAsync();
 }, [id]);
 if(isLoading) return (<div className="loadingio-spinner-interwind-lu6je3gk35e "><div className="ldio-7uip3qwc579">
 <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
 </div></div>
 )
  return (
    <div>
    <Itemdetail products={products} />
  </div>
  )
}

export default ItemDetailContainer