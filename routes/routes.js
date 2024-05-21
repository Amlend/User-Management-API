const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/add", userController.postUser);

router.put("/update/:id", userController.putUser);

router.delete("/delete/:id", userController.deleteUser);

router.get("/get/:id", userController.getUser);

router.get("/get", userController.getAllUsers);

module.exports = router;
