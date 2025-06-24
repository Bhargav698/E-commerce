const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 