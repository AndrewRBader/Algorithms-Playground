const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

///////////////////////// ROUTES /////////////////////////////////
router.get('/:id/', async(req, res, next) => {
    try{
        const linkedListsAlgorithm = await db.LinkedListsAlgorithm.findById(req.params.id);
        const context = {linkedListsAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/linkedListsPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;