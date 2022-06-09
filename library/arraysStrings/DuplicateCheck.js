//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Duplicate Check',
        topic: 'Arrays',
        file_grabber: 'duplicate_check',
        dir_grabber: 'arrays_strings',
        description: 'implement algorithm determine if string has all unique characters. Complexities: O(N) time and O(N) space',
        solution: [
            'function duplicateCheck(str){',
            '---if (str.length === 0) return true;',
            '---const charSet = [];',
            '---for (let i = 0; i < str.length; i++){',
            '------const val = str[i];',
            '------if (charSet.includes(val)) return false;',
            '------else charSet.push(val);',
            '---}',
            '---return true;',
            '}'
        ]
    }
)