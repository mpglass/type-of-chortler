import * as express from 'express';
import chortlesRouter from './chortles';

const router = express.Router();

router.use('/chortles', chortlesRouter);

export default router;