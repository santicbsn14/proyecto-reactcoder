import React from 'react'
import "./item.css";
import {Link} from 'react-router-dom'

function Item(props) {
  const urldetail= `/detail/${props.id}`
  
  return (
<div className='col col-mb-6 col-sm-12 mx-1 itemssm  mb-5' >
<div className="card h-100"> 
  <img src={props.img} style={{width:'286px', height:'190px'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='card-body p-4' style={{top: '0.5rem', right: '0.5rem'}}>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">${props.price}</p>
    </div>
    <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>

    <Link to={urldetail} >
    <button type="button"className="text-center btn btn-outline-success mx-auto my-1" >Ver Producto</button>
    </Link>
    </div>
</div>
</div>
</div>
  )
}

export default Item