import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Register.scss';
import Capturecompu from '../assets/static/Capturecompu.PNG';
import googleG from '../assets/static/googleG.png';
import usuario from '../assets/static/usuario.png';
import credencial from '../assets/static/credencial.png';
import correo from '../assets/static/correo.png';
import llave from '../assets/static/llave.png';

export default class Register extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullname: this.fullName,
      username: this.userName,
      email: this.email,
      password: this.password,
    };

    axios
      .post('/user/signup', data)
      .then((res) => {
        this.setState({
          registerTrue: true,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.registerTrue) {
      return <Redirect to='/signin' />;
    }
    return (
      <main className='mainRegister'>
        <section className='Card1'>
          <img src='{Capturecompu}' alt='Laptop Social Jobs' />
          <p>The job of your dreams is here</p>
          <span>At Social Jobs we have a network of users who share the best vacancies for you.</span>
        </section>

        <form onSubmit={this.handleSubmit}>
          <section className='Card2'>
            <section className='input'> </section>
            <div className='input__icono--1' style={{ backgroundImage: `url(${googleG})` }}>
              <input
                type='text'
                placeholder='Google'
              />
            </div>
            <div className='input__icono--2' style={{ backgroundImage: `url(${usuario})` }}>
              <input
                type='text'
                id='fullname'
                placeholder='Full Name'
                required='required'
                onChange={e => (this.fullName = e.target.value)}
              />
            </div>
            <div className='input__icono--3' style={{ backgroundImage: `url(${credencial})` }}>
              <input
                type='text'
                id='username'
                placeholder='User Name'
                required='required'
                onChange={e => (this.userName = e.target.value)}
              />
            </div>
            <div className='input__icono--4' style={{ backgroundImage: `url(${correo})` }}>
              <input
                type='text'
                id='email'
                placeholder='Email'
                required='required'
                onChange={e => (this.email = e.target.value)}
              />
            </div>
            <div className='input__icono--5' style={{ backgroundImage: `url(${llave})` }}>
              <input
                type='password'
                id='password'
                placeholder='Password'
                required='required'
                onChange={e => (this.password = e.target.value)}
              />
            </div>
            <section className='buttonText'>
              <button className='button'>Register</button>
            </section>
          </section>
        </form>
      </main>
    );
  }
}
