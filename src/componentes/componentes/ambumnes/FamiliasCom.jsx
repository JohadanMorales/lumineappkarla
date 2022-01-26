import React, { Fragment } from 'react'
import folder1 from '../../assets/images/familia/AnahiSofi/A_S1.jpg'
import folder2 from '../../assets/images/familia/FamiliaElizondo/FamE1.jpg'
import folder3 from '../../assets/images/familia/LupitaMemo/L_M2.jpg'
import '../../assets/stylos/stylos.scss'
import { BrowserRouter as Router, Link } from "react-router-dom";
function FamiliasCom() {
    return (
        <Fragment>
            <div className='container'>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <a href="/#" className='card-board' >
                                <img className="card-img-top" src={folder1} alt="Card image cap" />
                                <div className='card-body text-center'>
                                    <Link to="/album/AnahiYSofi">Anahí y Sofi</Link >
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"  style={{ width: 'width: 18rem' }}>
                            <a href="/#"  className='card-board' >
                                <img className="card-img-top" src={folder2} alt="Card image cap" />
                                <div className="card-body text-center">
                                    <Link to="/album/FamiliaElizondo">Familia Elizondo</Link >
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"  style={{ width: 'width: 18rem' }}>
                            <a href="/#"  className='card-board' >
                                <img className="card-img-top" src={folder3} alt="Card image cap" />
                                <div className="card-body text-center">
                                    <Link to="/album/LiliyArturo">Lili y Arturo</Link >
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FamiliasCom;