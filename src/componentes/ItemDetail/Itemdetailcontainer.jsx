import React from 'react'
import {useState, useEffect} from 'react'
import Itemdetail from './Itemdetail';
import "./itemdetail.css";
import {getSingleItem} from '../mockService/mockservice'
import {useParams} from 'react-router-dom'
function ItemDetailContainer() {
  const {id}= useParams()
  const [products, setProducts] = useState([])
  console.log(products)
 async function getitemsAsync(){
  let respuesta = await getSingleItem(id);
  setProducts(respuesta)
 }
 useEffect(()=>{
  getitemsAsync();
 }, [id]);
  return (
    <div>
    <Itemdetail products={products} />
  </div>
  )
}

export default ItemDetailContainer