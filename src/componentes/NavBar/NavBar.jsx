import React from 'react'
import "./NavBaR.css";
import {Link, link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='menuNav'>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img className='loguito'
              src={require('../imagenes/logoLaGran.jpg')}
              />
            <div className="container px-4 px-lg-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                 <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" >
                        <li className="nav-item"><Link to='/'>Inicio</Link></li>
                        <li className="nav-item dropdown navegacionCategorias">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Todos los productos</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" id="frutossecos">Frutos Secos</Link></li>
                                <li><Link className="dropdown-item" id="harinas">Harinas</Link></li>
                                <li><Link className="dropdown-item" id="semillas">semillas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link class="nav-link" to="contacto.html">Contacto</Link></li>
                    </ul> 
                    <form className="d-flex">
                        <button id="mostrarcarrito" type="button" onclick="mostrarCarrito()" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi-cart-fill me-1"></i>
                            Carrito
                            <span className=" badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar