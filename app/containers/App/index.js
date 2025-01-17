/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { hot } from 'react-hot-loader/root';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Header and Footer
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const isLoggedIn = false;

function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Finanzas Saludables"
        defaultTitle="Finanzas Saludables"
      >
        <meta name="description" content="A Finanzas Saludables application" />
      </Helmet>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterForm} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
