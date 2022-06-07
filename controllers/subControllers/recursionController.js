const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/AlgorithmPromptShowPages/recursionPromptsPages/prompt1_recursion.ejs');
})

module.exports = router;