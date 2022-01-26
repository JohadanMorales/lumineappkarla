import React, { Fragment } from 'react'
import folder1 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima.jpg'
import folder2 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima1.jpg'
import folder3 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima3.jpg'
import folder4 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima12.jpg'
import folder5 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima22.jpg'
import folder6 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima23.jpg'
import folder7 from '../../../../../src/componentes/assets/images/bodas/Liliyarturo/ima24.jpg'

import '../../../assets/stylos/stylos.scss'

function LyA() {
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
                            <img className="card-img-top" src={folder6} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder4} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder7} alt="Card image cap" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default LyA;