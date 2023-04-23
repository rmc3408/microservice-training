const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true }, 
  city: { type: String, require: true }, 
});

exports.Customer = mongoose.model('Customer', customerSchema);