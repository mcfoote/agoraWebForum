const router = require('express').Router();

router.get('/', async(req, res) => {

   return res.sendFile('../../public/index.html');

});