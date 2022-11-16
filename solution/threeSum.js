// 3Sum

// DESCRIPTION:

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// DIFFICULTY:
// MEDIUM 

// Solution:

const threeSum = function(nums) {
    // Initialise an array to store the solutions
    let solutionArrays = [];

    // Sort the array
    const sortedNums = nums.sort((a, b) => a - b);

    // Loop through the array (excluding the last 2 entries)
    for (let i = 0; i < sortedNums.length - 2; i++) {
    // Break out if the first number is higher than 0 (as no sum of 3 can then equal 0)
        if (sortedNums[i] > 0) {
            break;
        }

        // Skip this number if it is a repeat of the last one
        if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
            continue;
        }

        // Establish a window from the next number to the end of the array
        let left = i + 1;
        let right = sortedNums.length - 1;

        // Run until the window is closed
        while (left < right) {
            // Add together the current number, and each side of the window
            const subTotal =
                sortedNums[left] + sortedNums[right] + sortedNums[i];

            // If we've reached an answer, add it to the array of answers
            if (subTotal == 0) {
                solutionArrays.push([
                    sortedNums[i],
                    sortedNums[left],
                    sortedNums[right],
                ]);

                // Move the left-hand edge of the window to the right until it reaches a different number
                do {
                    left++;
                } while (sortedNums[left] == sortedNums[left - 1]);

                // Move the right-hand edge of the window to the left until it reaches a different number
                do {
                    right--;
                } while (sortedNums[right] == sortedNums[right + 1]);
            }
            // If we're too low
            else if (subTotal < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return solutionArrays;
};

// Source: https://duncan-mcardle.medium.com/leetcode-problem-15-3sum-javascript-3e33ba5b8da