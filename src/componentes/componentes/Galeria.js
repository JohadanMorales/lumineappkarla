import React, { Fragment, useState } from 'react'
import car1 from '../assets/images/empresario.jpg'
import car2 from '../assets/images/exito.jpg'
import car3 from '../assets/images/tienda.jpg'
import folder1 from '../assets/images/familia/AnahiSofi/A_S1.jpg'
import folder2 from '../assets/images/familia/FamiliaElizondo/FamE1.jpg'
import folder3 from '../assets/images/familia/LupitaMemo/L_M1.jpg'
import "../assets/stylos/stylos.scss"

const Galeria = () => {

    return (  // Crear State de Citas


        <Fragment>
            <div className="row no-gutters  text-center align-items-center mb-4 mt-4">
                <div className="container">
                <h1 className="mb-4"> Galeria</h1>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={car2} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4 ">
                            <img src={folder2} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={car1} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={folder1} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={folder3} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4 ">
                            <img src={car3} alt="imagen" className="img-fluid" />
                        </div>
                       
               
             
                    </div >
                </div>

            </div>

        </Fragment >
    )
}
export default Galeria;