const express = require('express');

const app = express();

// // Body parser middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const productRouter = require('./routes/products');
const categoryRouter = require('./routes/category');
const booksRouter = require('./routes/books');
const studentRouter = require('./routes/students');
const courseRouter = require('./routes/courses');

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the School Portal API!</h1>');
});


app.use('/students', studentRouter);
app.use('/courses', courseRouter);


app.use((req, res) => {
    res.status(404).send('<h1>404 - Page not found</h1>');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});