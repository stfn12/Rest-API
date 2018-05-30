import Manufacturer from '../models/manufacturers'

//GET
export function getManufacturers(req, callback) {
    if (req.query && req.query.name) {
        Manufacturer.find({name: {'$regex': req.query.name.toLowerCase(), '$options': 'i'}}, callback)
    }
    else {
        Manufacturer.find(callback)
    }
}
export function getManufacturerById(id, callback) {
    Manufacturer.findById(id, callback)
}

//POST
export function addManufacturer(manufacturer, callback) {
    Manufacturer.create(manufacturer, callback)
}

//UPDATE
export function updateManufacturer(id, manufacturer, options, callback) {
    let query = {_id: id}
    let update = {
        name: manufacturer.name,
        details: manufacturer.details
    }
    Manufacturer.findOneAndUpdate(query, update, options, callback)
}

//DELETE
export function deleteManufacturer(id, callback) {
    let query = {_id: id};
    Manufacturer.remove(query, callback)
}