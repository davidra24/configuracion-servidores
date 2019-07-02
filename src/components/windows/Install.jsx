import React from 'react';
import uno from '../../images/instalacion/uno.PNG';
import dos from '../../images/instalacion/dos.PNG';
import tres from '../../images/instalacion/tres.PNG';
import cuatro from '../../images/instalacion/cuatro.PNG';
import cinco from '../../images/instalacion/cinco.PNG';
import seis from '../../images/instalacion/seis.PNG';
import siete from '../../images/instalacion/siete.PNG';
import ocho from '../../images/instalacion/ocho.PNG';
import CardImages from '../cardMedia/CardImages';

const cards = [
  {
    title: 'Pantalla inicial',
    description: 'Primera pantalla de configuración de instalación',
    image: uno
  },
  {
    title: 'Iicio de la instalación',
    description:
      'Debemos esperar mientras el sistema operativo prepara los archivos necesarios para comenzar la instalación',
    image: dos
  },
  {
    title: 'Selección de sistema operativo',
    description:
      'Vamos a elegir el sistema operativo que cubra nuestras necesidades, en este caso, seleccionarmos la opción 2: edición estándar con GUI',
    image: tres
  },
  {
    title: 'Términos de licencia',
    description:
      'A continuación nos mostrará el contrato de uso del software, vamos a leer cuidadosamente qué no pide y si estámos de acuerdo para continuar la instalación, damos en Aceptar y luego en siguiente',
    image: cuatro
  },
  {
    title: 'Tipo de instalación',
    description:
      'El software nos pedirá seleccionar el tipo de instalación que queremos, en este caso, no queremos actualizar o conservar archivos, por lo que es una instalación desde cero, para esto, selecciónamos la opción 2 "Personalizada" para que lo time como una instalación limpia',
    image: cinco
  },
  {
    title: 'Selección de disco',
    description:
      'Seleccionamos el disco donde queremos instalar el sistema operativo, en este caso es el único disco que se encuentra en la máquina',
    image: seis
  },
  {
    title: 'Pantalla de instalación',
    description:
      'Una vez configurada la instalación, el asistente realizará todo el trabajo que falta de instalación, sólo espera un rato',
    image: siete
  },
  {
    title: 'Configuración de usuario',
    description:
      'Finalmente configuramos la contraseña del usuario Administrador, para tener todo el control sobre nuestro equipo, y ahora sí, podemos iniciar con lo bueno!',
    image: ocho
  }
];

function Install(props) {
  return (
    <CardImages
      title="Instalación de Windows server 2012"
      cards={cards}
      prevLink="/windows"
      prevTitle="Inicio"
      nextLink="/windows/dns"
      nextTitle="DNS"
    />
  );
}

export default Install;
