const router = require('express').Router();
const { Thread } = require('../../models');

router.get('/', async(req, res) => {

    const threadData = await Thread.findAll();
    
    return res.send(threadData);

});

router.post('/', async (req, res) => {

    const threadData = await Thread.create(req.body);

    return res.json(threadData);

});

router.get('/:boardId', async (req, res) => {

    const threadData = await Thread.findAll({ where: {boardId: req.params.boardId}});

    res.send(threadData);

});

router.delete('/:id', async(req, res) => {

    try{
        const threadData = await Thread.destroy({
            where: {
               id: req.params.id,
            },
        });

        if(!threadData) {
            res.status(404).json({message: 'No board found with matching id.'});

            return;
        }

        res.status(200).json(threadData);

    } catch(err) {

        res.status(500).json(err);

    }

});

module.exports = router;