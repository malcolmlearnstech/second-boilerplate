const router = require('express').Router();
const { User } = require('../db/index');

//matches GET requests to '/api/users/' to VIEW ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//matches GET requests to '/api/users/:userId' to VIEW A SINGLE USER
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//matches POST requests to '/api/users/' to CREATE A USER
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

//matches PUT requests to '/api/users/:userId' to UPDATE A SPECIFIC USER
router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req, params.userId, {
      include: User,
    });
    await user.update();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//matches DELETE requests to '/api/users/:userID' to DELETE A SPECIFIC USER
router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {});
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
