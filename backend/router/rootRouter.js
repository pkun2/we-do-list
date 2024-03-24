import express from 'express';
import { getRootController } from '../controller/rootController.js';

const rootRouter = express.Router();

rootRouter.get('/', getRootController);

export default rootRouter;