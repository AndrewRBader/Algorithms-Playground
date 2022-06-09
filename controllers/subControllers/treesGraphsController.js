const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

///////////////////////// ROUTES /////////////////////////////////
router.get('/:id/', async (req, res, next) => {
    try{
        const treesGraphsAlgorithm = await db.TreesGraphsAlgorithm.findById(req.params.id);
        const context = {treesGraphsAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/treesGraphsPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;