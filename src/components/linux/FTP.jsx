import React from 'react';
import CardImages from '../cardMedia/CardImages';
import uno from '../../images/linux/ftp/uno.PNG';
import dos from '../../images/linux/ftp/dos.PNG';
import tres from '../../images/linux/ftp/tres.PNG';

const cards = [
  {
    title: 'Configuración inicial',
    description: 'Primero instalamos vsftpd con el comando apt install vsftpd',
    image: uno
  },
  {
    title: 'Configuración de autenticación',
    description:
      'configuramos el tipo de autenticación del ftp en /ftp/vsftpd.conf, en este caso colocamos anonymous=yes',
    image: dos
  },
  {
    title: 'Reiniciamos el servicio',
    description:
      'Ahora reiniciamos el servicio con el comando systemctl restart vsftpd',
    image: tres
  }
];

function FTP(props) {
  return (
    <CardImages
      title='Configuración FTP'
      cards={cards}
      prevLink='/linux/dhcp'
      prevTitle='DHCP'
      nextLink='/linux/smtp'
      nextTitle='SMTP'
    />
  );
}

export default FTP;
