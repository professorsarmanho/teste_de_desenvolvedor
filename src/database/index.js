const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste_de_desenvolvedor');
mongoose.Promise = global.Promise;

module.exports = mongoose;
