import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/AboutUs.scss';

import BannerAbouUs from '../assets/static/BannerAbouUs.PNG';
import Montview from '../assets/static/Montview.PNG';
import mision from '../assets/static/mision.webp';
import vision from '../assets/static/vision.webp';

const AboutUs = () => (
  <main className='mainAboutUs'>
    <section className='Banner'>
      <p>ABOUT US</p>
      <img src={BannerAbouUs} alt='Laptop Social Jobs' />
    </section>
    <section className='history'>
      <section className='history__image'>
        <img src={Montview} alt='Laptop Social Jobs' />
      </section>
      <div className='history__Text'>
        <h1>Our History</h1>
        <p>
          We are a team of developers that belong to the Platzi Master program
          who are responsible for implementing, developing and supporting Social
          Job, a platform created in 2020 with the aim of creating a global
          community that allows sharing job vacancies and contributing to fight
          unemployment. and improve people's opportunities.
        </p>
      </div>
    </section>
    <section className='valores'>
      <article className='valores__imagenes'>
        <div className='valores__imagenes--1'>
          <img src={mision} alt='Laptop Social Jobs' />
          <p>Vision</p>
        </div>
        <div className='valores__imagenes--2'>
          <img src={vision} alt='Laptop Social Jobs' />
          <p>Mission</p>
        </div>
      </article>
      <article className='valores__Text'>
        <p>
          Our mission is to help combat the pandemic caused this year through a
          network of users who collaborate in the publication of job offers and
          thus combat unemployment.
        </p>
        <p>
          Central Develop's vision is to make this platform the largest
          community in the world for the publication of job offers.
        </p>
      </article>
    </section>
  </main>
);

export default AboutUs;
