const Apartment = require("../models/Apartment");

exports.insertApartmentService = async (data) => {
    const result = await Apartment.create(data);
    return result;
};