//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.OtherAlgorithm.create(
    {
        title: 'Binary Search',
        topic: 'Other Algorithms',
        file_grabber: 'binary_search',
        dir_grabber: 'other_algorithms',
        description: 'Come up with a binary sort function that takes in a sorted array of integers and a target integer. The function should determine if the integer is in the array and return the index, otherwise return -1. ie Inputs: array = [0, 1, 4, 5, 10] target = 5, Output: 3 Complexities: O(log(n)) time and O(log(n)) space complexities',
        solution: [
            'function binarySearch(array, target){',
            '---const sortedArray = array.sort((a,b) => a - b);',
            '---return binarySearchHelper(sortedArray, target, 0, array.length - 1);',
            '}',
            'function binarySearchHelper(array, target, leftPtr, rightPtr){',
            '---if (leftPtr > rightPtr) return -1;',
            '---let checkPtr = Math.floor((leftPtr + rightPtr)/2);',
            '---let value = array[checkPtr];',
            '---if (value === target) return checkPtr;',
            '---else if (value > target){',
            '------return binarySearchHelper(array, target, leftPtr, checkPtr - 1);',
            '---} else {',
            '------return binarySearchHelper(array, target, checkPtr + 1, rightPtr);',
            '---}',
            '}'
        ]
    }
)