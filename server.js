const express = require('express');
const app = express();
const controllers = require('./controllers/controllers_index.js');
require('./config/db.connection.js');
PORT = process.env.PORT;

///////////////////////// CONTROLLERS ////////////////////////////
app.use('/', controllers.topics);
app.use('/arrays-strings/', controllers.arraysStrings);
app.use('/linked-lists/', controllers.linkedLists);
app.use('/trees-graphs/', controllers.treesGraphs);
app.use('/stacks-queues/', controllers.stacksQueues);
app.use('/recursion/', controllers.recursion);
app.use('/other-algorithms/', controllers.otherAlgorithms);

///////////////////////// MIDDLEWARE /////////////////////////////
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('homepage.ejs');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

