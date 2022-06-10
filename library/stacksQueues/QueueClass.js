//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.StacksQueuesAlgorithm.create(
    {
        title: 'Queue Build',
        topic: 'Stacks and Queues',
        file_grabber: 'queue_build',
        dir_grabber: 'stacks_queues',
        description: 'Set up a queue class wih appropriate methods. Recall Queues are first in first out and have enqueue and dequeue methods. Time Complexity is O(n) for queues, Space Complexity is O(n). Recall that enqueue is analagous to push and dequeue is analagous to shift',
        solution: [
            'class Queue {',
            '---constructor(){',
            '------this.queue = {};',
            '------this.head = 0;',
            '------this.tail = 0;',
            '---}',
            '---enqueue(object){',
            '------this.queue[this.tail] = object;',
            '------this.tail += 1;',
            '---}',
            '---dequeue(){',
            '------let removed = this.queue[this.head];',
            '------delete this.queue[this.head];',
            '------this.head++;',
            '------return removed;',
            '---}'
        ],
    }
)