import Model from '../models/models'

//GET
export function getModels(req, callback){
    if (req.query && req.query.name) {
        Model.find({name: {'$regex': req.query.name.toLowerCase(), '$options': 'i'}}, callback)
    }
    else {
        Model.find(callback)
    }
}
export function getModelById(id, callback){
    Model.findById(id, callback);
}

//POST
export function addModel(model, callback){
    Model.create(model, callback);
}
//UPDATE
export function updateModel(id, model, options, callback) {
    let query = {_id: id}
    let update = {
        name: model.name,
        details: model.details
    }
    Model.findOneAndUpdate(query, update, options, callback)
}

//DELETE
export function deleteModel(id, callback) {
    let query = {_id: id};
    Model.remove(query, callback)
}