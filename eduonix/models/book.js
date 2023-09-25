const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, require: true }, 
  pages: { type: Number }, 
  publisher: { type: String, require: true }, 
});

exports.Book = mongoose.model('Book', bookSchema);