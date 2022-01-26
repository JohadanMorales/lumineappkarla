import React, { Fragment } from 'react'

function Footer() {
    return (

        <Fragment>
            {/*   <!-- Footer --> */}
            <footer className="page-footer font-small blue pt-4 mt-4">

                {/*   <!-- Footer Links --> */}
                <div className="container-fluid text-center text-md-left">

                    {/*    <!-- Grid row --> */}
                    <div className="row">

                
                
                        {/*    <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        {/*   <!-- Grid column --> */}
                        <div className=" col-sx-12 col-md-12 mb-md-0 mb-3">

                            {/*   <!-- Links --> */}
                            <h5 className="text-uppercase text-center ">Contacto</h5>
                            <ul className="list-unstyled text-center ">
                                <li>
                                    <a href="#!">Calle las Lomas #36, Lomas de Chapultepec</a>
                                </li>
                                <li>
                                    <a href="#!">E-mail: karla@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#!">55 2641 7987</a>
                                </li>
                             
                            </ul>

                        </div>
                  

                    </div>
                    {/*   <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                     By Karla Moreno 
                </div>
                {/*  <!-- Copyright --> */}

            </footer>
            {/*   <!-- Footer --> */}
        </Fragment >
    )
}
export default Footer;