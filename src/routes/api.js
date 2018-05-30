import {Router} from 'express'
const router = Router();

import * as Manufacturer from '../controllers/manufacturer_controller'
import * as Model from '../controllers/model_controller'
import * as Car from '../controllers/car__controller'

//Manufacturer
router.get('/manufacturers', function (req, res) {
    Manufacturer.getManufacturers(req, function (err, manufacturers) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(manufacturers);
    });
});
router.get('/manufacturers/:_id', function (req, res) {
    Manufacturer.getManufacturerById(req.params._id, function (err, manufacturer) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(manufacturer);
    });
});
router.post('/manufacturers', function (req, res) {
    let manufacturer = req.body;
    Manufacturer.addManufacturer(manufacturer, function (err, manufacturer) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(manufacturer);
    });
});
router.put('/manufacturers/:_id', function (req, res) {
    let id = req.params._id;
    let manufacturer = req.body;
    Manufacturer.updateManufacturer(id, manufacturer, {}, function (err, manufacturer) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(manufacturer);
    });
});

router.delete('/manufacturers/:_id', function (req, res) {
    let id = req.params._id;
    Manufacturer.deleteManufacturer(id, function (err, manufacturer) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(manufacturer);
    });
});

//Model
router.get('/models', function (req, res) {
    Model.getModels(req, function (err, models) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(models);
    });
});
router.get('/models/:_id', function (req, res) {
    Model.getModelById(req.params._id, function (err, model) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(model);
    });
});

router.post('/models', function (req, res) {
    let model = req.body;
    Model.addModel(model, function (err, model) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(model);
    });
});
router.put('/models/:_id', function (req, res) {
    let id = req.params._id;
    let model = req.body;
    Model.updateModel(id, model, {}, function (err, model) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(model);
    });
});

router.delete('/models/:_id', function (req, res) {
    let id = req.params._id;
    Model.deleteModel(id, function (err, model) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(model);
    });
});

//Car
router.get('/cars', function (req, res) {
    Car.getCars(req, function (err, cars) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(cars);
    });
});
router.get('/cars/:_id', function (req, res) {
    Car.getCarById(req.params._id, function (err, car) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(car);
    });
});
router.post('/cars', function (req, res) {
    let car = req.body;
    Car.addManufacturer(car, function (err, car) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(car);
    });
});
router.put('/cars/:_id', function (req, res) {
    let id = req.params._id;
    let car = req.body;
    Car.updateCar(id, car, {}, function (err, car) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(car);
    });
});

router.delete('/cars/:_id', function (req, res) {
    let id = req.params._id;
    Car.deleteCar(id, function (err, car) {
        if (err) {
            return res.status(400).json('Bad request!')
        }
        else res.json(car);
    });
});


export default router