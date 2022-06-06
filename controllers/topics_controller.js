const express = require('express');
const router = express.Router();

router.get('/arrays-strings/', (req, res) => {
    res.render('../views/topicIndexPages/arraysStringsIndex.ejs');
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

router.get('/other-algorithms/', (req, res) => {
    res.render('../views/topicIndexPages/otherAlgorithmsIndex.ejs');
})

module.exports = router;