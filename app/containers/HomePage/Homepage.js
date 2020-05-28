/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './Homepage.scss';
// import Header from '../../components/Header/Header.js';
// import Footer from '../../components/Footer/Footer.js';
import { Helmet } from 'react-helmet-async';
import playIcon from '../../components/common/assets/images/play-icon.png';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <section className="main">
          <h1 className="main__title">¿Sobre que temas quieres aprender?</h1>
          <input className="input" type="text" placeholder="Buscar..." />
        </section>

        <section className="carousel">
          <div className="carousel__container">
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                alt="Person Drowning"
              />
              <div className="carousel-item__details">
                <div>
                  <img src={playIcon} alt="Play icon" />
                </div>
                <p className="carousel-item__details--title">
                  Las deudas te ahogan?
                </p>
                <p className="carousel-item__details--subtitle">
                  Los intereses que pagas en tus deudas cuentan y te pueden
                  perjudicar.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Budgeting"
              />
              <div className="carousel-item__details">
                <div>
                  <img src={playIcon} alt="Play icon" />
                </div>
                <p className="carousel-item__details--title">
                  Aprende a crear tu presupuesto
                </p>
                <p className="carousel-item__details--subtitle">
                  Determina en que estas gastando tu dinero y que cantidad.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://images.unsplash.com/photo-1567427013953-88102117053a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Saving"
              />
              <div className="carousel-item__details">
                <div>
                  <img src={playIcon} alt="Play icon" />
                </div>
                <p className="carousel-item__details--title">
                  Desarrolla el habito de ahorrar
                </p>
                <p className="carousel-item__details--subtitle">
                  Ya sea para obtener lo que quieres o para alcanzar tus metas.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-item__img"
                src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="Investing"
              />
              <div className="carousel-item__details">
                <div>
                  <img src={playIcon} alt="Play icon" />
                </div>
                <p className="carousel-item__details--title">
                  Invierte como debe ser
                </p>
                <p className="carousel-item__details--subtitle">
                  La mayoría de personas deberían invertir siempre a largo plazo
                  y de manera consistente.
                </p>
              </div>
            </div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
          </div>
        </section>
      </div>
    );
  }
}
