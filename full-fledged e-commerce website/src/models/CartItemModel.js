const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
  quantity: { type: Number, required: true, min: 1 },
})

const CartItemModel = mongoose.model('CartItems', DataSchema);

module.exports = CartItemModel;