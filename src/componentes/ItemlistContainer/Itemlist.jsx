import React from 'react'
import Item from './Item'

function Itemlist({products}) {
  return (
    <div className=' row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center' style={{margin:'0px'}}>
        {products.map((product)=>{
            return(
                <Item
                key={product.id}
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                category={product.category}
                />
            )
        })}
    </div>
  )
}

export default Itemlist