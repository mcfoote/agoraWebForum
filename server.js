const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Agora!');
});

app.get('/api/boards', (req, res) => {
    res.send(['Programming', 'Gaming', 'Music', 'Video']);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));