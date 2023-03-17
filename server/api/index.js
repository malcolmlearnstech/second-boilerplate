const router = require('express').Router();

router.use('/tasks', require('./tasks')); //all backend tasks related requests will have to use: /api/tasks/
router.use('/users', require('./users')); //all backend users related requests will have to use: /api/users/

//error handling for when an API that doesn't exist in entered
router.use(function (req, res, next) {
  const err = Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
