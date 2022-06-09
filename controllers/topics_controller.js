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

router.get('/trees-graphs/', async(req, res, next) => {
    try {
        const trees_graphs = await db.TreesGraphsAlgorithm.find({});
        const context = {trees_graphs};
        return res.render('../views/topicIndexPages/treesGraphsIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/stacks-queues/', async (req, res, next) => {
    try {
        const stacks_queues = await db.StacksQueuesAlgorithm.find({});
        const context = {stacks_queues};
        return res.render('../views/topicIndexPages/stacksQueuesIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/recursion/', async (req, res, next) => {
    try {
        const recursion = await db.RecursionAlgorithm.find({});
        const context = {recursion};
        return res.render('../views/topicIndexPages/recursionIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/other-algorithms/', async(req, res, next) => {
    try {
        const other_algorithms = await db.OtherAlgorithm.find({});
        const context = {other_algorithms};
        return res.render('../views/topicIndexPages/otherAlgorithmsIndex.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;