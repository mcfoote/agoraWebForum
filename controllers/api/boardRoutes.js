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

router.delete('/:id', async(req, res) => {

    try{
        const boardData = await Board.destroy({
            where: {
               id: req.params.id,
            },
        });

        if(!boardData) {
            res.status(404).json({message: 'No board found with matching id.'});

            return;
        }

        res.status(200).json(boardData);

    } catch(err) {

        res.status(500).json(err);

    }

});


module.exports = router;