import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
class Navbarabout extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: 'rgba(17, 149, 200)' }}
        >
          <Link className="navbar-brand" to="/">
            <strong>Configuración de servidores</strong>
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={this.toggleNavbar}>
                <Link className="nav-link" to="/windows">
                  Windows server
                </Link>
              </li>
              <li className="nav-item" onClick={this.toggleNavbar}>
                <Link className="nav-link" to="/linux">
                  Linux server
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Navbarabout;
