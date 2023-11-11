const mongoose = require('mongoose');
// fot5s3nZTj16toGw
//mongoose.connect('mongodb+srv://gaston:aQZ2DCbqVdnd37iz@cluster0.gswhopq.mongodb.net/productos')
mongoose.connect('mongodb+srv://novateammypetshop:PNe5EGUIt2OHALOH@cluster0.n4sbjz1.mongodb.net/MyPetShop')
//mongoose.connect('mongodb+srv://nova:fot5s3nZTj16toGw@cluster0.n4sbjz1.mongodb.net/MyPetShop')
const dbObject = mongoose.connection;

dbObject.on('connected', () => {
    console.log('Successful connection to MongoDB'); // Use console.log to display success messages
});

dbObject.on('error', (err) => {
    console.error('Error connecting to MongoDB:'); // Use console.error to display error messages
});

module.exports = mongoose;