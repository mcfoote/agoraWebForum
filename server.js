const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the Agora!');
});

app.get('/api/boards', (req, res) => {
    res.send(['Programming', 'Gaming', 'Music', 'Video']);
});

app.get('/api/boards/:id', (req, res) => {
    res.send(req.query);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));