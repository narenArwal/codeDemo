const router = require('express').Router();
const path = require('path');

const taskController = require('../controllers/taskController');

router.post('/addRecord', taskController.addRecord);

router.get('/listAll', taskController.listAll);

router.post('/signIn', taskController.signIn);

module.exports = router;
