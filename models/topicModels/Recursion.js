const mongoose = require('mongoose')

const recursionSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'input title']
    },
    topic: {
        type: String,
        required:[true, 'input topic']
    },
    file_grabber: {
        type: String,
        required:[true, 'input title']
    },
    dir_grabber: {
        type: String,
        required:[true, 'input topic']
    },
    description: {
        type: String,
        required:[true, 'input prompt']
    },
    solution: [],
})

const RecursionAlgorithm = mongoose.model('Recursion', recursionSchema);
module.exports = RecursionAlgorithm;