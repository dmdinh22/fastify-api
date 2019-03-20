const carController = require('../controllers/carController');

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    }
];

module.exports = routes;
