import React from 'react';
import '../styles/Header.css'; // Asegúrate de incluir la extensión .css

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">Primeros Impactos</a>
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/products">Nuestros Productos</a></li>
                    <li><a href="/about">Nosotros</a></li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="/register">Registro</a></li>
                    <li><a href="/login">Iniciar Sesión</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
