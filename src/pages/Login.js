import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
      },
      disable: true,
      loading: false,
      redirect: false,
    };
  }

  handleNameUser = ({ target }) => {
    this.setState({
      user: {
        name: target.value,
      },
    }, this.handleLoginButton);
  }

  handleLoginButton = () => {
    const minLength = 2;
    const { user } = this.state;
    const { name } = user;
    return name.length <= minLength
      ? this.setState({ disable: true })
      : this.setState({ disable: false });
  }

  handleLoadingOrRedirect = async () => {
    const { user } = this.state;
    this.setState(
      { loading: true },
      async () => {
        await createUser(user);
        this.setState({
          loading: false,
          redirect: true,
        });
      },
    );
  }

  render() {
    const { loading, disable, redirect } = this.state;
    return (
      loading ? <Loading /> : (
        <div data-testid="page-login">
          <label htmlFor="login-name-input">
            Nome de usuário:
            <input
              data-testid="login-name-input"
              onChange={ this.handleNameUser }
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ disable }
            onClick={ this.handleLoadingOrRedirect }
          >
            Entrar
          </button>
          { redirect && (<Redirect to="/search" />) }
        </div>
      )
    );
  }
}

export default Login;
