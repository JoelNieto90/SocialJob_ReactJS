import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Register.scss';
import googleG from '../assets/static/googleG.png';
import usuario from '../assets/static/usuario.png';
import credencial from '../assets/static/credencial.png';
import correo from '../assets/static/correo.png';
import llave from '../assets/static/llave.png';

export default class RegisterUpdate extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.user;

    const config = {
      //headers: { Authorization: `Bearer ${token}` },
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2QwODk1MjM5OWMwMDAxNzRmNjkyYiIsImVtYWlsIjoiZ29vbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imdvb2wiLCJpYXQiOjE2MDIwODExMTd9.ZmpSupCnpD2rI6MUjEimiprei7fCSdre-rd4OWZw8W8' },
    };

    const data = {
      fullname: this.fullName,
      username: this.userName,
      email: this.email,
      password: this.password,
    };

    axios
      .put(`/user/${id}`, data, config)
      .then((res) => {
        console.log(res);
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
          <img src='https://raw.githubusercontent.com/JoelNieto90/ImageSocialJobs/main/Capturecompu.PNG?token=ALHTGTTZPM6ODSQTTHLJFHC7P7RGG' alt='Laptop Social Jobs' />
          <p>The job of your dreams is here</p>
          <span>At Social Jobs we have a network of users who share the best vacancies for you.</span>
        </section>

        <form onSubmit={this.handleSubmit}>
          <section className='Card2'>
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
