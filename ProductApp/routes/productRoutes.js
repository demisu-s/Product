const express = require('express');
const router = express.Router();
const { productValidator } = require("../middleware/productValidator");
const productController = require('../controllers/productController');
const { protect } = require("../middleware/authMiddleware");

router.get('/', productController.getAllProducts);
router.post('/',protect,productValidator,productController.createProduct);

 

router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);

module.exports = router;
