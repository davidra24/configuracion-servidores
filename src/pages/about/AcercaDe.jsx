import React from 'react';
import Navbarabout from '../../components/navbars/NavbarAbout';
import yo from '../../images/about/yo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AcercaDe(props) {
  return (
    <Navbarabout>
      <div className="text-center">
        <h1>Acerca de</h1>
        <br />
        <img className="image-about" src={yo} alt="" />
        <br />
        <br />
        <h2>Carlos David Ramírez Gómez</h2>
        <br />
        <div className="container">
          <h3>
            Soy un estudiante de último semestre de Ingeniería de sistemas y
            computación de la Universidad pedagógica y tecnológica de Colombia,
            mi finalidad con este material es poder enseñar a las personas algo
            nuevo y que puedan configurar su propio servidor desde cero, y vean
            que el mundo de la web es más sencillo de lo que realmente creen.
          </h3>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <a
                href="https://www.facebook.com/davidra24"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <div className="">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    size="2x"
                  />
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              <a
                href="https://twitter.com/hashtagdavidr"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <div className="">
                  <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              <a
                href="https://www.instagram.com/hashtagdavidramirez"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <div className="">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <br />
        <div class="row justify-content-between">
          <div class="col-4">
            <Link to="/windows" style={{ textDecoration: 'none' }}>
              <div className="">
                <h5>Windows server</h5>
                <FontAwesomeIcon icon={['fab', 'windows']} size="4x" />
              </div>
            </Link>
          </div>
          <div class="col-4">
            <Link to="/linux" style={{ textDecoration: 'none' }}>
              <div className="">
                <h5>Linux server</h5>
                <FontAwesomeIcon icon={['fab', 'linux']} size="4x" />
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Navbarabout>
  );
}

export default AcercaDe;
