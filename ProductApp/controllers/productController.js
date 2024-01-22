// controllers/productController.js
const joi=require('joi')
exports.getAllProducts = (req, res) => { // Change the function name
    // Logic to fetch and return all products
    console.log("body data",req.body)
    res.status(200).json({ message: 'Get all products' });
  };
  exports.createProducts = (req, res) => { 
    // if(!req.body.title)
    // {
    // res.status(200).json({ message: 'please add title' });
    // }
    // if(!req.body.description)
    // {
    //   res.status(200).json({ message: 'please add description' });
    //   }
    const schema=joi.object({
      title:joi.string().required(),
    description:joi.string().required()    })

    const {error,value}=schema.validate(req.body)
    if(error){
      res.status(400).json({error:error.details.map(error=>error.message)})
    }
  };

  exports.updateProductsById = (req, res) => {
    // Logic to fetch and return product by ID
    res.status(200).json({ message: `update product by ID ${req.params.id}` });
  };
  exports.deleteProductById = (req, res) => {
    // Logic to fetch and return product by ID
    res.status(200).json({ message: `delete product by ID ${req.params.id}` });
  };
  