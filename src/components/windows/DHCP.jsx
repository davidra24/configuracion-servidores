import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/dhcp/uno.PNG';
import dos from '../../images/dhcp/dos.PNG';
import tres from '../../images/dhcp/tres.PNG';
import cuatro from '../../images/dhcp/cuatro.PNG';
import cinco from '../../images/dhcp/cinco.PNG';

const cards = [
  {
    title: 'Configuración inicial',
    description:
      'Pantalla de configuración de administración de servidores, acá vamos a seleccionar "Agregar roles y características" y seleccionaremos la opción DHCP y procedemos como en la configuración DNS',
    image: uno
  },
  {
    title: 'Post-isntalación DHCP',
    description:
      'Una vez instalado el servidor DHCP, el servidor hará una post configuración para agregar grupos de seguridad',
    image: dos
  },
  {
    title: 'Configuración',
    description:
      'Vamos a herramientas y seleccionamos el servidor DHCP que acabamos de instalar para empezar a configurarlo',
    image: tres
  },
  {
    title: 'Configuración IPv4',
    description:
      'Sigiente vamos al apartado de IPv4 para poder configurar las subredes del servidor DHCP, vamos a configurar la IP inicial y la IP final de la red',
    image: cuatro
  },
  {
    title: 'Configuración final',
    description:
      'Vamos a utilizar la configuración por defecto hasta el apartado de finalizar, de esta forma ya habremos configurado completamente el servidor DHCP',
    image: cinco
  }
];
function DHCP(props) {
  return (
    <CardImages
      title="Configuración DHCP"
      cards={cards}
      prevLink="/windows/dns"
      prevTitle="DNS"
      nextLink="/windows/ftp"
      nextTitle="FTP"
    />
  );
}

export default DHCP;
