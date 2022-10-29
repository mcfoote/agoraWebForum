const express = require('express');
const session = require('express-session');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

/*
const boards = [
    {id: 1, name: 'programming'},
    {id: 2, name: 'gaming'},
    {id: 3, name: 'music'},
    {id: 4, name: 'video'}
];
*/
app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({ extended: true}));
app.use(routes);

/*
app.get('/', (req, res) => {
    res.send('Welcome to the Agora!');
});

app.get('/api/boards', (req, res) => {
    res.send(boards);
});

  
app.post('/api/boards', (req, res) => {
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and needs a minimum of 3 characters');
        return;
    }

    let board = {
        id: boards.length + 1,
        name: req.body.name
    };

    boards.push(board);

    res.send(board);

});

app.put('/api/boards/:id', (req, res) => {
    let board = boards.find(b => b.id === parseInt(req.params.id));
    if(!board) res.status(404).send('404: Board not found.');
    board.name = req.body.name;
    res.send(board);
});

app.get('/api/boards/:id', (req, res) => {
    let board = boards.find(b => b.id === parseInt(req.params.id));
    if(!board) res.status(404).send('404: Board not found.');
    res.send(board);
});
*/
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});
