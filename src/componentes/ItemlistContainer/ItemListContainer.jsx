import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import getitems from '../mockService/mockservice'
import {useParams} from 'react-router-dom'
function ItemListContainer() {
  const [products, setProducts] = useState([])
  const {idCategory}= useParams()
  async function getitemsAsync(){
    let respuesta = await getitems(idCategory);
    setProducts(respuesta)
  }
  useEffect(
    ()=>{
      getitemsAsync();
    },
    [idCategory]
  );
  return (
    <div>
        {
        products.map((product)=>{
          return (
            <Item
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            description={product.descripcion}/>
          );
        })
        }
    </div>
  )
}

export default ItemListContainer
