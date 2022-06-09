//////// Imports ////////
const mongoose = require('mongoose')
require('../../config/db.connection')


/////////  Models /////////
const db = require('../../models/modelsIndex.js')

db.LinkedListsAlgorithm.create(
    {
        title: 'Remove Duplicates',
        topic: 'Linked Lists',
        file_grabber: 'remove_duplicates',
        dir_grabber: 'linked_lists',
        description: 'Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Complexities: O(N) time and O(1) space',
        solution: [
            'class LinkedList {',
            '---constructor(value){',
            '------this.value = value;',
            '------this.next = null;',
            '---}',
            '}',
            'function removeDuplicateLinkedList(list){',
            '---let currentNode = linkedList;',
            '---while (currentNode !== null){',
            '------let nextNode = currentNode.next;',
            '------while(nextNode !== null){',
            '---------if (nextNode === currentNode)',
            '------------nextNode = nextNode.next;',
            '---------currentNode = nextNode;',
            '------}',
            '---}',
            '---return list;',
            '}'
        ]
    }
)