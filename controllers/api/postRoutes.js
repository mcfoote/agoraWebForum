const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async(req, res) => {

    const postData = await Post.findAll();
    
    return res.send(postData);

});

router.post('/', async (req, res) => {

    const postData = await Post.create(req.body);

    return res.json(postData);

});

router.get('/:threadId', async (req, res) => {

    const postData = await Post.findAll({ where: {threadId: req.params.threadId}});

    res.send(postData);

});

router.delete('/:id', async(req, res) => {

    try{
        const postData = await Post.destroy({
            where: {
               id: req.params.id,
            },
        });

        if(!postData) {
            res.status(404).json({message: 'No board found with matching id.'});

            return;
        }

        res.status(200).json(postData);

    } catch(err) {

        res.status(500).json(err);

    }

});

module.exports = router;