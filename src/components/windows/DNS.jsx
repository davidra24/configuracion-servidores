import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/dns/uno.PNG';
import dos from '../../images/dns/dos.PNG';
import tres from '../../images/dns/tres.PNG';
import cuatro from '../../images/dns/cuatro.PNG';
import cinco from '../../images/dns/cinco.PNG';
import seis from '../../images/dns/seis.PNG';
import siete from '../../images/dns/siete.PNG';

const cards = [
  {
    title: 'Configuración inicial',
    description:
      'Pantalla de configuración de administración de servidores, acá vamos a seleccionar "Agregar roles y características"',
    image: uno
  },
  {
    title: 'Asistente de roles y característcas',
    description: 'Seleccionamos la opciónde DNS para configurar el servidor',
    image: dos
  },
  {
    title: 'Confirmación',
    description:
      'Dejamos la configuración por defercto y confirmamos la instalación',
    image: tres
  },
  {
    title: 'DNS',
    description:
      'Una vez instalado el servidor nos aparecerá la siguiente pantalla, seguido vamso al apartado de herramientas en la parte superior derecha y seleccionamos DNS para configurarlo',
    image: cuatro
  },
  {
    title: 'Configuración',
    description:
      'Nos aparecerá la ventana del sistente de configuración DNS, vamos a dejar la configuración por defecto',
    image: cinco
  },
  {
    title: 'Configuración de la zona',
    description:
      'Ahora configuramos el nombre de la zona que vamos a utilizar, este registro servirá para identificar el servidor DNS',
    image: seis
  },
  {
    title: 'Finializar',
    description:
      'Una vez finalice la configuración de DNS, nos aparecerá la siguiente ventana con la configuración de nuestro servidor, que ya está listo para usarse',
    image: siete
  }
];

function DNS(props) {
  return (
    <CardImages
      title="Configuración DNS"
      cards={cards}
      prevLink="/windows/install"
      prevTitle="Instalación"
      nextLink="/windows/dhcp"
      nextTitle="DHCP"
    />
  );
}

export default DNS;
