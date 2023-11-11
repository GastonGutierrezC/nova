const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    productId: String,
    type: String,   
    species: String,   
    image: String,     
    quantity: Number   
});

const ProductModel = mongoose.model('products', productSchema);

// Route to get all products
router.get('/showproducts', async (req, res) => {
    try {
        const products = await ProductModel.find(); // Retrieve all products from the database
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message); // Handle the error properly
    }
});

module.exports = router;

