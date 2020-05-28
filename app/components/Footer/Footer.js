import React from 'react';
import { useStore } from 'react-redux';
import './Footer.scss';

// logo.

// import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

function Footer() {
  const store = useStore();
  const { router } = store.getState();
  const path = router.location.pathname;

  if (path === '/login' || path === '/register') {
    return (
      <footer className="footer-custom">
        <a href="/">Términos y condiciones</a>
        <a href="/">Política de privacidad</a>
        <a href="/">Centro de ayuda</a>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <a href="/">Términos y condiciones</a>
      <a href="/">Política de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </footer>
  );
}

export default Footer;
