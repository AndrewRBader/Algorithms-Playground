const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/AlgorithmPromptShowPages/stacksQueuesPromptsPages/prompt1_stacksQueues.ejs');
})

module.exports = router;