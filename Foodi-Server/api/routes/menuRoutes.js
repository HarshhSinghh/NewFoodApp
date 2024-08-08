const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const menuControler = require("../controllers/menuControllers");

router.get("/", menuControler.getAllMenuItems);
router.post("/", menuControler.addMenuItems);
router.delete("/:id", menuControler.deleteMenuItems);
router.get("/:id", menuControler.singleMenuItem);
router.patch("/:id", menuControler.updateMenuIte);
module.exports = router;
