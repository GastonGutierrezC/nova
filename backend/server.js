const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

// Import connection
const dbFile = require('./connection');

// Import routes and user model
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/user', userRoute);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

app.listen(7555, function () {
    console.log("The NODE server is running correctly");
});
