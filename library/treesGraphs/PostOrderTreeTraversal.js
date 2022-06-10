//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.TreesGraphsAlgorithm.create(
    {
        title: 'Post Order Traversal',
        topic: 'Trees and Graphs',
        file_grabber: 'post_order_traversal',
        dir_grabber: 'trees_graphs',
        description: 'Write out a post order tree traversal algorithm for a BST. time complexity is O(N), O(N) where N is the total number of nodes stored in the array. If no storage, the space complexity would be O(d) where d is the depth of the longest branch. d = N in the worst case ie max storage',
        solution: [
            'class Node {',
            '---constructor (value) {',
            '------this.value = value;',
            '------this.left = null;',
            '------this.right = null;',
            '---}',
            '---postOrderBST(tree){',
            '------const children = [];',
            '------if (tree === null) return;',
            '------this.preOrderBST(tree.left)',
            '------this.inOrderBST(tree.right);',
            '------children.push(tree.value)',
            '---}',
            '}'
        ],
    }
)