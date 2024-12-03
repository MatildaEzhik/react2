import React from 'react';

function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <h1>library</h1>
      <nav>
        <a href="#" style={{ margin: '0 15px' }}>Home</a>
        <a href="#" style={{ margin: '0 15px' }}>About</a>
        <a href="#" style={{ margin: '0 15px' }}>Contact</a>
      </nav>
      <p> +9989(93) 345-55-27 |  library@site.com</p>
    </header>
  );
}

export default Header;
