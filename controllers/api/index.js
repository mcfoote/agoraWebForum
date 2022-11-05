const router = require('express').Router();
const userRoutes = require('./userRoutes');
const boardRoutes = require('./boardRoutes');
const threadRoutes = require('./threadRoutes');
const postRoutes = require('./postRoutes');
const landingRoute = require('./landingRoute');

router.use('/users', userRoutes);
router.use('/boards', boardRoutes);
router.use('/threads', threadRoutes);
router.use('/posts', postRoutes);
router.use('/', landingRoute);

module.exports = router;