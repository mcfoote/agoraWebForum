const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const boards = [
    {id: 1, name: 'programming'},
    {id: 2, name: 'gaming'},
    {id: 3, name: 'music'},
    {id: 4, name: 'video'}
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Agora!');
});

app.get('/api/boards', (req, res) => {
    res.send(boards);
});

app.post('/api/boards', (req, res) => {
    let board = {
        id: boards.length + 1,
        name: req.body.name
    };

    boards.push(board);

    res.send(board);

});

app.get('/api/boards/:id', (req, res) => {
    let board = boards.find(b => b.id === parseInt(req.params.id));
    if(!board) res.status(404).send('404: Board not found.');
    res.send(board);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));