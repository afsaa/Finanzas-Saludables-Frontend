import React from 'react';
import './Header.scss';
import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
// components

// icons

// Images
import Logo from '../common/assets/images/logo.png';
import ProfileImg from '../common/assets/images/profile-icon.png';

function Header({ isLoggedIn }) {
  const store = useStore();
  const { router } = store.getState();
  const path = router.location.pathname;

  if ((path === '/login' || path === '/register') && isLoggedIn) {
    return (
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={ProfileImg} alt="Profile" />
          <p>Username</p>
        </div>
        <ul>
          <a href="/">Perfil</a>
          <a href="/login">Cerrar Sesión</a>
        </ul>
      </div>
    );
  }

  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={ProfileImg} alt="Profile" />
          <p>Username</p>
        </div>
        <ul>
          <a href="/">Perfil</a>
          <a href="/login">Cerrar Sesión</a>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
