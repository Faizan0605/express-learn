const cartServices = require('../services/cartServices')

const getCartByUserId = (req, res) => {
    const userid = cartServices.getUserId(req)
    if (!userid) {
        return handleError(res, { statusCode: 404, message: "Id not found" });
    }
    res.send(`Fetching cart for user with ID: ${userid}`);
};

const postCartByUserId = (req, res) => {
    const userid = cartServices.getUserId(req)
    if (!userid) {
        return handleError(res, { statusCode: 404, message: "Id not found" });
    }
    res.send(`Adding product to cart for user with ID: ${userid}`);
};

module.exports = {
    getCartByUserId,
    postCartByUserId,
};
