//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.TreesGraphsAlgorithm.create(
    {
        title: 'Pre Order Traversal',
        topic: 'Trees and Graphs',
        file_grabber: 'pre_order_traversal',
        dir_grabber: 'trees_graphs',
        description: 'write an pre-order tree traversal algorithm. This is for a BST. Recall Pre-order Traversal stores the vertex value before traversing through the edges of the BST, left then right. time complexity is O(N), O(N) where N is the total number of nodes stored in the array. If no storage, the space complexity would be O(d) where d is the depth of the longest branch. d = N in the worst case ie max storage',
        solution: [
            'class Node {',
            '---constructor (value) {',
            '------this.value = value;',
            '------this.left = null;',
            '------this.right = null;',
            '---}',
            '---inOrderBST(tree){',
            '------const children = [];',
            '------if (tree === null) return;',
            '------children.push(tree.value)',
            '------this.preOrderBST(tree.left)',
            '------this.inOrderBST(tree.right);',
            '---}',
            '}'
        ],
    }
)