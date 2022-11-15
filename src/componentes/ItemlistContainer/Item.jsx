import React from 'react'
import "./item.css";
import {Link} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetail/Itemdetailcontainer';
function Item(props) {
  const urldetail= `/detail/${props.id}`
  return (
<div className="card my-4 mx-auto">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">${props.price}</p>
    <button href="#" className="mx-auto btn btn-primary">Agregar al carrito</button>
    <Link to={urldetail} element={<ItemDetailContainer/>}>
    <button type="button"className="btn btn-outline-success mx-auto my-1" >Ver Producto</button>
    </Link>

  </div>
</div>
  )
}

export default Item