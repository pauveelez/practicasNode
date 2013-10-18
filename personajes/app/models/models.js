var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/' + 'personajes');

module.exports = mongoose;