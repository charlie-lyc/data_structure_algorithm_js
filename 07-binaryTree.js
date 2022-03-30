/* Binary Tree */ 
class Node {
    constructor(data, left = null, right = null) {
        // Initialize: data, left, right

    }
}

class BinaryTree {
    constructor() {
        // Initialize: root
        
    }

    add(data) {

    }

    findMin() {

    }

    findMax() {

    }

    isPresent(data) {

    }

    find(data) {

    }

    remove(data) {

    }

    findMinHeight(node = this.root) {

    } 

    findMaxHeight(node = this.root) {

    }

    isBalanced() {

    }

    inOrder() {

    }

    preOrder() {

    }

    postOrder() {

    }
    
    levelOrder() {

    }
}

module.exports = BinaryTree

//////////////////////////////////////////////////////////

const binarySearchTree = new BinaryTree()
binarySearchTree.add(4)
binarySearchTree.add(2)
binarySearchTree.add(6)
binarySearchTree.add(1)
binarySearchTree.add(3)
binarySearchTree.add(5)
binarySearchTree.add(7)
//              4
//         2          6
//     1      3    5     7
console.log(binarySearchTree)
console.log(binarySearchTree.find(2))
console.log(binarySearchTree.findMin())
console.log(binarySearchTree.findMax())
console.log(binarySearchTree.isPresent(0))
console.log(binarySearchTree.findMinHeight())
console.log(binarySearchTree.findMaxHeight())
console.log(binarySearchTree.isBalanced())
binarySearchTree.remove(4)
binarySearchTree.remove(7)
//              5
//         2          6
//     1      3          
console.log(binarySearchTree.findMinHeight())
console.log(binarySearchTree.isBalanced())
binarySearchTree.add(0)
//              5
//         2          6
//     1      3
// 0          
console.log(binarySearchTree.findMinHeight())
console.log(binarySearchTree.findMaxHeight())
console.log(binarySearchTree.isBalanced())

console.log(binarySearchTree.inOrder())   // [0, 1, 2, 3, 5, 6]
console.log(binarySearchTree.preOrder())  // [5, 2, 1, 0, 3, 6]
console.log(binarySearchTree.postOrder()) // [0, 1, 3, 2, 6, 5]
console.log(binarySearchTree.levelOrder())// [5, 2, 6, 1, 3, 0]