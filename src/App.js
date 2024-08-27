import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ruta a Header.js
import Footer from './components/Footer'; // Ruta a Footer.js (asegúrate de que el nombre del archivo sea correcto)
import Home from './components/Home'; // Ruta a Home.js
import Products from './components/Products'; // Ruta a Products.js
import Contact from './components/Contact'; // Ruta a Contact.js
import './App.css';

function App() {
    function MyComponent() {
        const [data, setData] = useState(null);
    
        useEffect(() => {
            fetch("http://localhost:5085/weatherforecast") // Asegúrate de usar la URL completa del backend
                .then(response => response.json())
                .then(data => {
                    setData(data); 
                })
                .catch(error => console.error("Error:", error));
        }, []);
    
        return (
            <div>
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Cargando datos...</p>
                )}
            </div>
        );
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <MyComponent /> {/* Aquí se usa MyComponent */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
