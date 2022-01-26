import React, { Fragment } from 'react'
import folder1 from '../../assets/images/bodas/aya.jpg'
import folder2 from '../../assets/images/bodas/lya.jpg'
import folder3 from '../../assets/images/familia/flym.jpg'
import '../../assets/stylos/stylos.scss'
import { BrowserRouter as Router, Link } from "react-router-dom";
function Familiar() {
    return (
        <Fragment>
            <div className='container'>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder1} alt="Card image cap" />
                            <div className='card-body text-center'>
                                <Link to="/album/FAle">Alejandra y Alvaro</Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <a href="/#" className='card-board' >
                                <img className="card-img-top" src={folder2} alt="Card image cap" />
                                <div className="card-body text-center">
                                    <Link to="/album/FLyly">Lili y Arturo</Link >

                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Familiar;