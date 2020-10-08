import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Jobs.scss';
import backgroundBusqueda from '../assets/static/roca.jpg';
import iconoBuscar from '../assets/static/buscar.png';
import iconoMaps from '../assets/static/alfiler.png';
import iconStart from '../assets/static/Start1.png';
import edificio from '../assets/static/Edificio.PNG';
import favorite from '../assets/static/favorito.png';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentWillMount() {
    axios.get('/post/').then(
      (res) => {
        const { data } = res.data;
        console.log(data);
        this.setState({
          jobs: data,
        });
      },
      (err) => {
        console.log(err);
      },
    );
  }

  handleClickFavorite = (e) => {
    if (this.props.user) {
      const { id } = this.props.user;
      e.preventDefault();
      axios
        .put(`/user/${id}`)
        .then((res) => {
          console.log(res.data.data);
          const arrayFavorite = [];
          arrayFavorite = push.res.data.data;
          //console.log(arrayFavorite);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.props.user) {
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

          <div>
            {this.state.jobs.map((jobs) => {
              return (
                <section className='Cards'>
                  <article className='Cards__Graph'>
                    <h1>{jobs.position}</h1>
                    <hr />
                    <div className='Cards__Graph__map'>
                      <img src={iconoMaps} alt='Imagen Maps' />
                      <h3>
                        {jobs.city.toUpperCase()}
                        ,
                        {jobs.country.toUpperCase()}
                      </h3>
                    </div>
                    <section className='buttonText'>
                      <a href={jobs.url}>Go!</a>
                    </section>
                    <section className='buttonSkils'>
                      <div className='buttonSkils--1'>
                        <Link to='#'>{jobs.skill[0]}</Link>
                        <Link to='#'>{jobs.skill[1]}</Link>
                      </div>
                      <div className='buttonSkils--1'>
                        <Link to='#'>{jobs.skill[2]}</Link>
                        <Link to='#'>{jobs.skill[3]}</Link>
                      </div>
                    </section>

                    <button type='button' onClick={this.handleClickFavorite}>
                      <img src={favorite} alt='Agregar a favoritos' />
                      <p>
                        Agregar a Favoritos
                      </p>
                    </button>

                  </article>
                  <article className='Cards__Image'>
                    <img src={edificio} loading='lazy' alt='Imagen Empresa' />
                    <h2>{jobs.company.toUpperCase()}</h2>
                    <ul>
                      <li>
                        <img src={iconStart} alt='Estrellas' />
                      </li>
                      <li>
                        <img src={iconStart} alt='Estrellas' />
                      </li>
                      <li>
                        <img src={iconStart} alt='Estrellas' />
                      </li>
                      <li>
                        <img src={iconStart} alt='Estrellas' />
                      </li>
                      <li>
                        <img src={iconStart} alt='Estrellas' />
                      </li>
                    </ul>
                    <h3>
                      $
                      {jobs.salary}
                    </h3>
                  </article>
                  <article>
                    <h1>Description</h1>
                    <p>{jobs.description}</p>
                  </article>
                </section>
              );
            })}
          </div>
        </main>
      );
    }

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

        <div>
          {this.state.jobs.map((jobs) => {
            return (
              <section className='Cards'>
                <article className='Cards__Graph'>
                  <h1>{jobs.position}</h1>
                  <hr />
                  <div className='Cards__Graph__map'>
                    <img src={iconoMaps} alt='Imagen Maps' />
                    <h3>
                      {jobs.city.toUpperCase()}
                      ,
                      {jobs.country.toUpperCase()}
                    </h3>
                  </div>
                  <section className='buttonText'>
                    <a href={jobs.url}>Go!</a>
                  </section>
                  <section className='buttonSkils'>
                    <div className='buttonSkils--1'>
                      <Link to='#'>{jobs.skill[0]}</Link>
                      <Link to='#'>{jobs.skill[1]}</Link>
                    </div>
                    <div className='buttonSkils--1'>
                      <Link to='#'>{jobs.skill[2]}</Link>
                      <Link to='#'>{jobs.skill[3]}</Link>
                    </div>
                  </section>
                </article>
                <article className='Cards__Image'>
                  <img src={edificio} loading='lazy' alt='Imagen Empresa' />
                  <h2>{jobs.company.toUpperCase()}</h2>
                  <ul>
                    <li>
                      <img src={iconStart} alt='Estrellas' />
                    </li>
                    <li>
                      <img src={iconStart} alt='Estrellas' />
                    </li>
                    <li>
                      <img src={iconStart} alt='Estrellas' />
                    </li>
                    <li>
                      <img src={iconStart} alt='Estrellas' />
                    </li>
                    <li>
                      <img src={iconStart} alt='Estrellas' />
                    </li>
                  </ul>
                  <h3>
                    $
                    {jobs.salary}
                  </h3>
                </article>
                <article>
                  <h1>Description</h1>
                  <p>{jobs.description}</p>
                </article>
              </section>
            );
          })}
        </div>
      </main>
    );
  }
}
