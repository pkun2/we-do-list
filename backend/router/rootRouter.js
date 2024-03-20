import express from 'express';
import { rootController } from '../controller/rootController.js';

const rootRouter = express.Router();

rootRouter.get('/', rootController);

export default rootRouter;