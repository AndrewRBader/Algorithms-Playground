const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

///////////////////////// ROUTES /////////////////////////////////
router.get('/:id/', async (req, res, next) => {
    try{
        const stacksQueuesAlgorithm = await db.StacksQueuesAlgorithm.findById(req.params.id);
        const context = {stacksQueuesAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/stacksQueuesPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;