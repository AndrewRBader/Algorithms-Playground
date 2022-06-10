const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Remove Duplicate Char',
        topic: 'Arrays',
        file_grabber: 'remove_duplicate_char',
        dir_grabber: 'arrays_strings',
        description: "Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results. O(N^2) time and O(1) space (no additional space). Remember null string and all duplicates test cases",
        solution: [
            'function removeDupLetter(str){',
            '---if (str === "") return;',
            '---const strLen = str.length;',
            '---if (strLen < 2) return;',
            '---let idx1 = 1, idx2 = null, trailptr = 1;',
            '---for (idx1 = 1; idx1 < strLen; idx1++){',
            '------let val1 = str[idx1];',
            '------for (idx2 = 0; idx2 < trailptr; idx2++){',
            '---------let val2 = str[idx2];',
            '---------if(val1 === val2) break;',
            '---------if (idx2 === trailptr){',
            '------------str[trailptr] = str[i];',
            '------------trailptr++;',
            '---------}',
            '------}',
            '---}',
            '}'
        ],
    }
)