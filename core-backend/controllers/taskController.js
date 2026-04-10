let tasks = [
  { id: 1, title: "Task 1", completed: false, description : "LOL" },
  { id: 2, title: "Task 2", completed: true, description : "LOL again" },
];

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
