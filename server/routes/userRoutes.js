const express = require("express");

const userControllers = require("../controllers/userControllers");

const router = express.Router();

router.route("/")
    .post(userControllers.postUser)
    .get(userControllers.getUsers);

module.exports = router;