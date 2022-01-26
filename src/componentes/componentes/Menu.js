import React, { Fragment } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/stylos/stylos.scss'
import principa from '../Principal'
import { BrowserRouter as Router, Link } from "react-router-dom";
function Menu() {
    return (
        <Fragment>

        
            <div className="row no-gutters  justify-content-center align-items-center ">
                <Link to="/"><img src={logo} className="logo" alt="" /> </Link >
                <a href={principa}>

                </a>
            </div>
            <div className="mt-4">
       
            </div>


            <nav class="navbar   navbar-expand-lg navbar-light" style={{background:'transparent!important'}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse menu" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto menu">
                        <li className="nav-item dropdown m-4">

                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">Portafolio</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/#"> <Link to="/album/Familiar"> Parejas</Link ></a>
                                <a className="dropdown-item" href="/#">    <Link to="/album/Bautizo">Bautizo</Link ></a>
                                <a className="dropdown-item" href="/#"> <Link to="/album/bodas">Familiar</Link ></a>
                            </div>
                        </li>
                        <li className="nav-item nav active m-4">
                            <Link to="/Testimonios" className="tags">Testimonios</Link >
                        </li>
                        <li className="nav-item m-4">
                            <Link to="/SobreMi" className="tags"   activeStyle={{ color: 'red' }}>Sobre MI </Link >
                        </li>
                        <li className="nav-item m-4">
                            <Link to="/Galeria">Galeria</Link >

                        </li>
                    </ul>

                </div>
            </nav>

        </Fragment>
    )
}

export default Menu;