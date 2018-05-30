import mongoose from 'mongoose'

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    engine: String,
    year_from: Number,
    year_until: Number,
    hp: Number,
    doors: Number,
    drive_wheel: String,
    speed: Number,
    manufacturer: {
        type: String,
        required: true
    }
});

const Model = mongoose.model('Model', modelSchema)
export default Model
