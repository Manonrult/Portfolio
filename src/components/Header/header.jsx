import { NavLink } from 'react-router-dom';
import icon from '../../assets/Fleurs/fleur-jaune.webp';
import '../Header/header.scss';

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__brand">
        <img src={icon} alt="Flower Icon" className="header__icon" />
        <span>Manon Ruault</span>
      </NavLink>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="nav__item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
