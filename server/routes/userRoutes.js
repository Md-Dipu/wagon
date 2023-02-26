const express = require("express");

const userControllers = require("../controllers/userControllers");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.route("/")
    .post(userControllers.postUser)
    .get(verifyToken, userControllers.getUsers);

router.route("/id/:id")
    .get(verifyToken, userControllers.getUserById);

router.route("/email/:email")
    .get(verifyToken, userControllers.getUserByEmail)
    .patch(verifyToken, userControllers.updateUserByEmail)
    .delete(verifyToken, userControllers.deleteUserByEmail);

module.exports = router;