// Search Insert Position 

// DESCRIPTION:

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// DIFFICULTY:
// EASY

// Solution:

function searchInsert(nums, target) {
    let min = 0
    let max = nums.length - 1
  
    while (true) {
      const middle = Math.floor((min + max) / 2)
      const num = nums[middle]
  
      if (max - min <= 1) {
        if (target <= nums[min]) {
          return min
        } else if (target <= nums[max]) {
          return max
        } else {
          return max + 1
        }
      }
  
      if (num > target) {
        max = middle
      } else if (num < target) {
        min = middle
      } else {
        return middle
      }
    }
  };