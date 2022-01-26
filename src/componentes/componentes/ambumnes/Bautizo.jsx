import React, { Fragment } from 'react'
import folder1 from '../../assets/images/nacimientos/NB04.jpg'
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../../assets/stylos/stylos.scss'

function Bautizo() {
    return (
        <Fragment>
        <div className='container'>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="card" style={{ width: 'width: 18rem' }}>
                        <a href="/#" className='card-board' >
                            <img className="card-img-top" src={folder1} alt="Card image cap" />
                            <div className='card-body text-center'>
                                <Link to="/album/MiPrimerRecuerdo">Mi primer recuerdo</Link >
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
    )
}

export default Bautizo;