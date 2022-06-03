const express = require('express');
const router = express.Router();

//////////////////////////// MIDDLEWARE ////////////////////////////////////

router.get('/arrays-strings/', (req, res) => {
    res.render('../views/topicIndexPages/arrayStringIndex.ejs');
})

router.get('/linked-lists/', (req, res) => {
    res.render('../views/topicIndexPages/linkedListIndex.ejs');
})

router.get('/trees-graphs/', (req, res) => {
    res.render('../views/topicIndexPages/treesGraphsIndex.ejs');
})

router.get('/stacks-queues/', (req, res) => {
    res.render('../views/topicIndexPages/stacksQueuesIndex.ejs');
})

router.get('/recursion/', (req, res) => {
    res.render('../views/topicIndexPages/recursionIndex.ejs');
})

router.get('/pathfinder-special/', (req, res) => {
    res.render('../views/topicIndexPages/pathfinderSpecialIndex.ejs');
})

module.exports = router;