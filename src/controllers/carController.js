const boom = require('boom');
const Car = require('../models/Car');

// get all cars
exports.getCars = async (req, reply) => {
    try {
        const cars = await Car.find();
        return cars;
    } catch (err) {
        throw boom.boomify(err);
    }
};
