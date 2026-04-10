const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5001;

app.get('/tasks', async (req, res) => {
    const response = await axios.get('http://localhost:5003/api/tasks');

    const mobileTasks = response.data.map(task => ({
        id: task.id,
        title: task.title,
    }));

    res.json(mobileTasks);
});

app.listen(PORT, () => {
    console.log(`BFF Mobile server running on port ${PORT}`);
});