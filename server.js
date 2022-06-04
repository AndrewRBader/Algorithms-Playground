const express = require('express');
const topicsController = require('./controllers/topics_controller')
const app = express();
require('./config/db.connection.js')
PORT = process.env.PORT;

///////////////////////// MIDDLEWARE /////////////////////////////
app.set('view engine', 'ejs');
app.use('/', topicsController);


app.get('/', (req, res) => {
    res.render('homepage.ejs');
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))