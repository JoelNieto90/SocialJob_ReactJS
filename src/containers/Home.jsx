import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';
import LogoBlack from '../assets/static/Logo Black.PNG';
import PersonsGroup from '../assets/static/PersonsGroup.PNG';

const Home = () => (
  <main className='main'>
    <section className='Busqueda'>
      <h1>Find your next jobs</h1>
      <section className='Busqueda__input'>
        <div className='Busqueda__input__icono--1'>
          <input
            type='text'
            name='input'
            placeholder='Skils, salary, position'
          />
        </div>
        <div className='Busqueda__input__icono--2'>
          <input type='text' name='input' placeholder='Location, country' />
        </div>
      </section>
      <Link to='/jobs'>Search Jobs</Link>
    </section>
    <section className='textHome'>
      <article className='textHome__Text'>
        <h2>Find the best vacancies published on Social Jobs</h2>
        <Link to='/Jobs'>See Jobs</Link>
      </article>
      <article className='textHome__image'>
        <img src={LogoBlack} alt='Logo Social Jobs Presentación' />
        <img src={PersonsGroup} alt='Logo Personas Comunicandose' />
      </article>
    </section>
  </main>
);

export default Home;
