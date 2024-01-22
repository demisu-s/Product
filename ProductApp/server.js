
const connectDB=require("./config/db")
require('dotenv').config();

const express = require('express');
const productRoutes = require('./routes/productRoutes'); 
connectDB()
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
