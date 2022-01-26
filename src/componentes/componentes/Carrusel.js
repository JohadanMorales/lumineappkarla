import React, { Fragment, useState } from 'react'
import car1 from '../assets/images/empresario.jpg'
import car2 from '../assets/images/exito.jpg'
import car3 from '../assets/images/tienda.jpg'
import '../assets/stylos/stylos.scss'
import {  notification } from 'antd';

import { BrowserRouter as Router, Link } from "react-router-dom";
  
const Carrusel =() =>{
    //Declaracion inicial de las tag
    const [cita, actualizarCita] = useState({
        nombre: '',
        email: '',
        telefono: '',
        date: '',
        mensaje: ''
    });

    // Se ejecuta al ejecuta
    const actualizarState = e  => {
        actualizarCita ({
            ...cita,
            [e.target.name]: e.target.value 
        })
    //    console.log("eeeeee "+e.target.name)
    } 

    //Aasignaciònde las etiquetas al ztate cita
    const {nombre, email, telefono, date, mensaje} =  cita;

    const handleSubmit = e => {
        e.preventDefault();
        notification.success({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              placement: 'bottomRight',
              bottom: 50,
              duration: 3,
              rtl: true,
          });
        // Validar
        if(nombre.trim() === '' || email.trim() === ''  || telefono.trim() === ''  || date.trim() === ''  || mensaje.trim() === '' ){
    //    console.log("Hay un dato vacio..."+e.target.value)
       console.log("-------")

            return;
        }
        // Eliminar el mensaje previo 
        
    }
    return (  // Crear State de Citas
    

        <Fragment>
            <hr />
    <div className="container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block  carrusel img-fluid" src={car1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block carrusel img-fluid" src={car2} alt="Second slide " />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block carrusel img-fluid" src={car3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    </div>
            <div className="row no-gutters  justify-content-center align-items-center mb-4">
                <div className="container">
                    <div className="col-sx-12 col-md-12">
                        <h2 className="recuerdo mt-4 mb-4">Siempre habra un recuerdo que te te llene de Felicidad</h2>
                    </div>
                    <div className="col-sx-12 col-md-12">
                            <div className=" row container" >
                                <div className='btn-recuerdos'>
                                    <a href="/#fomularioContacto" className="btn btn-primary historyBtn text-center " >
                                            Quiero conservar mis recuerdos...
                                    </a>
                                </div>  
                            </div>
                
                     </div >
                </div>

            </div>
            <div className="container">
                <div className="row no-gutters  justify-content-center align-items-center " >
                    <div className="col-sx-12 col-md-6">
                        <h3>SOBRE MI-  Karla Moreno </h3><br />
                        <p >
                            Soy una fotografa apaionada con mi trabajo , me encata documentar la vida de la personas a traves de mi camara.
                            Siento la fotografia como el arte de poder transmitir de una manera sincera la vida...

                            <br />
                            
                            <Link to="/SobreMi">Mas sobre mi... </Link >
                        </p>
                    </div>
                    <div className="col-sx-12 col-md-6">
                        <img src={car1}
                            className="img-fluid" alt="Karla Lopez"  />
                    </div>
                </div>
            </div>


            <div className="row no-gutters  bg-color1 mt-4" id="fomularioContacto">
            <div className="container">
                <h3 className="text-center mt-4 mensaje"> Envianos un mensaje</h3>
                <form onSubmit= {handleSubmit} className="mb-3" id="contacto">
                    <div className=" justify-content-center align-items-center mt-4" >
                        <div className="form-row">
                            <div className="col-6">
                                <input type="text" className="form-control m-1  mt-3 p-2" placeholder="Nombre"  name="nombre" onChange={actualizarState} value={nombre}/>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control col-12 m-1 mt-3 p-2" placeholder="E-mail" name="email" onChange={actualizarState} value={email}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-6">
                                <input type="text" className="form-control m-1 mt-3 p-2" placeholder="Telefono"  name="telefono"  onChange={actualizarState} value={telefono}/>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control col-12 m-1 mt-3 p-2" placeholder="Dia de evento" name="date"  onChange={actualizarState} value={date}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 mt-3 ">
                                <textarea className="col-12" name="mensaje" onChange={actualizarState}  placeholder="Mensaje" value={mensaje}>
                                </textarea>
                            </div>
                        </div>
                        <div className="form-row no-gutters">
                            <div className="col-md-3 offset-md-9" style={{display:'flex'}}>
                                <input type="submit" value="Enviar"  className="btn btn-primary historyFelicidad w-100" />
                            </div>
                           
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </Fragment >
    )
}
export default Carrusel;