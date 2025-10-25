import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="topbar">
      <div className="logo">SINET</div>
        <button className="helpline-btn">Help Line</button>
        <button className="whatsapp-btn">WhatsApp</button>
    </header>
  );
}

export default Header;