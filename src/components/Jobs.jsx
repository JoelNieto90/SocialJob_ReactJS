import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Jobs.scss';
import backgroundBusqueda from '../assets/static/roca.jpg';
import iconoBuscar from '../assets/static/buscar.png';
import iconoMaps from '../assets/static/alfiler.png';

export default class Jobs extends Component {
  componentWillMount() {
    axios.get('/post/')
      .then((res) => {
        const data = res.json(); 
        console.log(data);
      },
      (err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <main className='main'>
        <section
          className='Busqueda'
          style={{ backgroundImage: `url(${backgroundBusqueda})` }}
        >
          <h1>Find your next jobs</h1>
          <section className='Busqueda__input'>
            <div
              className='Busqueda__input__icono--1'
              style={{ backgroundImage: `url(${iconoBuscar})` }}
            >
              <input
                type='text'
                name='input'
                placeholder='Skils, salary, position'
              />
            </div>
            <div
              className='Busqueda__input__icono--2'
              style={{ backgroundImage: `url(${iconoMaps})` }}
            >
              <input type='text' name='input' placeholder='Location, country' />
            </div>
          </section>
          <Link to='/aboutus'>Search Jobs</Link>
        </section>
        <div className='loader' id='repos' />
        <section className='Cards'>
          <article className='Cards__Graph'>
            <h1>DESARROLLADOR WEB FULL STACK</h1>
            <hr />
            <div className='Cards__Graph__map'>
              <img src='Assets/ubicacion.png' alt='Imagen Maps' />
              <h3>Ciudad de México, Distrito Federal, México</h3>
            </div>
            <section className='buttonText'>
              <a href='Jobs.html'>Go!</a>
            </section>
            <section className='buttonSkils'>
              <div className='buttonSkils--1'>
                <Link>JavaScript</Link>
                <Link>GraphQL</Link>
              </div>
              <div className='buttonSkils--2'>
                <Link>Phyton</Link>
                <Link>ReactJS</Link>
              </div>
            </section>
          </article>
          <article className='Cards__Image'>
            <img src='../assets/static.Elektra.png' alt='Logo Empresa' />
            <h2>Elektra</h2>
            <ul>
              <li>
                {' '}
                <img src='Assets/Start1.png' alt='Estrellas' />
              </li>
              <li>
                {' '}
                <img src='Assets/Start1.png' alt='Estrellas' />
              </li>
              <li>
                {' '}
                <img src='Assets/Start1.png' alt='Estrellas' />
              </li>
              <li>
                {' '}
                <img src='Assets/Start1.png' alt='Estrellas' />
              </li>
              <li>
                {' '}
                <img src='Assets/Start2.png' alt='Estrellas' />
              </li>
            </ul>
            <h3>$25, 000</h3>
          </article>
          <article className='Cards__Text'>
            <h1>Description</h1>
            <p>
              Advancio is a global software company that’s growing every day and
              we are looking for talented and passionate people who wish to be
              an integral part of our team. We are passionate about technology
              and the power it has to change the world, we are building a
              company where we love what we do, we collaborate positively with
              our customers and we have fun while we work! If you have the
              following requirements you're ready to join our team!
              {' '}
              <br />
              Core Responsibilities.
              <br />
              Develop software with high autonomy, pairing when appropriate.
              Work with QA to write unit tests, UI tests and integration tests
              to prove your code works.
            </p>
          </article>
        </section>
      </main>
    );
  }
}

/*
const Jobs = () => (
  <main className='main'>
    <section className='Busqueda' style={{ backgroundImage: `url(${backgroundBusqueda})` }}>
      <h1>Find your next jobs</h1>
      <section className='Busqueda__input'>
        <div className='Busqueda__input__icono--1' style={{ backgroundImage: `url(${iconoBuscar})` }}>
          <input
            type='text'
            name='input'
            placeholder='Skils, salary, position'
          />
        </div>
        <div className='Busqueda__input__icono--2' style={{ backgroundImage: `url(${iconoMaps})` }}>
          <input type='text' name='input' placeholder='Location, country' />
        </div>
      </section>
      <Link to='/aboutus'>Search Jobs</Link>
    </section>
    <div className='loader' id='repos' />
    <section className='Cards'>
      <article className='Cards__Graph'>
        <h1>DESARROLLADOR WEB FULL STACK</h1>
        <hr />
        <div className='Cards__Graph__map'>
          <img src='Assets/ubicacion.png' alt='Imagen Maps' />
          <h3>Ciudad de México, Distrito Federal, México</h3>
        </div>
        <section className='buttonText'>
          <a href='Jobs.html'>Go!</a>
        </section>
        <section className='buttonSkils'>
          <div className='buttonSkils--1'>
            <Link>JavaScript</Link>
            <Link>GraphQL</Link>
          </div>
          <div className='buttonSkils--2'>
            <Link>Phyton</Link>
            <Link>ReactJS</Link>
          </div>
        </section>
      </article>
      <article className='Cards__Image'>
        <img src='../assets/static.Elektra.png' alt='Logo Empresa' />
        <h2>Elektra</h2>
        <ul>
          <li>
            {' '}
            <img src='Assets/Start1.png' alt='Estrellas' />
          </li>
          <li>
            {' '}
            <img src='Assets/Start1.png' alt='Estrellas' />
          </li>
          <li>
            {' '}
            <img src='Assets/Start1.png' alt='Estrellas' />
          </li>
          <li>
            {' '}
            <img src='Assets/Start1.png' alt='Estrellas' />
          </li>
          <li>
            {' '}
            <img src='Assets/Start2.png' alt='Estrellas' />
          </li>
        </ul>
        <h3>$25, 000</h3>
      </article>
      <article className='Cards__Text'>
        <h1>Description</h1>
        <p>
          Advancio is a global software company that’s growing every day and we
          are looking for talented and passionate people who wish to be an
          integral part of our team. We are passionate about technology and the
          power it has to change the world, we are building a company where we
          love what we do, we collaborate positively with our customers and we
          have fun while we work! If you have the following requirements you're
          ready to join our team!
          {' '}
          <br />
          Core Responsibilities.
          <br />
          Develop software with high autonomy, pairing when appropriate. Work
          with QA to write unit tests, UI tests and integration tests to prove
          your code works.
        </p>
      </article>
    </section>
  </main>
);

export default Jobs;
*/
