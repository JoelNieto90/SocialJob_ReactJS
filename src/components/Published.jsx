import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Published.scss';

import MovileSocialJobs from '../assets/static/MovileSocialJobs.PNG';
import BannerPublished from '../assets/static/BannerPublished.PNG';

export default class Published extends Component {
  state = {};

  handleSubmit = (e) => {
    const { id } = this.props.user;

    const { token } = this.props.user;

    const config = {
      //headers: { Authorization: `Bearer ${token}` },
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2QwODk1MjM5OWMwMDAxNzRmNjkyYiIsImVtYWlsIjoiZ29vbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imdvb2wiLCJpYXQiOjE2MDIwODExMTd9.ZmpSupCnpD2rI6MUjEimiprei7fCSdre-rd4OWZw8W8' },
    };

    e.preventDefault();
    const data = {
      position: this.position,
      company: this.company,
      salary: this.salary,
      country: this.country,
      city: this.city,
      url: this.jobURL,
      image: this.imageURL,
      description: this.description,
      skill: [this.skills1, this.skills2, this.skills3, this.skills4],
      rating: this.raiting,
      user: id,
    };

    console.log(data);

    axios
      .post('/post/create/', data, config)
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.props.user) {
      return (
        <main className='mainPublished'>
          <section className='Banner'>
            <p>Published</p>
            <img src={BannerPublished} alt='Banner Published' />
          </section>

          <form onSubmit={this.handleSubmit}>
            <section className='published'>
              <section className='published__image'>
                <img src={MovileSocialJobs} alt='Movil Social Jobs' />
              </section>
              <section className='published__Text'>
                <h1>Fil in the form to post a vacancy</h1>

                <div className='published__Text__Inputs'>
                  <label>Position</label>
                  <input
                    type='text'
                    placeholder='Position'
                    onChange={e => (this.position = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Company</label>
                  <input
                    type='text'
                    placeholder='Company'
                    onChange={e => (this.company = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Salary</label>
                  <input
                    type='text'
                    placeholder='Salary'
                    onChange={e => (this.salary = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Country</label>
                  <input
                    type='text'
                    placeholder='Location'
                    onChange={e => (this.country = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>City</label>
                  <input
                    type='text'
                    placeholder='Location'
                    onChange={e => (this.city = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Job URL</label>
                  <input
                    type='text'
                    placeholder='Job URL'
                    onChange={e => (this.jobURL = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Image URL</label>
                  <input
                    type='text'
                    placeholder='Image URL'
                    onChange={e => (this.imageURL = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Description</label>
                  <textarea
                    name='Description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    onChange={e => (this.description = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Raiting</label>
                  <input
                    type='text'
                    placeholder='Skills'
                    onChange={e => (this.raiting = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Skill 1</label>
                  <input
                    type='text'
                    placeholder='Skills'
                    onChange={e => (this.skills1 = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Skill 2</label>
                  <input
                    type='text'
                    placeholder='Skills'
                    onChange={e => (this.skills2 = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Skill 3</label>
                  <input
                    type='text'
                    placeholder='Skills'
                    onChange={e => (this.skills3 = e.target.value)}
                  />
                </div>
                <div className='published__Text__Inputs'>
                  <label>Skill 4</label>
                  <input
                    type='text'
                    placeholder='Skills'
                    onChange={e => (this.skills4 = e.target.value)}
                  />
                </div>
                <button className='button'>Register</button>
              </section>
            </section>
          </form>
        </main>
      );
    }
    return <h2>Necesitas Logearte para poder publicar</h2>;
  }
}
