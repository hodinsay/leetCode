// Climbing Stairs 

// DESCRIPTION:

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// DIFFICULTY:
// EASY

// Solution:

function climbStairs(n) {
    // Base cases
    if (n == 1 || n == 0) {
        return 1
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};

// Source: https://dev.to/urfan/leetcode-climbing-stairs-with-javascript-1dme
