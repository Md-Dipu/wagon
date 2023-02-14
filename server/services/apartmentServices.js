const Apartment = require("../models/Apartment");

exports.insertApartment = async (data) => {
    const result = await Apartment.create(data);
    return result;
};

exports.findApartments = async (filters, queries) => {
    const apartments = await Apartment.find(filters)
        .limit(queries.limit)
        .select(queries.fields)
        .skip(queries.skip)
        .sort(queries.sortby);
    const count = await Apartment.countDocuments(filters);
    return {
        apartments,
        count
    };
};