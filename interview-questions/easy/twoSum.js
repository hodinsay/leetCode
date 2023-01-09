// Two Sum 

// Difficulty: 7-kyu 

// Language: JavaScript

// Topics: Array, Hash Table

// Description: 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution:

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};

// Runtime: 114 MB
// Memory: 42.5 MB

// My thought process:
// Need to return [] of the two indices within a given array nums that adds up to target.
// Implement a for() loop starting from i = 0 and a second for() loop starting from j = i + 1 (or i = 1).
// Set an if boolean condition for when nums[i] + nums[j] === target is truthy to return [i, j].