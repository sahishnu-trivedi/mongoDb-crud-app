const Product = require("../models/product.model");

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.json({success: true, products});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

const getSingleProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.json({success: true, product});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// Add Product
const addProduct = async(req, res) => {
    try {
        const addNewProduct = await Product.create(req.body)
        res.json({success: true, addNewProduct})   
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// Update Product
const updateProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatedProduct){
            return res.json({success: false, message: "Product Not Found"});
        }
        // const updatedProductList = await Product.find({});
        res.json({success: true, updatedProduct});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// Delete Product
const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteAProduct = await Product.findByIdAndDelete(id)
        if(!deleteAProduct) return res.json({success: false, message: "Product Not found"});
        const newProductList = await Product.find({});
        res.json({success: true, newProductList})   
    } catch (error) {
        res.json({success: false, error: error.message});
    }
}

module.exports = {
    getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct
}