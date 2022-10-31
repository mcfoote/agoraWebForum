const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const cors = require('cors');
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


app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({ extended: true}));
app.use(cors({
  origin: '*'
}));
app.use(routes);


/*
app.put('/api/boards/:id', (req, res) => {
    let board = boards.find(b => b.id === parseInt(req.params.id));
    if(!board) res.status(404).send('404: Board not found.');
    board.name = req.body.name;
    res.send(board);
});
*/
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});
