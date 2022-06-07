const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/linkedListPromptsPages/prompt1_linkedLists.ejs');
})

module.exports = router;