//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.StacksQueuesAlgorithm.create(
    {
        title: 'Min Stack Build',
        topic: 'Stacks and Queues',
        file_grabber: 'min_stack_build',
        dir_grabber: 'stacks_queues',
        description: 'Set up a min stack. Recall stacks should have push, pop, and peek methods. For the min stack function, need an additional find min method. Get the min value of the stack at any given point. ie push(val) -> getMin() -> peek() -> push(val2) -> getMin() -> etc. Comlexities O(1) time and O(1) space',
        solution: [
            'class MinStack {',
            '---constructor(){',
            '------this.minStack = [];',
            '------this.Stack = [];',
            '---}',
            '---push(val){',
            '------const currentMinVal = this.minStack[this.minStack.length - 1];',
            '------const newMinVal = val;',
            '------if (this.minStack.length > 0 && currentMinVal > newMinVal){ ',
            '---------this.minStack.push(newMinVal);}',
            '------this.stack.push(val);',
            '---};',
            '---pop(){',
            '------this.stack.pop();',
            '------this.minStack.pop();',
            '---};',
            '---peek(){',
            '------this.stack[stack.length - 1];',
            '---};',
            '---findMin(){',
            '------return this.minStack[this.minStack.length - 1];',
            '---};',
            '}'
        ]
    }
)