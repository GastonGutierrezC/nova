const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7555;

// Conectar a la base de datos (asegúrate de tener la configuración adecuada en 'connection.js')
const dbFile = require('./connection');

app.use(cors());
app.use(bodyParser.json());

// Importar rutas y modelo de usuario
const userRoute = require('./routes/user');

// Cambia app.get a app.post para la ruta '/api/user/adduser'
app.post('/api/user/adduser', userRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

app.listen(PORT, () => {
    console.log(`The NODE server is running correctly on port ${PORT}`);
});
