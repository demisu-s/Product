const connectDB = require("./config/db");
require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/UserRoute');
connectDB();

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
