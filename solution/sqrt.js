// Sqrt(x)

// DESCRIPTION: 

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// DIFFICULTY:
// EASY 

// Solution:

function mySqrt(x) {
    let left = 1;
    let right = x;
    // The square root of 0 or 1 is itself
    if(x < 2) return x;

    // Use binary search to find the square root or the whole number closest to the square root
    while(left < right) {
        // Find the mid point between left and right
        const mid = Math.floor((left + right) / 2)
        // Return the mid point if this is the square root
        if(mid*mid === x) return mid
        // If mid squared is greater than x then the answer must be on the left half of mid
        else if(mid*mid >x) right = mid
        // If mid squred is less than x then the answer must be on the right half of mid
        else left = mid+1
    }
    return left - 1
};

// Source: https://dev.to/cod3pineapple/69-sqrt-x-javascript-solution-1hn0
