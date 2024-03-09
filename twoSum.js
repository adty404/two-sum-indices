// Install lodash as a dependency: npm install lodash
const _ = require("lodash");

/**
 * Find indices of two numbers in an array that add up to a target sum.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers.
 */
function twoSum(nums, target) {
	const indexMap = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;

		// Check if the complement exists in the map
		if (indexMap[complement] !== undefined) {
			return [indexMap[complement], i];
		}

		// Add the current element and its index to the map
		indexMap[num] = i;
	}

	// If no such indices are found, return an empty array
	return [];
}
