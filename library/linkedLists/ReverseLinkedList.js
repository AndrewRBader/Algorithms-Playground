//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.LinkedListsAlgorithm.create(
    {
        title: 'Reverse Linked Lists',
        topic: 'Linked Lists',
        file_grabber: 'reverse_linked_list',
        dir_grabber: 'linked_lists',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list. head = 0 -> 1 -> 2 Output = 2->1->0. O(N) time and O(1) space. We want to point the arrow from 1 → 2 to 1 → 0, use a pointer to keep track of the current value. We want the next pointer to be pointing at the previous value/node',
        solution: [
            'class ListNode(val) {',
            '---constructor(val) {',
            '------this.val = val;',
            '------this.next = null;',
            '---}',
            '}',
            'function reverseLinkedList(head) {',
            '---let previous = null;',
            '---let current = head;',
            '---let next = null;',
            '---while(value.next !== null) {',
            '------next = current.next;',
            '------current.next = previous;',
            '------previous = current;',
            '------current = next;',
            '---} return previous;',
            '};'
        ]
    }
)