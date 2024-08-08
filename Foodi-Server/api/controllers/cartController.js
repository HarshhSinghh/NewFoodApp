const { json } = require("express");
const Carts = require("../models/Carts");

const getCartByEmail = async (res, req) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await Cart.find(query).exec();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  const { menuItemId, name, price, image, recipe, email } = req.body;
  try {
    const cartItem = await Carts.findOne(id);
    if (cartItem) {
      res.status(400).json({ message: "Already Added" });
    }
    const createCart = await Carts.create({
      menuItemId,
      name,
      price,
      image,
      recipe,
      email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  const paramId = req.params.id;
  try {
    const deleteCart = await Carts.findOneAndDelete(paramId);
    if (!deleteCart) {
      res.status(401).json({ message: "Item was Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  const cartId = req.params.id;
  const { menuItemId, name, price, image, recipe, email } = req.body;
  try {
    const updateCartItems = await Carts.findOneAndUpdate(
      cartId,
      { menuItemId, name, price, image, recipe, email },
      { new: true, runvalidator: true }
    );

    if (!updateCartItems) {
      res.status(404).json({ message: "Item was not found" });
    }
    res.status(200).json({ message: "Item has been Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartById = async (req, res) => {
  const cartId = req.params.id;
  try {
    const ElementId = await Carts.findById(cartId);
    res.status(401).json({ message: "Item has been added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCartByEmail,
  addToCart,
  deleteCart,
  updateCart,
  getCartById,
};
