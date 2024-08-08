const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  price: Number,
  image: String,
  recipe: String,
  email: {
    type: String,
    true: true,
    require: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
