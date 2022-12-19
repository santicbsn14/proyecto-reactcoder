import React from 'react'
import {useState, useEffect} from 'react'
import Itemdetail from './Itemdetail';
import "./itemdetail.css";
import {getSingleItem} from '../mockService/firestore'
import {useParams} from 'react-router-dom'
import Loader from '../loaders/Loader'
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
 if(isLoading) return (<div style={{marginTop:'0px', position:'relative', left:'550px'}}> <Loader/></div>
 )
  return (
    <div>
    <Itemdetail products={products} />
  </div>
  )
}

export default ItemDetailContainer