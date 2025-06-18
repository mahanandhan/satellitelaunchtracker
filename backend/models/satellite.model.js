import mongoose from 'mongoose';

const satelliteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creater: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['shulded', 'success', 'failed'],
        default: 'shulded'
    },
    sendTo: {
        type: String,
        required: true
    }
})

const Satellite = mongoose.model('Satellite', satelliteSchema);

export default Satellite;