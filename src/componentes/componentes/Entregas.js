import React, { Fragment, useState } from 'react'
import car1 from '../assets/images/empresario.jpg'
import car2 from '../assets/images/exito.jpg'
import car3 from '../assets/images/tienda.jpg'
import folder31 from '../assets/images/bodas/AlejadrayAlvaro/DSC_9010.jpg'
import "../assets/stylos/stylos.scss"

const Entregas = () => {

    return (  // Crear State de Citas


        <Fragment>
            <div className="row no-gutters  text-center align-items-center mb-4">
                <div className="container">
                    <div className="col-sx-12 col-md-12">
                        <h1 className="mb-4"> Entregas - Hecho por talento Mexicano </h1>

                        <div className="parrafos">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row no-gutters  text-center align-items-center mb-4">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12 mb-2">
                            <img src={car1} alt="imagen" className="img-fluid" />
                        </div >
                    </div >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={car2} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4 ">
                            <img src={car3} alt="imagen" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                        <img src={folder31} alt="imagen" className="img-fluid" />
                    </div>
                    </div >
                
                </div>

            </div>

        </Fragment >
    )
}
export default Entregas;