import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import getitems from '../mockService/mockservice'
function ItemListContainer() {
  const [products, setProducts] = useState([])
  useEffect(
    ()=>{
      getitems().then((respuestadatos)=>{
        setProducts(respuestadatos);
      });
    },
    []
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
          )
        })
        }
    </div>
  )
}

export default ItemListContainer
