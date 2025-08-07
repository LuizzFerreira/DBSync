import React, { useRef, useEffect } from 'react';

export default function Navbar({ menuOpen, setMenuOpen, showNavbar, showContact, setShowContact }) {
  const navRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      if (
        showContact &&
        contactRef.current &&
        !contactRef.current.contains(event.target) &&

        !(event.target.closest('a[href="#contact"]'))
      ) {
        setShowContact(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, showContact, setMenuOpen, setShowContact]);


  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar--hidden'}`} ref={navRef}>
      <img src={process.env.PUBLIC_URL + "/img/iconeDBSyncBlack.png"} alt="Logo" width={100} height="auto" style={{ cursor: 'pointer' }}
        onClick={() => {
          document.getElementById('home-container').scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }}
      />
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home" onClick={e => {
            e.preventDefault();
            document.getElementById('home-container').scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
          }}>Início</a>
        </li>
        <li>
          <a href="#home-sobre" onClick={e => {
            e.preventDefault();
            document.getElementById('home-sobre').scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
          }}>Sobre</a></li>
        <li>
          <a href="#home-services" onClick={e => {
            e.preventDefault();
            document.getElementById('home-services').scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
          }}>Serviços</a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              setShowContact(true);
              setMenuOpen(false);
            }}
          >
            Contato
          </a>
        </li>
      </ul>
      <div
        id="contact-section"
        className={`contact-slide${showContact ? ' open' : ''}`}
        ref={contactRef}
        aria-hidden={!showContact}
      >
        <p>Email: contato@seudominio.com</p>
        <p>Telefone: (21) 3444-9393</p>
      </div>
    </nav>
  );
}