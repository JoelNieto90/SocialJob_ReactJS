import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/NavBar.scss';
import SocialJob from '../assets/static/Logo SocialJob.png';
import IconBurger from '../assets/static/icon-hamburger.svg';
import IconClose from '../assets/static/icon-close.svg';

const NavBar = () => (
  <header>
    <nav className='nav'>
      <Link to='/'>
        <img className='nav__logo' src={SocialJob} alt='Logo Social Job' />
      </Link>
      <ul className='nav__enlaces'>
        <li>
          <Link to='/jobs'>Jobs</Link>
        </li>
        <li>
          <Link to='/published'>Published</Link>
        </li>
        <li>
          <Link to='/AboutUs'>About Us</Link>
        </li>
        <li>
          <Link to='/signin' className='nav__enlaces--a1'>Sign In</Link>
          <Link to='/register' className='nav__enlaces--a2'>Sign Up</Link>
        </li>
      </ul>
      <section className='nav__Button'>
        <Link to='/signin' className='nav__Button--a1'>
          Sign In
        </Link>
        <Link to='/register' className='nav__Button--a2'>
          Sign Up
        </Link>
        <i id='burger-menu' className='burger-button'>
          <img
            className='Icono-burger'
            src={IconBurger}
            alt='Abrir Menu Movil'
          />
          <img
            className='Icono-close'
            src={IconClose}
            alt='Cerrar Menu Movil'
          />
        </i>
      </section>
    </nav>
  </header>
);

export default NavBar;
