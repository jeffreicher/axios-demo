const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('Server Response:', resp);
}).catch(err => {
    console.log('Error:', err.message);
});

const newItem = {
    title: 'Monday',
    details: '6 cups of coffee'
};

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
//     console.log('Add Response:', resp);
// });

const itemId = '5ac27897329150131fbbff61';

axios.get(`${BASE_URL}/todos/${itemId + API_KEY}`).then(resp => {
    console.log('My item:', resp);
}).catch(err => {
    console.log('Error:', err.message);
});