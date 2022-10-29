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

module.exports = router;