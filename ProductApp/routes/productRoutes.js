
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts); // Change the route path

router.post('/products', productController.createProducts);

router.put('/products/:id', productController.updateProductsById);
router.delete('/products/:id', productController.deleteProductById); // Change the route path

module.exports = router;
