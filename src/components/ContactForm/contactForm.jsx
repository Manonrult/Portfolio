import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.scss';

// 👈 Import des icônes depuis React Icons (Font Awesome)
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

// Remplacez ces valeurs par VOS clés EmailJS
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatus('✅ Message envoyé avec succès !');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("❌ Échec de l'envoi. Veuillez réessayer.");
      }
    );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
      <h2 className="contact-form__title">Contact</h2>

      <div className="contact-form__fields">
        {/* Champ Nom et Prénom */}
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            <FaUser className="contact-form__icon" /> Nom et prénom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom et prénom *"
            required
            className="contact-form__input"
          />
        </div>

        {/* Champ Email */}
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            <FaEnvelope className="contact-form__icon" />{' '}
            {/* 👈 Utilisation de l'icône FaEnvelope */}
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Saisissez votre adresse email *"
            required
            className="contact-form__input"
          />
        </div>
      </div>

      {/* Champ Message */}
      <div className="contact-form__message-group">
        <label htmlFor="message" className="contact-form__label">
          <FaComment className="contact-form__icon" />{' '}
          {/* 👈 Utilisation de l'icône FaComment */}
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Saisissez votre message *"
          required
          rows="10"
          className="contact-form__textarea"
        ></textarea>
      </div>

      {/* Affichage du statut */}
      {status && <p className="contact-form__status">{status}</p>}

      {/* Bouton Envoyer */}
      <button
        type="submit"
        className="contact-form__submit-button"
        disabled={status === 'Envoi en cours...'}
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
