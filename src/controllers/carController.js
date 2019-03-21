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

// get 1 car by id
exports.getSingleCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
};
