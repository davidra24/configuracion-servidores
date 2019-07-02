import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/smtp/uno.PNG';
import dos from '../../images/smtp/dos.PNG';
import tres from '../../images/smtp/tres.PNG';
import cuatro from '../../images/smtp/cuatro.PNG';

const cards = [
  {
    title: 'Instalación',
    description:
      'Al instalar el servicio IIS, vamos a ir al apartado de características y checkeamos la opción de servidor smtp, para instalar esta característica',
    image: uno
  },
  {
    title: 'Configuración',
    description:
      'Una vez instalado el servicio podemos encontrarlo en la sección de herramientas en el apartado de IIS 6.0, dónde nos habrá creadoun sevidor smtp por defecto',
    image: dos
  },
  {
    title: 'Creación de nuevo servidor',
    description:
      'Podemos crear un nuevo servidor yendo al apartado de nuevo en el ícono del equipo, y seleccionando Nuevo servidor virtual smtp',
    image: tres
  },
  {
    title: 'Servidor',
    description:
      'Al crear el servidor, nos pedirá el nombre del servidor y la IP que vamos a utilizar en nuestro servidor, de tal forma que en 3 sencillos pasos ya habrémos configurado un uevo servidor smtp, y se verá como en la imagen',
    image: cuatro
  }
];

function SMTP(props) {
  return (
    <CardImages
      title="Configuración SMTP"
      cards={cards}
      prevLink="/windows/ftp"
      prevTitle="FTP"
      nextLink="/windows/http"
      nextTitle="HTTP"
    />
  );
}

export default SMTP;
