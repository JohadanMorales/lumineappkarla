import React, { Fragment } from 'react'
import folder1 from '../../../../../src/componentes/assets/images/nacimientos/NB01.jpg'
import folder2 from '../../../../../src/componentes/assets/images/nacimientos/NB02.jpg'
import folder3 from '../../../../../src/componentes/assets/images/nacimientos/NB03.jpg'
import folder4 from '../../../../../src/componentes/assets/images/nacimientos/NB04.jpg'
import folder5 from '../../../../../src/componentes/assets/images/nacimientos/NB05.jpg'
import folder7 from '../../../../../src/componentes/assets/images/nacimientos/NB06.jpg'
import folder8 from '../../../../../src/componentes/assets/images/nacimientos/NB07.jpg'
import folder9 from '../../../../../src/componentes/assets/images/nacimientos/NB08.jpg'
import '../../../assets/stylos/stylos.scss'

function Born() {
    return (
        <Fragment>
            <div className='container'>
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder1} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder2} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder3} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder4} alt="Card image cap" />
                        </div>
                    </div>
                 
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder8} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder7} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder5} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder9} alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Born;