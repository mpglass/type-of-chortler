import * as express from 'express';

const router = express.Router();

//GET /api/chortles
router.get('/', (req, res, next) => {
    res.json('all chortles');
});

export default router;