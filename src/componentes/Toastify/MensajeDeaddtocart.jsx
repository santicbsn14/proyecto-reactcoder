import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MensajeDeaddtocart(){
    const notify = () => toast("Haz agregado un producto al carrito!");

    return (
      <div>
        <button className='mx-auto btn btn-primary' onClick={notify}>Agregar al carrito</button>
        <ToastContainer  />
      </div>
    );
  }

export default MensajeDeaddtocart