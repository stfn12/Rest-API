import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
    type: String,
    year: Number,
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    colour: String,
    fuel: String,
});

const Car = mongoose.model('Car', carSchema)
export default Car
