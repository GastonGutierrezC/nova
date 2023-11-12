const express = require('express');
const cors = require('cors');  // Asegúrate de haber instalado el paquete cors

const app = express();
const PORT = process.env.PORT;

// Import connection
const dbFile = require('./connection');

// Import routes and user model
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

const bodyParser = require('body-parser');

app.use(cors());  // Agrega este middleware para habilitar CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/user', userRoute);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

app.listen(7455, function () {
    console.log("The NODE server is running correctly");
});

