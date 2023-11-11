import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Testimonial from './ProductInformation';

function ProductAllInformation() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make a request to fetch all products from the server route
    axios.get('/api/products/showproducts')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Food Information</h2>
      <div className="testimonials-container">
        {products.map((product) => (
          <Testimonial
            key={product.productId}
            name={product.name}
            position={`Price: ${product.price}`}
           // testimony={product.description}
            image={"Foo2"} // Pasa la propiedad de la imagen
            type={product.type} // Pasa la propiedad del tipo
            species={product.species} // Pasa la propiedad de la especie
            quantity={product.quantity} // Pasa la propiedad de la cantidad
          />
        ))}
      </div>
    </div>
  );
}

export default ProductAllInformation;

