function handleError(res, err) {
    return res.status(err.statusCode).json({
        message: err.message,
        status: false
    })
}

module.exports = { handleError }