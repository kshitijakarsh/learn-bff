const axios = require('axios');

async function fetchDesktopTasks() {
    const res = await axios.get('http://localhost:5002/tasks');
    console.log('Desktop Tasks : ', res.data);
}

fetchDesktopTasks();