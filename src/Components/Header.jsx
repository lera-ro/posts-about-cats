import React from 'react';
import './Header.css'; 

const Header = ({ isVisible }) => {
   return (
       <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-content">
          <div className="header-left">
            <img 
              src="https://cdn2.thecatapi.com/images/9bo.jpg" 
              alt="Аватар" 
              className="header-avatar"
            />
            <h1 className="header-title">Лента</h1>
          </div>
        </div>
       </header>
   );
};

export default Header;