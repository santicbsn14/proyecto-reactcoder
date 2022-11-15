import React from 'react'
import {useState, useEffect} from 'react'
import "./itemdetail.css";
import {getSingleItem} from '../mockService/mockservice'
import {useParams} from 'react-router-dom'
function ItemDetailContainer() {
  const {id}= useParams()
  const [products, setProducts] = useState([])
 async function getitemsAsync(){
  let respuesta = await getSingleItem(id);
  setProducts(respuesta)
 }
 useEffect(()=>{
  getitemsAsync();
 }, []);
  return (
    <div>
        {
        products.map((product)=>{
          return (
            <section className='container my-4 '>
              <div className='row'>
              <div className="card card-detail my-4 mx-auto">
                      <img src={product.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                        <a href="#" className="mx-auto btn btn-primary">Agregar al carrito</a>
                      </div>
                    </div>
              </div>
            </section>
          )
        })
        }
    </div>
  )
}

export default ItemDetailContainer