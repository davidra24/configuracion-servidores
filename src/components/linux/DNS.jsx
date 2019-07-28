import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/linux/dns/uno.png';
import dos from '../../images/linux/dns/dos.PNG';
import tres from '../../images/linux/dns/tres.PNG';
import cuatro from '../../images/linux/dns/cuatro.PNG';
import cinco from '../../images/linux/dns/cinco.PNG';
import seis from '../../images/linux/dns/seis.PNG';
import siete from '../../images/linux/dns/siete.PNG';
import ocho from '../../images/linux/dns/ocho.PNG';

const cards = [
  {
    title: 'Intalación de bind9',
    description:
      'Lo primero que vamos a hacer es instalar bind9, esto con el comando apt install bind9',
    image: uno
  },
  {
    title: 'Configuración estática de IP',
    description:
      'Para configurar la IP vamos a ir a /etc/netplan, y ahí modificaremos el archivo existente com ose ve en la iamgen',
    image: dos
  },
  {
    title: 'Configuración de zonas',
    description:
      'Ahora configuramos la zona directa y la zona inversa comose muestra en la imagen',
    image: tres
  },
  {
    title: 'Creación de archivos',
    description:
      'Ahora copiamos los archivos db.172 y db.name.conf.local de /etc/bind con nombre diferente',
    image: cuatro
  },
  {
    title: 'Archivo de zona directa',
    description:
      'Configuramos el archivo db.davidramirez.co, en este caso, el correspondiente a la zona directa de esta forma',
    image: cinco
  },
  {
    title: 'Archivo de zona inversa',
    description:
      'Ahora configuramos el archivo db.192, en este caso el correspondiente a la zona inversa, de esta forma',
    image: seis
  },
  {
    title: 'Verificar dns name',
    description:
      'Ahora verificamos el nombre del servidor dns con el comando named-checkzone davidramirez.co /etc/bind',
    image: siete
  },
  {
    title: 'Finializar',
    description:
      'Verificamos que el dns quedó correctamente configurado con el comando nslookup davidramirez.co',
    image: ocho
  }
];

function DNS(props) {
  return (
    <CardImages
      title='Configuración DNS'
      cards={cards}
      prevLink='/linux'
      prevTitle='Instalación'
      nextLink='/linux/dhcp'
      nextTitle='DHCP'
    />
  );
}

export default DNS;
