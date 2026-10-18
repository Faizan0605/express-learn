const productServices = require("../services/productServices")
const path = require('path');
const getProduct = (req, res) => {
    // const ans = productServices.getProductMsg()
    res.sendFile(path.join(__dirname, "..", "view", "products.html"));
}

const getProductById = (req, res) => {
    const id = productServices.getProductId(req)
    res.send(`Fetching product with ID: ${id}`);
}

const postProduct = (req, res) => {

    const data = req.body;

    res.json({ value: data.productName });
}


module.exports = {
    getProduct,
    postProduct,
    getProductById
}