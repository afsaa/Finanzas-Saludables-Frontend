/**
 *
 * RegisterForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './RegisterForm.scss';

function RegisterForm() {
  return (
    <section className="register">
      <div className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" action="">
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="email" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button" type="button">
            Registrarme
          </button>
        </form>
        <p className="register__container--login-link">
          <a href="./login">Iniciar sesión</a>
        </p>
      </div>
    </section>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
