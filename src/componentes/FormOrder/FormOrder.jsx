import React from 'react'
import { useState } from 'react'

function FormOrder(props) {
    const [data, setdata] = useState({name:'', email:'', phone:''})
    function onInputChange(evt){
        let datosdecompra= evt.target.name
        let valordatos = evt.target.value
        let newdata = {...data}
        newdata[datosdecompra]= valordatos
        setdata(newdata)
    }
    function onSumbit(evt){
        evt.preventDefault()
        props.onSumbit(evt,data)
    }
  return (
    <div>    <form onSubmit={onSumbit} className=" col-lg-8 row g-3 formulario mx-2" style={{width:'500px'}}>
    <h4>Colocar datos del comprador</h4>
    <p>¡Obtendra una respuesta en la direccion del correo electronico que ingrese!</p>
    <div className="col-md-6">
      <label htmlFor='name' className="form-label">Nombre</label>
      <input value={data.name} name='name' type="text"  className="form-control" onChange={onInputChange} id="inputEmail4"/>
    </div>
    <div className="col-md-6">
      <label htmlFor='email'  className="form-label">Email</label>
      <input value={data.email} name='email' type="email" onChange={onInputChange} className="form-control" id="inputPassword4"/>
    </div>
    <div className="col-md-6">
      <label htmlFor='phone' className="form-label">Telefono</label>
      <input value={data.phone} name='phone' type="number" className="form-control"  onChange={onInputChange} id="inputPassword4"/>
    </div>
    <div className="col-12">
      <label htmlFor='nota' className="form-label">Nota o sugerencia!</label>
      <input type="text" name='nota' className="form-control"  onChange={onInputChange} style={{height: '80px'}} id="inputAddress2"/>
    </div>
    <div className="col-12">
    <button onClick={()=>props.onSubmit(data)}   className=" text-center btn btn-outline-success mx-2 ">FINALIZAR COMPRA</button>
    </div>
  </form></div>
  )
}

export default FormOrder