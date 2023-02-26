const express = require("express");

const apartmentControllers = require("../controllers/apartmentControllers");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.route("/")
    .post(verifyToken, authorization("admin"), apartmentControllers.postApartment)
    .get(apartmentControllers.getApartments);

router.route("/:id")
    .get(apartmentControllers.getApartmentById)
    .delete(verifyToken, authorization("admin"), apartmentControllers.deleteApartmentById);

module.exports = router;