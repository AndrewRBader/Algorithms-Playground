//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.RecursionAlgorithm.create(
    {
        title: 'Depth First Search',
        topic: 'Recursion',
        file_grabber: 'depth_first_search',
        dir_grabber: 'recursion',
        description: 'Depth First Seach: takes an empty array, traverses tree going from left to right pushing values into the array of children. time complexity is O(V+E) v is # of verticies/nodes and e is # of edges O(v) space when have to store the whole branch',
        solution: [
            'class Node {',
            '---constructor (value) {',
            '------this.value = value;',
            '------this.children = [];',
            '---}',
            '---addChild(value) {',
            '------this.children.push(new Node(value))',
            '------this.depthFirstSearch()',
            '---}',
            '---depthFirstSearch(edges) {',
            '------edges.push(this.value);',
            '------let child = 0;',
            '------while(this.children[child]){',
            '---------this.children[child].depthFirstSearch(edges);',
            '---------child++;',
            '------}',
            '------return edges',
            '---}',
            '}'
        ]
    }
)