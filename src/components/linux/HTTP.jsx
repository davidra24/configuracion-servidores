import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/linux/http/uno.PNG';
import dos from '../../images/linux/http/dos.PNG';

const cards = [
  {
    title: 'Instalación',
    description: 'Instalamos apache2 con el comando apt install apache2',
    image: uno
  },
  {
    title: 'Verificación de servidor apache2',
    description:
      'Verificamos que el servidor se ha instalado correctamente entrando a la ip de nuestro servidor en el puerto 80',
    image: dos
  }
];

function HTTP(props) {
  return (
    <CardImages
      title='Configuración HTTP'
      cards={cards}
      prevLink='/linux/smtp'
      prevTitle='SMTP'
      nextLink='/about'
      nextTitle='Acerca de'
    />
  );
}

export default HTTP;
