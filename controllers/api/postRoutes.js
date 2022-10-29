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

module.exports = router;