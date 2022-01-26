import React, { Fragment, useState } from 'react'
import whats from '../assets/images/whats.png'
import '../assets/stylos/stylos.scss'

const WhatsApp = () => {
    return (  
        <Fragment>
            <a href='https://wa.me/524271669812/?text=Hola, me gustaría obtener una cotización sobre tus servicios profesionales'>
                <div className="socialMedia">
                    <img src={whats} alt="imagen" className="img-fluid socialW" />
                </div>
            </a>
        </Fragment >
    )
}
export default WhatsApp;