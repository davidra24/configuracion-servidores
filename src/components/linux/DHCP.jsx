import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/linux/dhcp/uno.PNG';
import dos from '../../images/linux/dhcp/dos.PNG';
import tres from '../../images/linux/dhcp/tres.PNG';

const cards = [
  {
    title: 'Configuración inicial',
    description:
      'Primero instalamos isc-dhcp-server con el comando apt install isc-dhcp-server y abrimos el archivo de configuracion en /etc/dhcp/dhcpd.conf',
    image: uno
  },
  {
    title: 'configuración de rangos de ip',
    description:
      'Abajo del archivo modificamos la linea subnet, con la información de la subred que estamos configurando asi como los rangos de la misma',
    image: dos
  },
  {
    title: 'Reinicio del servicio',
    description:
      'Reiniciamos el servicio con el comanto systemctl restart isc-dhcp-server.service, y quedará funcionando el servidor dhcp',
    image: tres
  }
];
function DHCP(props) {
  return (
    <CardImages
      title='Configuración DHCP'
      cards={cards}
      prevLink='/linux/dns'
      prevTitle='DNS'
      nextLink='/linux/ftp'
      nextTitle='FTP'
    />
  );
}

export default DHCP;
