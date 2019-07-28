import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/linux/smtp/uno.PNG';
import dos from '../../images/linux/smtp/dos.PNG';
import tres from '../../images/linux/smtp/tres.PNG';
import cuatro from '../../images/linux/smtp/cuatro.PNG';
import cinco from '../../images/linux/smtp/cinco.PNG';
import seis from '../../images/linux/smtp/seis.PNG';
import siete from '../../images/linux/smtp/siete.PNG';
import ocho from '../../images/linux/smtp/ocho.PNG';
import nueve from '../../images/linux/smtp/nueve.PNG';
import diez from '../../images/linux/smtp/diez.PNG';

const cards = [
  {
    title: 'Instalación',
    description: 'Empezamos instalando postfix y configurando el hostnamectl',
    image: uno
  },
  {
    title: 'Configuración',
    description: 'Dejamos la configuración por defecto de postfix',
    image: dos
  },
  {
    title: 'Descarga iRedMail',
    description:
      'Descargamos con el comando wget iRedMail, con eso se descarga el archivo de instalación',
    image: tres
  },
  {
    title: 'Instalación iRedMail',
    description: 'Aceptamos la configuración posr defecto de iRedMail',
    image: cuatro
  },
  {
    title: 'Directorio',
    description:
      'Configuramos el directorio de iRedMail donde queremos que se almacene el servicio',
    image: cinco
  },
  {
    title: 'Nginx',
    description:
      'Seleccionamos el servidor de aplicación, en este caso es Nginx',
    image: seis
  },
  {
    title: 'Seleccionamos la base de datos',
    description:
      'Seleccionamos la base de datos que queremos que iRedMail instale para almacenar los correos',
    image: siete
  },
  {
    title: 'Configuración de dominio',
    description:
      'Configuramos el dominio de iRedMail como queremos que sea dentro del servidor',
    image: ocho
  },
  {
    title: 'Confirmación de instalación',
    description: 'Ahora confirmamos la configuración que acabamos de hacer',
    image: nueve
  },
  {
    title: 'Reinicio',
    description:
      'Ahora reiniciamos el sistema operativo, de tal forma que se configure el servidor en su totalidad',
    image: diez
  }
];

function SMTP(props) {
  return (
    <CardImages
      title='Configuración SMTP'
      cards={cards}
      prevLink='/linux/ftp'
      prevTitle='FTP'
      nextLink='/linux/http'
      nextTitle='HTTP'
    />
  );
}

export default SMTP;
