const router = require('express').Router();

router.use('/tasks', require('./tasks')); //all backend tasks related requests will have to use: /api/tasks/
router.use('/users', require('./users')); //all backend users related requests will have to use: /api/users/

module.exports = router;
