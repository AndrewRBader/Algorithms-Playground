//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.TreesGraphsAlgorithm.create(
    {
        title: 'Branch Sums',
        topic: 'Trees and Graphs',
        file_grabber: 'branch_sums',
        dir_grabber: 'trees_graphs',
        description: 'Write a function takes in binary tree and returns list of branch sums ordered from leftmost branch sum to rightmost branch sum. This algorithm runs in O(n) time and O(n) space where n is the number of nodes in the binary tree',
        solution: [
            'class BinaryTree {',
            '---constructor(value){',
            '------this.value = value;',
            '------this.left = null;',
            '------this.right = null;',
            '---}',
            '}',
            'function branchSums(tree) {',
            '---const sums = [];',
            '---calculateBranchSums(tree, 0, sums);',
            '---return sums;',
            '}',
            'function calculateBranchSums(tree, branchSum, sums){',
            '---if(tree === null) return;',
            '---branchSum += tree.value;',
            '---if(tree.left === null && tree.right === null) {',
            '------sums.push(branchSum);',
            '------return sums;',
            '---}',
            '---calculateBranchSums(tree.left, branchSum, sums);',
            '---calculateBranchSums(tree.right, branchSum, sums);',
            '}'
        ],
    }
)