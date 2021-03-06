import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import '../assets/styles/App.scss';
import '../assets/styles/components/SignIn.scss';
import SocialJobDark from '../assets/static/SocialJobDark.PNG';
import googleG from '../assets/static/googleG.png';
import usuario from '../assets/static/usuario.png';
import llave from '../assets/static/llave.png';

export default class SingIn extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post('user/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        const { token } = res.data.data;
        const decode = jwtDecode(token);
        const email = decode.email;
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(token, decode);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/' />;
    }
    return (
      <main className='mainSignIn'>
        <article className='article'>
          <img src={SocialJobDark} alt='Logo Social Job del Formulario' />
        </article>

        <section className='input'>
          <form onSubmit={this.handleSubmit}>
            <div className='input__icono--1' style={{ backgroundImage: `url(${googleG})` }}>
              <input
                type='text'
                placeholder='Google'
              />
            </div>
            <div className='input__icono--2' style={{ backgroundImage: `url(${usuario})` }}>
              <input
                type='email'
                placeholder='Email'
                onChange={e => (this.email = e.target.value)}
              />
            </div>
            <div className='input__icono--3' style={{ backgroundImage: `url(${llave})` }}>
              <input
                type='password'
                placeholder='Password'
                onChange={e => (this.password = e.target.value)}
              />
            </div>
            <button className='button'>Login</button>
          </form>
        </section>

        <p>
          <Link to='/restorepassword'>I do not remember my password</Link>
        </p>
        <p>
          {' '}
          <Link to='/register'>No yet a member? Sign Up</Link>
        </p>
      </main>
    );
  }
}
