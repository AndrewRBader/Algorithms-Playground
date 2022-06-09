const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

router.get('/:id/', async (req, res, next) => {
    try{
        const otherAlgorithm = await db.OtherAlgorithm.findById(req.params.id);
        const context = {otherAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/otherAlgorithmsPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;