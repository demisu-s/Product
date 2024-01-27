const Joi = require('joi');
const asyncHandler = require('express-async-handler');
const Product = require('../model/productModel');

// Get all products
exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    console.log('body data', req.body);
    res.status(200).json(products);
});

// Create a new product
exports.createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create({
        title: req.body.title,
        description: req.body.description
    });
    res.status(201).json(product);
});

// Update product by ID
exports.updateProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
});

// Delete product by ID
exports.deleteProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const productDelete = await Product.findByIdAndDelete(req.params.id);
    if (!productDelete) {
        return res.status(404).json({ error: 'Product not found for deletion' });
    }

    res.status(200).json({ productDelete, message: 'Deleted successfully' });
});
