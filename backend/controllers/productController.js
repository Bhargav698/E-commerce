const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category: new RegExp(category, 'i') } : {};
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create product. Check input data.",
            error: err.message
        });
    }
}; 