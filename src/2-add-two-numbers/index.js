/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = l1.val + l2.val;
  let next1 = l1.next;
  let next2 = l2.next;

  if (sum >= 10) {
    sum = sum - 10;

    if (!!next1) {
      next1.val += 1;
    } else {
      next1 = new ListNode(1);
    }
  }

  if (!!next1 && !!next2) {
    return new ListNode(sum, addTwoNumbers(next1, next2));
  } else if (!!next1) {
    return new ListNode(sum, addTwoNumbers(next1, new ListNode(0)));
  } else if (!!next2) {
    return new ListNode(sum, addTwoNumbers(new ListNode(0), next2));
  }

  return new ListNode(sum);
};
