import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from '../../images/background/server.png';
import windowsLogo from '../../images/windows.png';
import linuxLogo from '../../images/linux.png';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const backgroundImage = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundImage: `linear-gradient(to bottom, rgba(255, 24, 150, 0.52), rgba(17, 149, 180, 0.73)), url(${background})`
};
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});
const imageStyle = {
  width: '180px',
  margin: '3%'
};
class Inicio extends Component {
  render() {
    return (
      <div style={backgroundImage}>
        <div className="h-100 row align-items-center">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <h1 style={{ color: 'white' }}>
                  <strong>Configuraciones de servidor</strong>
                </h1>
                <br />
                <div className="d-flex justify-content-center">
                  <img
                    style={imageStyle}
                    src={windowsLogo}
                    alt="windows logo"
                  />
                  <img style={imageStyle} src={linuxLogo} alt="linux logo" />
                </div>
              </div>
              <br />
              <div className="col-12 col-md-6">
                <Link to="/windows" style={{ textDecoration: 'none' }}>
                  <MyButton className="btn btn-block">Windows server</MyButton>
                </Link>
                <br />
                <br />
                <Link to="/linux" style={{ textDecoration: 'none' }}>
                  <MyButton className="btn btn-block">Linux server</MyButton>
                </Link>
                <br />
                <br />
                <Link to="/about" style={{ color: 'white' }}>
                  <div className="text-center">
                    <h3>About</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
