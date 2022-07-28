import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Loading from '../pages/Loading';
import { createUser } from '../services/userAPI';

const Login = () => {
  const [user, setUser] = useState({ name: '' });
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function enableLoginButton() {
    const minLength = 2;
    const { name } = user;
    return name.length <= minLength
      ? setDisable(true)
      : setDisable(false);
  }

  function handleNameUser({ target }) {
    setUser({ name: target.value });
    return enableLoginButton();
  }

  async function handleLoadingOrRedirect() {
    setLoading(true);
    await createUser(user);
    setLoading(false);
    setRedirect(true);
  }

  return (
    loading ? <Loading /> : (
      <div data-testid="page-login">
        <label htmlFor="login-name-input">
          <input
            data-testid="login-name-input"
            placeholder="usuário"
            onChange={ handleNameUser }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ disable }
          onClick={ handleLoadingOrRedirect }
        >
          Entrar
        </button>
        {redirect && (<Redirect to="/search" />)}
      </div>
    )
  );
};

export default Login;
