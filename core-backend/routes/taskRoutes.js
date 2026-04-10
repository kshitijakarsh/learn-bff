const express = require('express');
const router = express.Router();
const { getTasks, createTask} = require('../controllers/taskController');

// GET /api/tasks - Get all tasks
router.get('/', getTasks);
router.post('/', createTask);

module.exports = router;