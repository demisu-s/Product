const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct); // Corrected function name

router.put('/products/:id', productController.updateProductById); // Corrected function name
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
