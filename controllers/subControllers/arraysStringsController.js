const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.render('../views/arraysStringsPromptsPages/prompt1_arraysStrings.ejs');
})

module.exports = router;