const productServices = require("../services/productServices")
const path = require('path');

const { handleError } = require('../utils/utils.js')

const getProduct = (req, res) => {
    // const ans = productServices.getProductMsg()
    res.sendFile(path.join(__dirname, "..", "view", "products.html"));
}

const getProductById = (req, res) => {
    const id = productServices.getProductId(req)
    if (id > 10) return handleError(res, { statusCode: 404, message: "Id not found" });
    res.send(`Fetching product with ID: ${id}`);
}

const postProduct = (req, res) => {

    const data = req.body;

    if (!data) {
        return handleError(res, { statusCode: 404, message: "data not present" });
    }

    res.json({ value: data.productName });
}


module.exports = {
    getProduct,
    postProduct,
    getProductById
}