import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import validations from './validations';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post(
  '/points',
  upload.single('image'),
  validations.createPoint,
  pointsController.create
);

routes.get('/points', pointsController.index);
routes.get('/points/:id', validations.showPoint, pointsController.show);

export default routes;
