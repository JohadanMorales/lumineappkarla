import React, { Fragment, useState } from 'react'
import car1 from '../assets/images/empresario.jpg'
import car2 from '../assets/images/exito.jpg'
import car3 from '../assets/images/tienda.jpg'
import "../assets/stylos/stylos.scss"

const Fotografia = () => {

    return (  // Crear State de Citas


        <Fragment>
            <div className="row no-gutters  text-center align-items-center mb-4">
                <div className="container">
                    <div className="col-md-12">
                        <span className="testimonios mb-4 mt-4 album ">Alejandro & Simon</span>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={car1} className="img-fluid img-thumbnail"/>
                            </div>
                            <div className="col-lg-4">
                                <img src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div><div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div><div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                            <div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div><div className="col-lg-4">
                                <img  src={car1} className="img-fluid img-thumbnail" />
                            </div>
                         </div>
                    </div>
                </div>
            </div>


        </Fragment >
    )
}
export default Fotografia;