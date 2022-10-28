const router = require('express').Router();

router.post('/', async (req, res) => {

    try {

      const userData = await User.create(req.body);
    } catch(err) {
        
    }
  });

module.exports = router;