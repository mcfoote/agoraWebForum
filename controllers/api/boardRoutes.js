const router = require('express').Router();
const {Board} = require('../../models');

router.get('/boards/:name', (req, res) => {
    res.sendFile();
});


module.exports = router;