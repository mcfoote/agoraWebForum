const router = require('express').Router();
const userRoutes = require('./userRoutes');
const boardRoutes = require('./boardRoutes');
const threadRoutes = require('./threadRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/boards', boardRoutes);
router.use('/threads', threadRoutes);
router.use('/posts', postRoutes);


module.exports = router;