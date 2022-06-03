const express = require('express');
const res = require('express/lib/response');

const app = express();

///////////////////////// MIDDLEWARE /////////////////////////////
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('homepage.ejs');
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))