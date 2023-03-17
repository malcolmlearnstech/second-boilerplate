const router = require('express').Router();

//matches GET requests to '/api/tasks/' for ALL TASKS
router.get('/', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches GET requests to '/api/tasks/' for a SINGLE TASK
router.get('/:taskId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches POST requests to '/api/tasks/:taskId' to CREATE A TASK
router.post('/:taskId', async (req, res, nest) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches PUT requests to 'api/tasks/:taskId' to UPDATE A SPECIFIC TASK
router.put('/:taskId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

//matches DELETE requests to 'api/tasks/:taskId' to DELETE A SPECIFIC TASK
router.delete('/:taskId', async (req, res, next) => {
  /* 
ADD IN ROUTE CODE LATER AFTER MAKING DATABASE
*/
});

module.exports = router;
