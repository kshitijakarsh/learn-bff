const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5002;

app.get("/tasks", async (req, res) => {
  const response = await axios.get("http://localhost:5003/api/tasks");

  const desktopTasks = response.data.map((task) => ({
    ...task,
    status: task.completed ? "Completed" : "Pending",
    description: `Task ${task.description}`,
  }));

  res.json(desktopTasks);
});

app.listen(PORT, () => {
    console.log(`BFF Server running on http://localhost:${PORT}`);
});