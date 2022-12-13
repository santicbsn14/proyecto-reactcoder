import React from 'react'
import "./NavBaR.css";
import {Link} from 'react-router-dom'
import CartWidget from '../cart/CartWidget';
import ItemListContainer from '../ItemlistContainer/ItemListContainer';
function NavBar() {
  return (
    <div className='menuNav'>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to='/' element={<ItemListContainer/>}><img alt='logopagina' className='loguito'
              src={require('../imagenes/logoLaGran.jpg')}
              /></Link>
            <div className="container px-4 px-lg-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                 <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" >
                        <li className="nav-item"><Link to='/' className='nav-link'>Inicio</Link></li>
                        <li className="nav-item dropdown navegacionCategorias">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Todos los productos</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to='/category/frutosSecos' className="dropdown-item" >Frutos Secos</Link></li>
                                <li><Link to='/category/harinas'  className="dropdown-item" >Harinas</Link></li>
                                <li><Link to='/category/semillas' className="dropdown-item" >semillas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link class="nav-link" to="/contacto">Contacto</Link></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar