const productServices = require("../services/productServices")

const getProduct = (req, res) => {
    const ans = productServices.getProductMsg()
    res.send(ans);
}

const getProductById = (req, res) => {
    const id = productServices.getProductId(req)
    res.send(`Fetching product with ID: ${id}`);
}

const postProduct = (req, res) => {
    const ans = productServices.postProductMsg()
    res.send(ans);
}


module.exports = {
    getProduct,
    postProduct,
    getProductById
}