import React from 'react'

function Itemdetail({products}) {
  return (
    <div>

        <section className='container my-4 '>
          <div className='row'>
          <div className="card card-detail my-4 mx-auto">
                  <img src={products.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className='text-center'> <strong>${products.price}</strong></p>
                    <p className="card-text">{products.descripcion}</p>
                    <a href="#" className="mx-auto btn btn-primary">Agregar al carrito</a>
                  </div>
                </div>
          </div>
        </section>
</div>
  )
}

export default Itemdetail