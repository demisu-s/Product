const express = require('express');
const router = express.Router();
const { productValidator } = require("../middleware/productValidator");
const productController = require('../controllers/productController');
const { protect } = require("../middleware/authMiddleware");
const {adminValidator}=require("../middleware/adminValidator")

router.get('/', productController.getAllProduct);
router.post('/',protect,productValidator,productController.createProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);
router.get("/getAllProducts",protect,adminValidator,productController.getAllProducts)

module.exports = router;
