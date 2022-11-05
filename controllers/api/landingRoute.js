const router = require('express').Router();

router.get('/', async(req, res) => {

    res.sendFile('../../public/index.html');

});