import mongoose from 'mongoose'
const manufacturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: String
});
const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);
export default Manufacturer
