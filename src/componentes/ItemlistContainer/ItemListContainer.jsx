import React from 'react'
import Item from './Item'
function ItemListContainer() {
  return (
    <div>
        <h1></h1>
        <Item title="remera" price={4599} />
        <Item title="Short" price={3598} />
        <Item title="Short de baño" price={3799} />
    </div>
  )
}

export default ItemListContainer
