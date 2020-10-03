import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/RestorePassword.scss';
import CaptureSocialJob from '../assets/static/CaptureSocialJob.PNG';

const RestorePassword = () => (
  <main className='mainPassword'>
    <article className='article'>
      <img src={CaptureSocialJob} alt='Logo Social Job del Formulario' />
      <h2>Restore Password</h2>
    </article>
    <section className='input'>
      <div className='input__icono--1'>
        <input type='email' name='input' placeholder='Email' />
      </div>
    </section>
    <section className='buttonText'>
      <Link to='/jobs'>Restore</Link>
    </section>
    <section className='EnlacesText'>
      <p>
        <Link to='/signin'>Log in</Link>
      </p>
      <p>
        {' '}
        <Link to='/register'>No yet a member? Sign Up</Link>
      </p>
    </section>
  </main>
);

export default RestorePassword;
