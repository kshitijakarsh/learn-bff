const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

module.exports = app;