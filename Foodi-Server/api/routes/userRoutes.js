const express = require("express");
const router = express.Router;
const userController = require("../controllers/userControllers");
const varifyToken = "../middleware/varifyToken";
const varifyAdmin = require("../middleware/varifyAdmin");

router.get("/", varifyToken, varifyAdmin, userController.getAllUsers);
router.post("/", varifyToken, userController.createUser);
router.delete("/:id", varifyAdmin, varifyToken, userController.deleteUser);
router.patch("/:id", userController.updateUser);
router.get("/admin/:email", varifyToken, userController.getAdmin);
router.get("/admin/:id", varifyAdmin, varifyToken, userController.makeAdmin);
