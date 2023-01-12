/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var arr = [...nums1, ...nums2].sort((a, b) => a - b);
  var index = Math.floor((arr.length - 1) / 2);

  if (arr.length % 2) {
    return arr[index];
  } else {
    return (arr[index] + arr[index + 1]) / 2;
  }
};
