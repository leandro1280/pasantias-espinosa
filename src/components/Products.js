import React, { useState, useEffect } from 'react';


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5085/products") // URL del backend para productos
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
