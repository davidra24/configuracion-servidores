import React from 'react';
import Navbarwindows from '../../components/navbars/Navbarwindows';
import Initial from '../../components/windows/Initial';
import Install from '../../components/windows/Install';
import DNS from '../../components/windows/DNS';
import DHCP from '../../components/windows/DHCP';
import FTP from '../../components/windows/FTP';
import SMTP from '../../components/windows/SMTP';
import HTTP from '../../components/windows/HTTP';

function handleRender(props) {
  switch (props.location.pathname) {
    case '/windows' || '/windows/':
      return <Initial />;
    case '/windows/install':
      return <Install />;
    case '/windows/dns':
      return <DNS />;
    case '/windows/dhcp':
      return <DHCP />;
    case '/windows/ftp':
      return <FTP />;
    case '/windows/smtp':
      return <SMTP />;
    case '/windows/http':
      return <HTTP />;
    default:
      return <h1>ERROR 404</h1>;
  }
}

function WindowsServer(props) {
  const toRender = handleRender(props);
  return (
    <Navbarwindows>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">{toRender}</div>
        </div>
      </div>
    </Navbarwindows>
  );
}

export default WindowsServer;
