import React, { useState } from 'react';
import '../Css/AddProduct.css'
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    category: '',

  });

  //vdsdsdvsdvsdv

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
   
    console.log('Producto añadido:', product);

    axios.post('/api/user/addproduct')
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    
    setProduct({
      name: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
      category: '',
    });
  };

  return (
    <div className="add-product-container">
      <h2 className="section-title">Add Product</h2>
      <form>
        <div className="form-section">
          <label>Product name:</label>
          <input
            type="text"
            name="nombre"
            value={product.name}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="form-section">
          <label>Product descripcion:</label>
          <textarea
            name="descripcion"
            value={product.description}
            onChange={handleInputChange}
            className="input-field"
          ></textarea>
        </div>


        <div className="form-section">
          <label>Product price:</label>
          <input
            type="text"
            name="precio"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Quantity available:</label>
          <input
            type="text"
            name="cantidad"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Product image:</label>
          <input
            type="text"
            name="imagen"
            value={product.image}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Product category:</label>
          <input
            type="text"
            name="categoria"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={handleAddProduct} className="add-button">
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;