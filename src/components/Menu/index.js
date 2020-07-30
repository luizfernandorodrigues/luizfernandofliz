import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="LuizFernandoFlix Logo" />
      </a>
      <Button as="a" className="ButtonLink" hre="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
