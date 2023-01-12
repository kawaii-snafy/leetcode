/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = s.split("");
  let biggest_count = 0;

  for (let i = 0; i < arr.length; i++) {
    let substr = new Map();

    for (let j = i; j < arr.length; j++) {
      if (substr.get(arr[j])) {
        break;
      }

      substr.set(arr[j], 1);
    }

    let count = substr.size;
    biggest_count = count > biggest_count ? count : biggest_count;
  }

  return biggest_count;
};
