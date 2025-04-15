import React from 'react';
import './Header.css'; 

const Header = ({ isVisible }) => {
   return (
       <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
           <h1>Лента</h1>
       </header>
   );
};

export default Header;