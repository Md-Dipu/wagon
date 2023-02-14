const express = require("express");

const userControllers = require("../controllers/userControllers");

const router = express.Router();

router.route("/")
    .post(userControllers.postUser)
    .get(userControllers.getUsers);

router.route("/id/:id")
    .get(userControllers.getUserById);

router.route("/email/:email")
    .get(userControllers.getUserByEmail);

module.exports = router;