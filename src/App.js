import React, { Fragment } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Principal from './componentes/Principal'
import Menu from './componentes/componentes/Menu'
import Carrusel from './componentes/componentes/Carrusel'
import Footer from './componentes/componentes/Footer'
import SobreMi from './componentes/componentes/Sobremi'
import Testimonios from './componentes/componentes/Testimonios'
import Fotografia from './componentes/componentes/Fotografia'
import './componentes/assets/stylos/stylos.scss'
import Entregas from './componentes/componentes/Entregas';
import Bodas from './componentes/componentes/ambumnes/FamiliasCom';
import Familiar from './componentes/componentes/ambumnes/Familiar';
import Galeria from './componentes/componentes/Galeria';
import Bautizo from './componentes/componentes/ambumnes/Bautizo';

//Temporales



import Fe from './componentes/componentes/ambumnes/Familia/Fe'
import AyF from './componentes/componentes/ambumnes/Familia/AyF';
import Lym from './componentes/componentes/ambumnes/Familia/Lym';
import Born from './componentes/componentes/ambumnes/Bautizo/Born';
import AleAlbum from './componentes/componentes/ambumnes/person/AyA';
import Lyly from './componentes/componentes/ambumnes/person/LyA';
import WhatsApp from './componentes/componentes/WhatsApp';

//import './tipograpia/';
function App() {
  return (
    <Router className="row no-gutters">
      <Principal />
      <div className="marginTop">
        <Menu />
      </div>
      <Switch >
        <Route path="/Testimonios">
          <Testimonios />
        </Route >
        <Route path="/SobreMi">
          <SobreMi />
        </Route >
        <Route path="/Entregas">
          <Entregas />
        </Route >
        <Route path="/Galeria">
          <Galeria />
        </Route >
        <Route path="/album/bodas">
          <Bodas />
        </Route >
        <Route path="/album/Familiar">
          <Familiar />
        </Route >
        <Route path="/album/Bautizo">
          <Bautizo />
        </Route >
        {/* Tem */}
        <Route path="/album/FAle">
          <AleAlbum />
        </Route >
        <Route path="/album/FLyly">
          <Lyly />
        </Route >
        <Route path="/album/MiPrimerRecuerdo">
          <Born />
        </Route >
        <Route path="/album/FamiliaElizondo">
          <Fe />
        </Route >
        <Route path="/album/AnahiYSofi">
          <AyF />
        </Route >
        <Route path="/album/LiliyArturo">
          <Lym />
        </Route >
        <Route path="/">
          <Carrusel />
        </Route >
      </Switch >
      <WhatsApp />
      <Footer />

    </Router>
  );
}

export default App;
