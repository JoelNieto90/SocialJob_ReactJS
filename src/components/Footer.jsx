import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';
import PlatziMaster from '../assets/static/PlatziMaster.png';

const Footer = () => (
  <footer className='footer'>
    <Link to='/AboutUs' className='footer__AboutUs'>
      About Us
    </Link>
    <Link to='/' className='footer__DerechosReservados'>
      2020 By Central Develop, All rights reserverd.
    </Link>
    <section className='footer__PlatziMaster'>
      <img src={PlatziMaster} alt='Logo Platzi Master' />
      <Link to='/' className='footer__PlatziMaster__Text'>
        Platzi Master
      </Link>
    </section>
  </footer>
);

export default Footer;
