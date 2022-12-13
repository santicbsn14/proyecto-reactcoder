import React from 'react'
import {useState, useEffect} from 'react'
import getitems from '../mockService/firestore'
import {useParams} from 'react-router-dom'
import Itemlist from './Itemlist'
import Loader from '../loaders/Loader'
import { getitemsByCategory } from '../mockService/firestore'
function ItemListContainer() {
  const [products, setProducts] = useState(null)
  const {idCategory}= useParams()
  async function getitemsAsync(){
    if(!idCategory){
    let respuesta = await getitems();
    setProducts(respuesta)}
    else{
      let respuesta= await  getitemsByCategory(idCategory)
      setProducts(respuesta)
    }
  }
  useEffect(()=>{
      getitemsAsync();
    },
    [idCategory]);

  return (
    <div className='catalogo'>
     {products  ? <Itemlist products={products}/>: <div className='text-center'><Loader/></div>}
     </div>
  )
    
}

export default ItemListContainer
