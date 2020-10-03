import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import '../assets/styles/App.scss';
import '../assets/styles/components/SignIn.scss';
import SocialJobDark from '../assets/static/SocialJobDark.PNG';

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
        const { id } = decode;
        const { username } = decode;
        const { email } = decode;
        console.log(decode);
        console.log(id);
        console.log(email);
        console.log(username);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(decode);
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
            <div className='input__icono--1'>
              <input
                type='text'
                placeholder='Google'
              />
            </div>
            <div className='input__icono--2'>
              <input
                type='email'
                placeholder='Email'
                onChange={e => (this.email = e.target.value)}
              />
            </div>
            <div className='input__icono--3'>
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

/*
const SignIn = () => (
  <main className='mainSignIn'>
    <article className='article'>
      <img src={SocialJobDark} alt='Logo Social Job del Formulario' />
    </article>
    <section className='input'>
      <div className='input__icono--1'>
        <input type='text' name='input' placeholder='Google' />
      </div>
      <div className='input__icono--2'>
        <input type='text' name='input' placeholder='User' />
      </div>
      <div className='input__icono--3'>
        <input type='password' name='input' placeholder='Password' />
      </div>
    </section>
    <section className='buttonText'>
      <Link to='Jobs.html'>Sign In</Link>
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

export default SignIn;
*/
