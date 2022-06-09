//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.TreesGraphsAlgorithm.create(
    {
        title: 'Node Depths',
        topic: 'Trees and Graphs',
        file_grabber: 'node_depths',
        dir_grabber: 'trees_graphs',
        description: 'Given a binary tree, find the maximum depth of the leaf nodes. Recall that node depth refers to the relative distance between a node and root in a Binary Tree. To calculate this, evaluate the number of nodes along the longest path from the root node down to the leaf node. For the example below, there are 3 nodes on the longest path therefore the output should be 3. Time Complexity is O(n), Space Complexity is O(n).',
        solution: [
            'class BST {',
            '---constructor(value){',
            '------this.value = value;',
            '------this.left = null;',
            '------this.right = null;',
            '---}',
            '}',
            'function maxNodeDepth(tree){',
            '---let maxDepth = null;',
            '---let array = [];',
            '---nodeDepths(tree, 0, array);',
            '---return maxDepth = Math.max(array) + 1;',
            '}',
            'function nodeDepths(tree, nodeDepth, array){',
            '---if (tree === null) return 0;',
            '---nodeDepth++;',
            '---if (tree.left === null && tree.right === null){',
            '------return array.push(nodeDepth);',
            '---}',
            '---return nodeDepths(tree.left, nodeDepth, array);',
            '---return nodeDepths(tree.right, nodeDepth, array);',
            '}'
        ]
    }
)