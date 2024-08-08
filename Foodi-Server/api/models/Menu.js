// const mongoose = require("mongoose");
// const { Schema } = mongoose;
const mongoose = require("mongoose");
const { Schema } = mongoose;
// create Schema Object for menu items

const menuSchima = new Schema({
  name: { type: String, trim: true, required: true, minlength: 3 },
  recipe: String,
  image: String,
  category: String,
  prices: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// create Model
const Menu = mongoose.model("Menu", menuSchima);
module.exports = Menu;
