const productServices = require('../services/userServices')

const getUser = (req, res) => {
    const ans = productServices.GetUserMsg()
    res.send(ans);
};

const getUserById = (req, res) => {
    const id = productServices.getUserId(req)
    if (!id) {
        return handleError(res, { statusCode: 404, message: "Id not found" });
    }
    res.send(`Fetching user with ID: ${id}`);
};

const postUser = (req, res) => {
    const ans = productServices.PostUserMsg()
    res.send(ans);
};

module.exports = {
    getUser,
    postUser,
    getUserById
};
