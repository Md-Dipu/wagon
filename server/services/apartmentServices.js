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

exports.findApartmentById = async (id) => {
    const apartment = await Apartment.findById(id);
    if (!apartment) {
        throw new Error("Document not found");
    }

    return apartment;
};

exports.deleteApartmentById = async (id) => {
    const result = await Apartment.deleteOne({
        _id: id
    });

    if (!result.deletedCount) {
        throw new Error("Document not found");
    }

    return result;
};