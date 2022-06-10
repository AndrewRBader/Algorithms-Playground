const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Sorted Squares Array',
        topic: 'Arrays',
        file_grabber: 'sorted_squares_array',
        dir_grabber: 'arrays_strings',
        description: 'takes in non-empty array of ints, sorted in ascending order, return new array of same length with squares of original integers, also in ascending order; ie input: array = [1,2,3,4,5,6] output: [1,4,9,16,25,36]. Seems simple, but the edge cases must be thought out thoroughly here ie for [0,0,0,0] and neg numbers. Due to the sort and loop, the time complexity ends up being O(nlog(n)) O(2N) is the space for the array storage',
        solution: [
            'function sortedSquaresArray(array) {',
            '---let squareArray = [];',
            '---let sortedSquareArray = [];',
            '---for(let i = 0; i < array.length; i++){',
            '------let value = array[i];',
            '------let square = value * value;',
            '------if (value === 0) squareArray.push(value);',
            '------else squareArray.push(square);',
            '---}',
            '---sortedSquareArray = squareArray.sort((a,b) => a - b);',
            '---return sortedSquareArray;',
            '}'
        ],
    }
)