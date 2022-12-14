const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async(req, res) => {

  const userData = await User.findAll();
  
  return res.send(userData);

});

router.post('/', async (req, res) => {
    
    try {

      const userData = await User.create(req.body);

      req.session.save(() => {

        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);

      });

    } catch(err) {

      res.status(400).json(err);
        
    }

  });

  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { user_name: req.body.user_name } });
  
      if (!userData) {

        res
          .status(400)
          .json({ message: 'Password or Username is incorrect.' })
          
        return;

      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {

        res
          .status(400)
          .json({ message: 'Password or Username is incorrect.' });

        return;
        
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'Login Successful!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
  
    if (req.session.logged_in) {
  
      req.session.destroy(() => {
        res.status(204).end();
  
      });
    } else {
  
      res.status(404).end();
  
    }
  
  });

module.exports = router;