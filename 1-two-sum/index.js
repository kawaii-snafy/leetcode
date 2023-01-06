/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const newArr = Object.fromEntries(nums.map((el, index) => [el, index]));

  for (let i = 0; i < nums.length; i++) {
    if (newArr[target - nums[i]] && i !== newArr[target - nums[i]]) {
      return [i, newArr[target - nums[i]]];
    }
  }

  return [];
};