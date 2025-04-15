import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
   return (
    <nav className="navbar">
        <p>Лента</p>
        <p>Каналы</p>
        <p>Видео</p>
        <p>Сохраненное</p>
        <p>Уведомления</p>
        <p>Чаты</p>
    </nav>
   )
};

export default Navbar;