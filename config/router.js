import express from 'express';
import devicesController from '../controllers/devicesController.js';


const Router = express.Router();

Router.route("/devices")
  .get(devicesController.getDevices)
  .post(devicesController.createDevice);
 
Router.route("/devices/:id")
  .get(devicesController.getDeviceById)
  .put(devicesController.updateDevice)
  .delete(devicesController.deleteDevice);
    

export default Router;
