import React, { Fragment } from 'react'
import folder1 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9010.jpg'
import folder2 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9055.jpg'
import folder3 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9116.jpg'
import folder4 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9139.jpg'
import folder5 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9229.jpg'
import folder7 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9386.jpg'
import folder8 from '../../../../../src/componentes/assets/images/bodas/AlejadrayAlvaro/DSC_9393.jpg'
import '../../../assets/stylos/stylos.scss'

function AyA() {
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
                 
                    <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder8} alt="Card image cap" />
                        </div>
                    </div>
                       <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder7} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: 'width: 18rem' }}>
                            <img className="card-img-top" src={folder5} alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AyA;