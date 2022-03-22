import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const deviceschema = new mongoose.Schema({
    deviceType: String,
    deviceDescription: String,
    deviceSerialNumber: String,
    deviceOwner: String,
    deviceEnergyRating: String,
    deviceInstalled: Date,
    deviceRemoved: Date,
    deviceLocation: String,
})

deviceschema.plugin(mongooseUniqueValidator);

const Device = mongoose.model('Device', deviceschema);

export default Device;