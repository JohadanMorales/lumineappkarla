import React, { Fragment } from 'react'
import '../componentes/assets/stylos/stylos.scss'
import face from '../componentes/assets/images/facebook.png'
import instagram from '../componentes/assets/images/instagram.png'
import twitter from '../componentes/assets/images/twitter.png'
function Principal() {
    return (
        <Fragment>
            <div className="row no-gutters  menuSocialNetwork">
                <nav className="navbar navbar-expand-lg  fixed-top nav justify-content-end no-gutters">
                    <div className="redesSociales ">
                        <ul className="">
                            <li className="bgColor">
                                <a href='https://www.facebook.com/MOHEfografia/?notif_id=1631025601343110&notif_t=page_user_activity&ref=notif'> <img src={face} className="iconosWidth1 "  alt="Facebook"/> </a></li>
                            <li className="bgColor">
                                <a href="https://www.instagram.com/mohe.ph/">
                                    <img src={instagram} className="iconosWidth" alt="instagram"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </Fragment>)
}

export default Principal;