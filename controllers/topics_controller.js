const express = require('express');
const router = express.Router();

//////////////////////////// MIDDLEWARE ////////////////////////////////////

router.get('/arrays-strings/', (req, res) => {
    res.send('arrays and strings index page');
})

router.get('/linked-lists/', (req, res) => {
    res.send('linked list index page');
})

router.get('/trees-graphs/', (req, res) => {
    res.send('trees and graphs index page');
})

router.get('/stacks-queues/', (req, res) => {
    res.send('stacks and queues index page');
})

router.get('/recursion/', (req, res) => {
    res.send('recursion index page');
})

router.get('/pathfinder-special/', (req, res) => {
    res.send('pathfinder and special index page');
})

module.exports = router;