import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/SignIn.scss';
import SocialJobDark from '../assets/static/SocialJobDark.PNG';

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
