const carController = require('../controllers/carController');

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar
    }
];

module.exports = routes;
