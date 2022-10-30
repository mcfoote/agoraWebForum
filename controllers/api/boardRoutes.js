const router = require('express').Router();
const { Board } = require('../../models');

router.get('/', async(req, res) => {

    const boardData = await Board.findAll();
    
    return res.send(boardData);

});

router.post('/', async (req, res) => {

    const boardData = await Board.create(req.body);

    return res.json(boardData);

});

router.put('/:id', async(req, res) => {

});


module.exports = router;