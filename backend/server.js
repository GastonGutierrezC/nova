const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7555;

// Conectar a la base de datos (asegúrate de tener la configuración adecuada en 'connection.js')
const dbFile = require('./connection');

// Middleware de CORS
const corsOptions = {
    origin: '*', // O ajusta esto según la URL de tu cliente
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Importar rutas y modelo de usuario
const userRoute = require('./routes/user');

// Configuración de CORS adicional
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Ruta para agregar usuarios
app.post('/api/user/adduser', userRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

app.listen(PORT, () => {
    console.log(`The NODE server is running correctly on port ${PORT}`);
});
