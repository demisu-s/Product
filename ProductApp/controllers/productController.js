const Joi = require("joi");
const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const User = require('../model/userModel');


//get all product controller for admin only
exports.getAllProducts=asyncHandler(async(req,res)=>
{
  const product=await Product.find();
  res.status(200).json(product)
})

// Get all products
exports.getAllProduct = asyncHandler(async (req, res) => {
  const product = await Product.find({user:req.user.id});
  res.status(200).json(product);
});


//create product 
exports.createProduct = asyncHandler(async (req, res) => {

    const product = await Product.create({
      user:req.user.id,
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity,
    });
  
    res.status(201).json(product);
  });



// Update product by ID
exports.updateProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  
}

const user=await User.findById(req.user.id)
if(!user){
  res.status(401).json({error:"User Not found"})
}
if(product.user.toString()!==user.id){
  res.status(401).json({error:"user Not authirized"})
}

 const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{ new: true });
  res.status(200).json(updatedProduct);
});

// Delete product by ID
exports.deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const user=await User.findById(req.user.id)
if(!user){
  res.status(401).json({error:"User Not found"})
}
if(product.user.toString()!==user.id){
  res.status(401).json({error:"user Not authirized"})
}

  const productDelete = await Product.findByIdAndDelete(req.params.id);
  if (!productDelete) {
    return res.status(404).json({ error: "Product not found for deletion" });
  }

  res.status(200).json({ productDelete, message: "Deleted successfully" });
});




