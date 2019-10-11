const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users_route.js'));
router.use('/posts', require('./posts_route'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
