const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.static('public'))
app.use(express.json())



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'testdb1'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const creationQuery = `create table(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return
        }
        console.log("Table is created")
    })



})









app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

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