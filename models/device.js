import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const deviceschema = new mongoose.Schema({
    deviceType: String,
    deviceDescription: String,
    deviceOwner: String,
    deviceEnergyRating: Number,
    deviceInstalled: Date,
    deviceRemoved: Date,
    deviceLocation: String,
})

deviceschema.plugin(mongooseUniqueValidator);

const Device = mongoose.model('Device', deviceschema);

export default Device;