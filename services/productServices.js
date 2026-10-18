const getProductId = (req) => {
    return req.params.id;
}

const getProductMsg = () => {
    return "All product fetched"
}
const postProductMsg = () => {
    return "Product created"
}

module.exports = {
    getProductId,
    getProductMsg,
    postProductMsg
}