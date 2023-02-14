const express = require("express");

const apartmentControllers = require("../controllers/apartmentControllers");

const router = express.Router();

router.route("/")
    .post(apartmentControllers.postApartment)
    .get(apartmentControllers.getApartments);

router.route("/:id").get(apartmentControllers.getApartmentById);

module.exports = router;