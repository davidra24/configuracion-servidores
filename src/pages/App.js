import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './inicio/Inicio';
import LinuxServer from './linuxServer/LinuxServer';
import WindowsServer from './windowsServer/WindowsServer';
import AcercaDe from '../pages/about/AcercaDe';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandPointDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHome
} from '@fortawesome/free-solid-svg-icons';

import { faWindows, faLinux, faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHandPointDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHome,
  faWindows,
  faLinux,
  faFacebookSquare, 
  faTwitterSquare, 
  faInstagram 
);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/windows" component={WindowsServer} />
        <Route path="/linux" component={LinuxServer} />
        <Route path="/about" component={AcercaDe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
