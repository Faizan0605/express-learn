const express = require('express');

const app = express();

const productRouter = require('./routes/products');
const categoryRouter = require('./routes/category');

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});


app.use('/products', productRouter);
app.use('/category', categoryRouter);

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});