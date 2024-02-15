const express = require('express');
const router = express.Router();
const { productValidator } = require("../middleware/productValidator");
const productController = require('../controllers/productController');
const { protect } = require("../middleware/authMiddleware");
const {adminValidator}=require("../middleware/adminValidator")

router.get('/',protect, productController.getAllProduct);
router.post('/',protect,productValidator,productController.createProduct);
router.put('/:id',protect, productController.updateProductById);
router.delete('/:id',protect, productController.deleteProductById);
router.get("/getAllProducts",protect,adminValidator,productController.getAllProducts)

module.exports = router;
