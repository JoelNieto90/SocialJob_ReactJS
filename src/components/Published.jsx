import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';
import '../assets/styles/components/Published.scss';

import MovileSocialJobs from '../assets/static/MovileSocialJobs.PNG';
import BannerPublished from '../assets/static/BannerPublished.PNG';

const Published = () => (
  <main className='mainPublished'>
    <section className='Banner'>
      <p>Published</p>
      <img src={BannerPublished} alt='Banner Published' />
    </section>
    <section className='published'>
      <section className='published__image'>
        <img src={MovileSocialJobs} alt='Movil Social Jobs' />
      </section>
      <section className='published__Text'>
        <h1>Fil in the form to post a vacancy</h1>
        <div className='published__Text__Inputs'>
          <label>Position</label>
          <input type='text' placeholder='Position' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Company</label>
          <input type='text' placeholder='Company' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Salary</label>
          <input type='text' placeholder='Salary' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Location</label>
          <input type='text' placeholder='Location' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Job URL</label>
          <input type='text' placeholder='Job URL' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Image URL</label>
          <input type='text' placeholder='Image URL' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Description</label>
          <textarea name='Description' cols='30' rows='5' placeholder='Description' />
        </div>
        <div className='published__Text__Inputs'>
          <label>Skils</label>
          <input type='text' placeholder='Skills' />
        </div>
        <section className='buttonText'>
          <Link to='/Jobs'>Post</Link>
        </section>
      </section>
    </section>
  </main>
);

export default Published;
