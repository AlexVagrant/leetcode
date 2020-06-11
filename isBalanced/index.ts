/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 满足平衡二叉树的三个条件
// 左子树是平衡二叉树。
// 右子树是平衡二叉树。
// 左右子树之间的深度不超过1.
var isBalanced = function(root) {
 if (!root) return true;
 const res = isBalanced(root.left) &&
 		isBalanced(root.right) &&
 		Math.abs(height(root.left) - height(root.right)) <= 1;
 console.log(root)
 return res;
};

function height(node) {
	if (!node) return 0;
	return  Math.max(height(node.left), height(node.right)) + 1
}