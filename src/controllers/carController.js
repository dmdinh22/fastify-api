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

// add car
exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body);
        return car.save();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// update a car
exports.updateCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const { ...updateData } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, {
            new: true
        });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// delete a car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
};
