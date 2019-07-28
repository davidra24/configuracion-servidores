import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background:
    'linear-gradient(45deg,rgba(255, 24, 150, 0.52), rgba(17, 149, 180, 0.73))',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});

function Initial(props) {
  return (
    <Fragment>
      <h1>Linux server</h1>
      <br />
      <h2>
        Bienvenido al menú de linux, en el siguiente apartado vamos a aprender
        como instalar y configurar protocolos de comunicación en Ubuntu server
        18.04 LTS, para montar nuestro propio servidor para Internet,
        emocionante ¿no? Ahora continúa todo el proceso haciendo click en algún
        ítem del menú de navegación o si te da mucha pereza da click e uno de
        estos botones
      </h2>
      <br />
      <br />
      <br />
      <br />
      <div className='object'>
        <FontAwesomeIcon icon='hand-point-down' size='5x' />
      </div>
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <Link className='nav-link' to='/linux/dns'>
              <MyButton className='btn btn-block'>DNS</MyButton>
            </Link>
          </div>
          <div className='col-12 col-md-6'>
            <Link className='nav-link' to='/linux/dhcp'>
              <MyButton className='btn btn-block'>DHCP</MyButton>
            </Link>
          </div>
          <div className='col-12 col-md-6'>
            <Link className='nav-link' to='/linux/ftp'>
              <MyButton className='btn btn-block'>FTP</MyButton>
            </Link>
          </div>
          <div className='col-12 col-md-6'>
            <Link className='nav-link' to='/linux/smtp'>
              <MyButton className='btn btn-block'>SMTP</MyButton>
            </Link>
          </div>
          <div className='col-12 col-md-6'>
            <Link className='nav-link' to='/linux/http'>
              <MyButton className='btn btn-block'>HTTP</MyButton>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class='row justify-content-between'>
        <div class='col-4'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='shake-it'>
              <FontAwesomeIcon icon='home' size='4x' />
            </div>
          </Link>
        </div>
        <div class='col-4'>
          <Link to='/linux/dns' style={{ textDecoration: 'none' }}>
            <div className='right-move'>
              <FontAwesomeIcon icon='arrow-alt-circle-right' size='4x' />
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </Fragment>
  );
}

export default Initial;
