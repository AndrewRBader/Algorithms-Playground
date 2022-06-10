const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.ArraysStringsAlgorithm.create(
    {
        title: 'Non Constructable Change',
        topic: 'Arrays',
        file_grabber: 'non_constructable_change',
        dir_grabber: 'arrays_strings',
        description: 'given an array of positive intergers representing values of coins in possession, write a function that returns minimum amount of change that you cannot create. the coins can have any positive integer value and aren"t unique (ie can have multiple coins with the same value), sample input: coins = [5, 1, 2] Output: 4. It is important to recognize if there isn"t a +1 jump, the subsequent coin value should be added to the change unless that coin value is greater than +1 the change amount. O(nlog(n)) complexity for the sort and n refers to number of coins. O(1) space',
        solution: [
            'function nonConstructibleChange(coins){',
            '---coins.sort((a,b) => a - b);',
            '---let change = 0;',
            '---for(let i = 0; i < coins.length; i++){',
            '------let coin = coins[i];',
            '------if(coin > change + 1) return change + 1;',
            '------else change += coin;',
            '---}',
            '---return change + 1;',
            '}'
        ],
    }
)