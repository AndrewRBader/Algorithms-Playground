const express = require('express');
const router = express.Router();

router.get('/prompt1/', (req, res) => {
    res.send('stacks and queues prompt 1 show page');
})

module.exports = router;