const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../models/modelsIndex.js')

///////////////////////// ROUTES /////////////////////////////////
router.get('/arrays-strings/', async(req, res, next) => {
    try {
        const arrays_strings = await db.ArraysStringsAlgorithm.find({});
        const context = {arrays_strings};
        return res.render('../views/topicIndexPages/arraysStringsIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/linked-lists/', async (req, res, next) => {
    try {
        const linked_lists = await db.LinkedListsAlgorithm.find({});
        const context = {linked_lists};
        return res.render('../views/topicIndexPages/linkedListIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

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