const express = require('express');
const topicsController = require('./controllers/topics_controller')
const app = express();

///////////////////////// MIDDLEWARE /////////////////////////////
app.set('view engine', 'ejs');
app.use('/', topicsController);


app.get('/', (req, res) => {
    res.render('homepage.ejs');
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))