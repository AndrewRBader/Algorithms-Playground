const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Two Sum',
        topic: 'Arrays',
        file_grabber: 'two_sum',
        dir_grabber: 'arrays_strings',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. O(N) time and O(1) constant space',
        solution: [
            'function twoNumberSum(nums, target){',
            '----// sort array smallest to largest',
            '----nums.sort((a,b) => a - b);',
            '----// set up pointers to mark array indicies',
            '----let leftptr = 0;',
            '----let rightptr = nums.length - 1;',
            '----while (leftptr < rightptr){',
            '--------const sumCurrent = nums[leftptr] + nums[rightptr];',
            '--------// if current sum equals target',
            '--------if (sumCurrent === target)',
            '------------return [nums[leftptr], nums[rightptr]];',
            '------------else if (sumCurrent < target) leftptr++;',
            '--------rightptr++;',
            '----}', 
            '}'
        ],
    }
)