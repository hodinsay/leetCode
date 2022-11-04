// Add Two Numbers 

// DESCRIPTION: 

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// DIFFICULTY:
// Medium 

// Solution: 

function addTwoNumbers(l1, l2) {
    // Initialise a new ListNode to be returned
    let newListNode = new ListNode(0);
    let headOfNewListNode = newListNode;

    // Initialise variables to be utilised on each run
    let sum = 0;
    let carry = 0;

    // While there are elements (or a carried number) to add
    while (l1 !== null || l2 !== null || sum > 0) {
        // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        // Check if the sum for these nodes exceeds 10
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        // Add the sum to the new ListNode, and then move it to the next entry
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;

        // Set the sum for the next addition to equal the carry-over (if there was one)
        sum = carry;
        carry = 0;
    }

    // Return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;
};

// Source: https://duncan-mcardle.medium.com/leetcode-problem-2-add-two-numbers-javascript-2c158d3b965