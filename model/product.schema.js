const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
