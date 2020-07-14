import * as express from 'express';
import chortlesRouter from './chortles';

const router = express.Router();

router.get('/chortles', chortlesRouter);

export default router;