const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.static('public'))
app.use(express.json())

// Logger middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} request made to ${req.url}`);
//     next();
// });

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the E-Commerce API!</h1>');
});


app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// 404 Route Handler
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page not found</h1>');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});