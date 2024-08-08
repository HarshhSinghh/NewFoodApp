const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const getAllMenuItems = async (req, res) => {
  try {
    const menu = await Menu.find({}).sort({ createdAt: -1 });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post a new Menu Item

const addMenuItems = async (req, res) => {
  const newItem = req.body;

  try {
    const result = await Menu.create(newItem);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMenuItems = async (res, req) => {
  const menuId = req.body.id;
  try {
    const deleteItem = Menu.findByIdAndDelete(menuId);
    if (!deleteItem) {
      return res.status(404).json({ message: "Menu Not Found" });
    }
    res.status(200).json({ message: "The Item Has Been Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get Single Menu Item

const singleMenuItem = async (res, req) => {
  const itemId = req.body.id;
  try {
    const menu = await Menu.findById(itemId);
    res.status(200).json({ menu });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMenuIte = async (res, req) => {
  const menuId = req.body.id;
  const { name, category, price, image, description } = req.body;
  try {
    const updateMenuItem = await Menu.findByIdAndUpdate(
      menuId,
      { name, category, price, image, description },
      { new: true, runValidators: true }
    );
    if (!updateMenuItem) {
      res.status.json({ message: "Item Not Updated" });
    }
    res.status(200).json({ message: "Item has been Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenuItems,
  addMenuItems,
  deleteMenuItems,
  singleMenuItem,
  updateMenuIte,
};
