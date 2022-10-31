import React from 'react'
import CartWidget from './CartWidget';
import "./NavBaR.css";
function NavBar() {
  return (
    <div className='menuNav'>
                        <img className='loguito'
              src={require('../imagenes/logoLaGran.jpg')}
              />
      <h2 className='titulo' >La Gran Nuez</h2>
        <ul className='ulNav'>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href="#">Todos los Productos</a>
            </li>
            <li>
              <a href="#">Más Vendidos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <CartWidget />
            </li>
        </ul>
    </div>
  )
}

export default NavBar