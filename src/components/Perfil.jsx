import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Perfil.scss';
import fotoPrueba from '../assets/static/fotoPrueba.jpg';

import intersect from '../assets/static/Intersect.png';
import editar from '../assets/static/editar.png';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  componentWillMount() {
    const { id } = this.props.user;
    axios.get(`/user/${id}`).then(
      (res) => {
        const { data } = res.data;
        this.setState({
          profile: data,
        });
      },
      (err) => {
        console.log(err);
      },
    );
  }

  handleClickDelete = (e) => {
    if (this.props.user) {
      const { id } = this.props.user;
      e.preventDefault();
      axios
        .delete(`/user/${id}`)
        .then((res) => {
          localStorage.clear();
          this.setState({
            deleteTrue: true,
          });
          this.props.setDelete(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.state.deleteTrue) {
      return <Redirect to='/' />;
    }
    return (
      <main className='container'>
        <section className='perfil'>
          <Link to='/registerupdate'>
            <button className='perfil__editar' style={{ backgroundImage: `url(${editar})` }} />
          </Link>
          <figure className='perfil__img'>
            <img src={fotoPrueba} alt='Foto de perfil' />
          </figure>
          <div className='perfil__profesion' style={{ backgroundImage: `url(${intersect})` }}>
            <p className='perfil__profesion-titulo'>
              {this.state.profile.fullname}
            </p>
          </div>
          <section>
            <Link to='/' className='button' onClick={this.handleClickDelete}>
              Delete User
            </Link>
          </section>
        </section>

        <div className='favoritos'>
          <Link to='/Favoritos'>
            <button className='favoritos__boton'>Favorite Jobs</button>
          </Link>
        </div>
        <section className='info-general'>
          <button className='info-general__editar' />
          <h3 className='info-general__titulo'>Información General</h3>
          <div className='info-general__container'>
            <div className='info-general__container--personal'>
              <p className='nombreTitulo'> Nombre:</p>
              <p className='nombre'>{this.state.profile.fullname}</p>
            </div>
            <div className='info-general__container--usuario'>
              <p className='usuarioTitulo'> Usuario:</p>
              <p className='correoTitulo'> Correo:</p>
              <p className='usuario'>{this.state.profile.username}</p>
              <p className='correo'>{this.state.profile.email}</p>
            </div>
          </div>
        </section>
        <section className='vacantes'>
          <h3 className='vacantes__titulo'>Vacantes Favoritas</h3>
          <div className='vacantes__container'>
            <div className='vacantes__container--vacante'>
              <p>{this.state.profile.favorite}</p>
              <button className='editar' />
              <button className='borrar' />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
