const connectDB = require("./config/db");
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/UserRoute');
connectDB();

const app = express();
const port =process.env.PORT||4000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

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
