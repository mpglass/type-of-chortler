import * as express from 'express';
import chortleService from '../utils/chortle-service';

const router = express.Router();


router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const chortle = chortleService.GetChortle(id); 
    res.json({id, ...chortle});
})
//GET /api/chortles
router.get('/', (req, res, next) => {
    const data = chortleService.GetChortles();
    const chortles = Object.keys(data).map((key:any) => ({id: key, ...data[key] })); 
    chortles.pop();
    res.json(chortles);
});

router.post('/', (req, res) => {
    const chortleDTO = req.body;
    chortleDTO['written_at'] = new Date();
    chortleService.CreateChortle(chortleDTO); 
    res.status(201).json({ msg: 'added' });
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id); 
    const editedChortle = req.body; 
    editedChortle['written_at'] = new Date();
    chortleService.UpdateChortle(id, editedChortle); 
    res.json({ msg: 'edited' });
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id); 
    chortleService.DeleteChortle(id); 
    res.json({ msg: 'deleted' });
})

export default router;