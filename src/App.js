import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ruta a Header.js
import Footer from './components/footer'; // Ruta a Footer.js
import Home from './components/home'; 
import Products from './components/product'; // Ruta a Products.js
import Contact from './components/contact'; // Ruta a Contact.js
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


// function MyComponent() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:5085/weatherforecast") // Asegúrate de usar la URL completa del backend
//             .then(response => response.json())
//             .then(data => {
//                 setData(data); 
//             })
//             .catch(error => console.error("Error:", error));
//     }, []);

//     return (
//         <div>
//             {data ? (
//                 <pre>{JSON.stringify(data, null, 2)}</pre>
//             ) : (
//                 <p>Cargando datos...</p>
//             )}
//         </div>
//     );
// }

