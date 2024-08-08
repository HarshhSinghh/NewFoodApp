const express = require("express");
const Cart = require("../models/Carts");
const router = express.Router();
const CartController = require("../controllers/cartController");
const varifyToken = require("../middleware/varifyToken");

router.get(
  "/get",
  varifyToken,
  CartController.getCartByEmail("/add", CartController.addToCart)
);
router.delete("/del", CartController.deleteCart);
router.patch("/update/:id", CartController.updateCart);
router.post("/post/<:id>", CartController.getCartById);

module.exports = router;
