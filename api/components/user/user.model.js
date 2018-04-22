const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: {type: String, required:true},
  secondName: {type: String},
  firstSurname: {type: String, required: true},
  secondSurname: {type: String},
  id: {type: String, require: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  userRole: {type: String, required: true},
  birthdate: {type: Date},
  phone: {type: String}
});

// nombrar el alias en singular y con mayúscula al inicio
module.exports = mongoose.model('User', UserSchema);