// controllers/productController.js

exports.getAllProducts = (req, res) => { // Change the function name
    // Logic to fetch and return all products
    res.json({ message: 'Get all products' });
  };
  exports.createProducts = (req, res) => { 
    res.json({ message: 'create products' });
  };

  exports.updateProductsById = (req, res) => {
    // Logic to fetch and return product by ID
    res.json({ message: `update product by ID ${req.params.id}` });
  };
  exports.deleteProductById = (req, res) => {
    // Logic to fetch and return product by ID
    res.json({ message: `delete product by ID ${req.params.id}` });
  };
  