import Car from '../models/cars'

//GET
export function getCars(req, callback){
    if (req.query && req.query.name) {
        Car.find({name: {'$regex': req.query.name.toLowerCase(), '$options': 'i'}}, callback)
    }
    else {
        Car.find(callback)
    }
}
export function getCarById(id, callback){
    Car.findById(id, callback);
}

//POST
export function addCar(car, callback){
    Car.create(car, callback);
}
//UPDATE
export function updateCar(id, car, options, callback) {
    let query = {_id: id}
    let update = {
        name: car.name,
        details: car.details
    }
    Car.findOneAndUpdate(query, update, options, callback)
}

//DELETE
export function deleteCar(id, callback) {
    let query = {_id: id};
    Car.remove(query, callback)
}