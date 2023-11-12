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

// ... (código anterior)

return (
  <div>
    <h2>Food Information</h2>
    <div className="testimonials-container">
      {console.log('Products:', products)}
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Testimonial
            key={product.productId}
            name={product.name}
            position={`Price: ${product.price}`}
            image={"Foo2"}
            type={product.type}
            species={product.species}
            quantity={product.quantity}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  </div>
);

}

export default ProductAllInformation;


