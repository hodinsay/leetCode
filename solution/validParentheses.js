// Valid Parentheses

// DESCRIPTION: 

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// DIFFICULTY:
// EASY

// Solution:

function isValid(s) {
    // Initialise an array to store the closing brackets expected
    let expectedBrackets = [];

    // Loop through the letters in the input string
    for (let letter = 0; letter < inputString.length; letter++) {
        switch (inputString[letter]) {
            // Push the closing equivelant of any open brackets found
            case '{': {
                expectedBrackets.push('}');
                break;
            }
            case '[': {
                expectedBrackets.push(']');
                break;
            }
            case '(': {
                expectedBrackets.push(')');
                break;
            }
            // If a close bracket is found, check that it matches the last stored open bracket
            default: {
                if (expectedBrackets.pop() !== inputString[letter]) {
                    return false;
                }
            }
        }
    }

    // Return based on whether or not anything remains
    // (indicates that there were incorrect brackets)
    return !expectedBrackets.length;
};

// Source: https://duncan-mcardle.medium.com/leetcode-problem-20-valid-parentheses-javascript-a75d1744ec0d