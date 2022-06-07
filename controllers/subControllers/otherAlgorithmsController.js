const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/otherAlgorithmsPromptsPages/prompt1_otherAlgorithms.ejs');
})

module.exports = router;