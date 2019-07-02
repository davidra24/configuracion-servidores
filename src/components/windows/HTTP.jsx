import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/http/uno.PNG';
import dos from '../../images/http/dos.PNG';
import tres from '../../images/http/tres.PNG';
import cuatro from '../../images/http/cuatro.PNG';
import cinco from '../../images/http/cinco.PNG';
import seis from '../../images/http/seis.PNG';
import siete from '../../images/http/siete.PNG';

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
      'Seguido de esto debemos seleccionar servicios de rol y seleccionamos la opción de servidor web http',
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
    title: 'Sitios',
    description:
      'Vamos al apartado de sitios, acá se habrá creado un servidor http por defecto, el cuál será el que vamos a utilizar en este caso',
    image: cinco
  },
  {
    title: 'Nombre',
    description:
      'Asignamos el nombre que deseemos que tenga nuestro servicio de http para identificarlo más adelante en otro momento',
    image: seis
  },
  {
    title: 'Comprobación',
    description:
      'Ahora entramos en el navegador a la URL de nuestra máquina para comprobar el seridor http que tenemos corriendo',
    image: siete
  }
];

function HTTP(props) {
  return (
    <CardImages
      title="Configuración HTTP"
      cards={cards}
      prevLink="/windows/smtp"
      prevTitle="SMTP"
      nextLink="/about"
      nextTitle="Acerca de"
    />
  );
}

export default HTTP;
