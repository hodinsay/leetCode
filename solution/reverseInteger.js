// Reverse Integer 

// DESCRIPTION:

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// DIFFICULTY:
// Medium 

// Solution:

function reverse(num) {
    // Conver the number to a string, split it to an array, reverse it, and then re-join it
        const reversedNumber = parseInt(
            Math.abs(num).toString().split('').reverse().join('')
        );
    
        // Check for an invalid output
        if (reversedNumber > 2147483647) {
            return 0;
        }
    
        // Return the reversed number (negating it if the original number was negative)
        return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
    };

// Source: https://duncan-mcardle.medium.com/leetcode-problem-7-reverse-integer-javascript-2da476fc77be
