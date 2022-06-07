const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/AlgorithmPromptShowPages/otherAlgorithmsPromptsPages/prompt1_otherAlgorithms.ejs');
})

module.exports = router;