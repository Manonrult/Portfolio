import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconFlower from '../../assets/Fleurs/fleur-jaune.webp';
import '../Footer/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="mailto:manon-ru@live.fr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Envoyer un email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Manonrult"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="http://linkedin.com/in/manon-ruault-2011b6189/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__info">
        <img src={IconFlower} alt="Flower Icon" className="footer__icon" />
        <p className="footer__copyright">Manon Ruault | 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
