import Device from "../models/device.js";

async function getDevices(req, res, next) {
    try {
        console.log(req.query);

        const devices = await Device.find(req.query);
       
        return res.status(200).json(devices);
    } catch (err) {
        next(err);
    }
    //return res.status(200).json('hello');
}

async function createDevice(req, res , next) {
    try {
        const newDevice = await Device.create(req.body);
        return res.status(201).send(newDevice);
    }
    catch (err) {
        next(err);
    }
}

async function getDeviceById(req, res, next)
{
    const { id } = req.params;

    try{
        const device = await Device.findById(id);
        return res.status(200).send(device);
    }
    catch(err) { 
        next(err);
    }
}

async function updateDevice(req, res, next) {
    const { id } = req.params;
    const { body } = req;

    try {
        const device = await Device.findByIdAndUpdate(id,body);
        //device.set(body);

        //const savedDevice = device.save();

        return res.status(200).json();

    }
    catch(err) { 
        next(err);
    }
}

async function deleteDevice(req, res, next) {
    const { id } = req.params;

    try {
        const device = await Device.findByIdAndDelete(id);

        return res.status(204).json();

    }
    catch(err) { 
        next(err);
    }
}

export default { getDevices, createDevice, getDeviceById, updateDevice, deleteDevice };