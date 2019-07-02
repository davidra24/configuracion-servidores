import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/ftp/uno.PNG';
import dos from '../../images/ftp/dos.PNG';
import tres from '../../images/ftp/tres.PNG';
import cuatro from '../../images/ftp/cuatro.PNG';
import cinco from '../../images/ftp/cinco.PNG';
import seis from '../../images/ftp/seis.PNG';
import siete from '../../images/ftp/siete.PNG';
import ocho from '../../images/ftp/ocho.PNG';
import nueve from '../../images/ftp/nueve.PNG';

const cards = [
  {
    title: 'Configuración inicial',
    description:
      'Vamos a ir al administrador pruncipal del servidor, e instalaremos las características de servidor web Internet Information Services (IIS)',
    image: uno
  },
  {
    title: 'Configuración de rol',
    description:
      'Seguido de esto debemos seleccionar servicios de rol y seleccionamos la opción de servidor ftp casi al final de esta sección',
    image: dos
  },
  {
    title: 'Confirmación de instalación',
    description:
      'Verificamos los servicios que vamos a instalar, antes de finalizar la configuración pre instalación',
    image: tres
  },
  {
    title: 'Instalación',
    description:
      'Seguido a esto empezará la instalacion de los servicios que seleccionamos anteriormente',
    image: cuatro
  },
  {
    title: 'Agregar servicio FTP',
    description:
      'Una vez creado el servicio IIS, vamos al administrador de IIS, en el apartadode sitios seleccionaremos agregar sitio FTP',
    image: cinco
  },
  {
    title: 'Configuración servicio FTP',
    description:
      'Ahora asignaremos el nombre del sitio FTP, junto con la ruta donde se almacenarán los archivos del servicio',
    image: seis
  },
  {
    title: 'Configuración IP y SSL',
    description:
      'Ahora procedemos a configurar la IP de nuestro servidor y el puerto donde va a existir el servicio, junto con el certificado SSL si existe uno, en este caso lo vamos a configurar sin SSL',
    image: siete
  },
  {
    title: 'Configuración de autenticación',
    description:
      'Ahora configuramos el tipo de usuarios que tendrán acceso a nuestro servicio FTP, para este caso vamos a configurar una autenticación anónima y básica para qeu se pueda acceder rápido y sin problemas a este',
    image: ocho
  },
  {
    title: 'Confirmación de servidor',
    description:
      'Finalmente agregamos un archivo a la raiz de almacenamiento del archivos FTP, de tal forma que podamos acceder al mismo desde el navegador introduciendo la url FTP del servidor, como se muestra en la imagen',
    image: nueve
  }
];

function FTP(props) {
  return (
    <CardImages
      title="Configuración FTP"
      cards={cards}
      prevLink="/windows/dhcp"
      prevTitle="DHCP"
      nextLink="/windows/smtp"
      nextTitle="SMTP"
    />
  );
}

export default FTP;
