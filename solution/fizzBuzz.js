// FizzBuzz

// LANGUAGE: JavaScript

// DIFFICULTY: EASY

// DESCRIPTION: 

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Solution:

// Frequency Counters Pattern: Using [] to collect values/frequencies of values. 

function fizzBuzz(n) {
    // Set variable with array [] to collect values.
    let arr = [];
    
    // Create a For loop for n input. 
    for (let i = 1; i <= n; i++) {
    // Create if ... else conditions. Use % operation to determine odd n value.
        if (i % 3 === 0 && i % 5 === 0) {
    // Use push() method to add value to the end of the array list. 
            arr.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            arr.push('Fizz');
        }
        else if (i % 5 === 0) {
            arr.push('Buzz');
        }
        else {
    // Use toString() method to push n input to the array list as string value if not . 
            arr.push(i.toString());
        }
    }

    // Return array list as the output.
    return arr;
};

// Runtime: ~125ms
// Memory: ~44.1 MB

// Source: 
// https://duncan-mcardle.medium.com/leetcode-problem-412-fizzbuzz-javascript-3944df2d6475
// https://leetcode.com/problems/fizz-buzz/submissions/