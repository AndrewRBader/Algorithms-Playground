const mongoose = require('mongoose')

const treesGraphsSchema = new mongoose.Schema({
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

const TreesGraphsAlgorithm = mongoose.model('TreesGraphs', treesGraphsSchema);
module.exports = TreesGraphsAlgorithm;