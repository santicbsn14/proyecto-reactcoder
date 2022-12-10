import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>         
      <footer className="py-5  bg-dark">
    <div className="container">
        <div className="row">
        <div className="col-lg-4">
            <img src={require('../imagenes/logoLaGran.jpg')} alt="logoLOcal" className='loguito'/>
        </div>
        <div className="col-lg-4">
            <p className="text-success">¡Encontranos en calle Bolivar 85!</p>
            <p className="text-success"><a className="text-success" href="https://goo.gl/maps/BSp8jTcLebUmJDpE7">Ver ubicacion</a></p>
            <p className="text-success">Horarios de atencion: Lunes a Viernes de 09:00hs a 18:00hs y Sabados de 9:00hs a 13:00hs</p>
        </div>
        <div className="col-lg-4">
            <p className="text-success">Encontranos en nuestras redes sociales:</p>

        </div>
    </div>
    </div>
</footer>
</div>
  )
}

export default Footer