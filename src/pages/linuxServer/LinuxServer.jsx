import React from 'react';
import Navbarwindows from '../../components/navbars/Navbarlinux';
import Initial from '../../components/linux/Initial';
import DNS from '../../components/linux/DNS';
import DHCP from '../../components/linux/DHCP';
import FTP from '../../components/linux/FTP';
import SMTP from '../../components/linux/SMTP';
import HTTP from '../../components/linux/HTTP';

function handleRender(props) {
  switch (props.location.pathname) {
    case '/linux' || '/linux/':
      return <Initial />;
    case '/linux/dns':
      return <DNS />;
    case '/linux/dhcp':
      return <DHCP />;
    case '/linux/ftp':
      return <FTP />;
    case '/linux/smtp':
      return <SMTP />;
    case '/linux/http':
      return <HTTP />;
    default:
      return <h1>ERROR 404</h1>;
  }
}

function WindowsServer(props) {
  const toRender = handleRender(props);
  return (
    <Navbarwindows>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-12'>{toRender}</div>
        </div>
      </div>
    </Navbarwindows>
  );
}

export default WindowsServer;
