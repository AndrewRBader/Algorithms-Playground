const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/AlgorithmPromptShowPages/linkedListPromptsPages/prompt1_linkedLists.ejs');
})

module.exports = router;