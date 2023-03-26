const router = require('express').Router();
const { models: User } = require('../db/index');

//matches GET requests to '/api/users' to VIEW ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//matches GET requests to '/api/:userId' to VIEW A SPECIFIC USER
router.get('/:userId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches POST requests to '/api/:userId' to CREATE A USER
router.post('/:userId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches PUT requests to '/api/:userId' to UPDATE A USER
router.put('/:userId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches DELETE requests to '/api/:userID' to DELETE A USER
router.delete('/:userId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

module.exports = router;
