import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Register.scss';
import Capturecompu from '../assets/static/Capturecompu.PNG';

const Register = () => (
  <main className='mainRegister'>
    <section className='Card1'>
      <img src={Capturecompu} alt='Laptop Social Jobs' />
      <p>The job of your dreams is here</p>
      <span>At Social Jobs we have a network of users who share the best vacancies for you.</span>
    </section>
    <form action='https://social-jobs-dev-back.herokuapp.com/api/user/signup' method='post' id='formulario' />
    <section className='Card2'>
      <section className='input'> </section>
      <div className='input__icono--1'>
        <input type='text' name='input' placeholder='Google' required='required' />
      </div>
      <div className='input__icono--2'>
        <input type='text' id='fullname' name='input' placeholder='Full Name' required='required' />
      </div>
      <div className='input__icono--3'>
        <input type='text' id='username' name='input' placeholder='User Name' required='required' />
      </div>
      <div className='input__icono--4'>
        <input type='text' id='email' name='input' placeholder='Email' required='required' />
      </div>
      <div className='input__icono--5'>
        <input type='password' id='password' name='input' placeholder='Password' required='required' />
      </div>
      <section className='buttonText'>
        <Link to='/' id='registro'>Create your account</Link>
      </section>
    </section>
  </main>
);

export default Register;
