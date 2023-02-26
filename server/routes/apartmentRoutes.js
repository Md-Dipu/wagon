const express = require("express");

const apartmentControllers = require("../controllers/apartmentControllers");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.route("/")
    .post(verifyToken, apartmentControllers.postApartment)
    .get(apartmentControllers.getApartments);

router.route("/:id")
    .get(apartmentControllers.getApartmentById)
    .delete(verifyToken, apartmentControllers.deleteApartmentById);

module.exports = router;