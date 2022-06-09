const express = require('express');
const router = express.Router();

///////////////////////// MODELS /////////////////////////////////
const db = require('../../models/modelsIndex.js')

router.get('/:id/', async (req, res, next) => {
    try{
        const recursionAlgorithm = await db.RecursionAlgorithm.findById(req.params.id);
        const context = {recursionAlgorithm};
        return res.render('../views/AlgorithmPromptShowPages/recursionPromptPage.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
}
})

module.exports = router;