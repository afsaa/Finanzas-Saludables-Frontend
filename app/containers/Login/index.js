/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectLogin from './selectors';
import { reducer } from './slice';
import saga from './saga';

import LoginRegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';

const stateSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  /* eslint-disable no-unused-vars */
  const { login } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <LoginRegisterForm />
    </div>
  );
}

Login.propTypes = {};

export default memo(Login);
