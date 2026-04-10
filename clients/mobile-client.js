const axios = require('axios');

async function fetchMobileTasks() {
    const res = await axios.get('http://localhost:5001/tasks');
    console.log('Mobile Tasks : ', res.data);
}

fetchMobileTasks();