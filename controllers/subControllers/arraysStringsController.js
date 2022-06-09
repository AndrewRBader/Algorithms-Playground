const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

///////////////////////// ROUTES /////////////////////////////////
router.get('/:id/', async(req, res, next) => {
    try{
        const arraysStringsAlgorithm = await db.ArraysStringsAlgorithm.findById(req.params.id);
        const context = {arraysStringsAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/arraysStringsPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;