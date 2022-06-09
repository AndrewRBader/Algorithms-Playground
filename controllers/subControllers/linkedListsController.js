const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/AlgorithmPromptShowPages/linkedListPromptsPages/prompt1_linkedLists.ejs');
})

module.exports = router;

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