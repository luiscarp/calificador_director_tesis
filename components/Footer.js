import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=' mt-10' style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px' }}>
      <p>Luiscarp todos los derechos reservados</p>
      <Link href="https://github.com/luiscarp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '24px' }} />
      </Link>
    </footer>
  );
};

export default Footer;
