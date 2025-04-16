import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://img.icons8.com/?size=100&id=60985&format=png&color=000000" alt="МТ.ру" className="logo-icon" />
        <span className="logo-text">мт.ру</span>
      </div>
      
      <ul className="nav-links">
        <li className="nav-item active">
          <img src="https://img.icons8.com/?size=100&id=BHnsyJNanM0s&format=png&color=000000" alt="tv" className="logo-icon" />
          <span className="logo-text">Лента</span>
        </li>
        <li className="nav-item">
          <img src="https://img.icons8.com/?size=100&id=FeMGLYaMqWh5&format=png&color=000000" alt="channel" className="logo-icon" />
          <span className="logo-text">Каналы</span>
        </li>
        <li className="nav-item">
          <img src="https://img.icons8.com/?size=100&id=111348&format=png&color=000000" alt="video" className="logo-icon" />
          <span className="logo-text">Видео</span>
        </li>
        <li className="nav-item">         
          <img src="https://img.icons8.com/?size=100&id=qePzjQLJYgjF&format=png&color=000000" alt="saved" className="logo-icon" />
          <span className="logo-text">Сохранённое</span>
        </li>
        <li className="nav-item">
          <img src="https://img.icons8.com/?size=100&id=vO7OEBzN3y9a&format=png&color=000000" alt="note" className="logo-icon" />
          <span className="logo-text">Уведомления</span>
          <span className="badge">1</span>
        </li>
        <li className="nav-item">
          <img src="https://img.icons8.com/?size=100&id=QxNDCQCA0COh&format=png&color=000000" alt="chat" className="logo-icon" />
          <span className="logo-text">Чаты</span>
          <span className="badge">1</span>
        </li>
      </ul>

      <div className="nav-footer">
        <button className="about-button">
          <img src="https://img.icons8.com/?size=100&id=77&format=png&color=000000" alt="about" className="logo-icon" />         
          <span className="logo-text">О компании...</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;