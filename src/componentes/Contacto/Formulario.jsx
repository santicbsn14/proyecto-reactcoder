import React from 'react'
import emailjs from '@emailjs/browser'
import { useState} from 'react'

function Formulario() {
  const [valuebtn,setvaluebtn]=useState('Enviar mensaje')
  emailjs.init('hRSiJamaLq6Y7oKoj');
 const sendEmail=(event)=>{
  event.preventDefault();
  let newvaluebtn ='Enviando...'
  setvaluebtn(newvaluebtn)
  console.log('ACA ESTOY')
  emailjs.sendForm('service_ii2vcfe','template_k6x5n0i',event.target)
  .then((response)=>{ setvaluebtn(valuebtn)
     console.log(response)})
  .catch(err=>  console.log(err))
 }
  return (
    <div>
      <main className="mainContact">

    <section className="sectioncon container-fluid">
        <div className="row">
        <div className="datosUbicacion col-lg-5 col-md-12 col-sm-12 ">
          <h2 >Contactanos</h2>
          <h6>Pellegrini 476,B2900 DMJ, Provincia BS AS, Argentina</h6>
          <h6>0336 445-4540</h6>
          <iframe className="mapaUbi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.276150747003!2d-60.223823485130204!3d-33.337734599121696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b767855bb456eb%3A0x76b58e866dc3ba09!2sClub%20Belgrano%20San%20Nicolas!5e0!3m2!1ses-419!2sar!4v1651008507071!5m2!1ses-419!2sar" width="300" height="250" style={{border:'0px'}} loading="lazy" ></iframe>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 my-3">
          <form id="form" className="row  formularioCon" onSubmit={sendEmail}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <label 
               className="form-label">Nombre y apellido</label>
              <input type="text" className="form-control"  name="name" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <label  className="form-label" >Email</label>
              <input type= "email" className="form-control" name="email" />
              <b id="email"></b>
            </div>
            <div className="col-6 col-md-12 col-sm-12">
              <label  className="form-label">Telefono</label>
              <input type="number" name="phone" className="form-control" id="inputAddress" />
            </div>
            <div className="col-6 col-md-12 col-sm-12">
              <label  className="form-label">Provincia</label>
              <input type="text" name="provincia" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12 col-md-12 col-sm-12">
              <label  className="form-label">Localidad</label>
              <input type="text" name="localidad" className="form-control" id="inputAddress2" />
            </div>
            <div className="col-12 col-md-12 col-sm-12 my-1">
              <label  className="form-label">Mensaje</label>
              <input type="text" name="message" className="form-control message" id="inputAddress2" />
            </div>
            <div className="col-12 col-md-12 col-sm-12">
              <input type="submit" id="button" className="btn" value={valuebtn} style={{backgroundColor:'green'}}/>
            </div>
          </form>
        </div>
      </div>
      </section>
    </main>

    </div>
  )
}

export default Formulario