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
import PostsList from '../../components/PostsList/PostsList';

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
            <PostsList />
          </div>
        </section>
      </div>
    );
  }
}
