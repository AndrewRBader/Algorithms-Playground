const mongoose = require('mongoose')

const arraysStringsSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'input title']
    },
    topic: {
        type: String,
        required:[true, 'input topic']
    },
    description: {
        type: String,
        required:[true, 'input prompt']
    },
    solution: [],
})

const ArraysStringsAlgorithm = mongoose.model('ArraysStrings', arraysStringsSchema);
module.exports = ArraysStringsAlgorithm;