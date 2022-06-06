
module.exports = {
    topics: require('./topics_controller'),
    // subtopic controllers imported here
    arraysStrings: require('./subControllers/arraysStringsController'),
    linkedLists: require('./subControllers/linkedListsController'),
    treesGraphs: require('./subControllers/treesGraphsController'),
    stacksQueues: require('./subControllers/stacksQueuesController'),
    recursion: require('./subControllers/recursionController'),
    otherAlgorithms: require('./subControllers/otherAlgorithmsController'),
}