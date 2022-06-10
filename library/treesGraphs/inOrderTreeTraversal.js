//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.TreesGraphsAlgorithm.create(
    {
        title: 'In Order Traversal',
        topic: 'Trees and Graphs',
        file_grabber: 'in_order_traversal',
        dir_grabber: 'trees_graphs',
        description: 'write an in-order tree traversal algorithm. This is for a BST. In order means traversing left, grabbing the root, then traversing right iteratively (or recursively). time complexity is O(N), O(d) where d is the depth of the longest branch of the BST. d = N when just one branch, in the worst case',
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
            '------this.inOrderBST(tree.left);',
            '------children.push(tree.value);',
            '------this.inOrderBST(tree.right);',
            '---}',
            '}'
        ],
    }
)