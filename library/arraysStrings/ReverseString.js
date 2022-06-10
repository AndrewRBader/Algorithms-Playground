const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Reverse String',
        topic: 'Arrays',
        file_grabber: 'reverse_string',
        dir_grabber: 'arrays_strings',
        description: 'Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory. O(N) time and O(1) constant space',
        solution: [
            'function reverseStr(str){',
            '---if (str === "") return;',
            '---if (str.length === 0) return null;',
            'const revStr = str.split("").reverse().join("");',
            'return revStr;',
            '}'
        ],
    }
)