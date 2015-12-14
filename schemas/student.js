var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name : String,
  account : String,
  peso: String,
  destino: String,
  estado: String,
});
module.exports = mongoose.model('Student', StudentSchema);
