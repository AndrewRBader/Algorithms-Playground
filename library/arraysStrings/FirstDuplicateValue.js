const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'First Duplicate Value',
        topic: 'Arrays',
        file_grabber: 'first_duplicate_value',
        dir_grabber: 'arrays_strings',
        description: 'Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space. O(N) time and O(N) space',
        solution: [
            'function firstDuplicateValue(array) {',
            '---let set = [];',
            '---for(let i=0; i<array.length; i++){',
            '------let value = array[i];',
            '------if (set.includes(value)) return value',
            '---------set.push(value);',
            '---}',
            '}'
        ],
    }
)
