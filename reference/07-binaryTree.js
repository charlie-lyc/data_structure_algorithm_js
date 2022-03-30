/* Binary Tree */ 
class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(data) {
        if (this.root === null) {
            this.root = new Node(data)
            return
        }
        /**************************************************/ 
        const searchTreeAndAddNode = (node) => {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data)
                    return
                } else {
                    return searchTreeAndAddNode(node.left)
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data)
                    return
                } else {
                    return searchTreeAndAddNode(node.right)
                }
            } else {
                return null
            }
        }
        /**************************************************/ 
        return searchTreeAndAddNode(this.root)
    }

    findMin() {
        if (this.root === null) {
            return null
        }
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        if (this.root === null) {
            return null
        }
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }

    isPresent(data) {
        let current = this.root
        while (current !== null) {
            if (current.data === data) {
                return true
            }
            if (current.data > data) {
                current = current.left
            } else if (current.data < data) {
                current = current.right
            }
        }
        return false
    }

    find(data) {
        let current = this.root
        while (current !== null) {
            if (current.data === data) {
                return current
            }
            if (current.data > data) {
                current = current.left
            } else if (current.data < data) {
                current = current.right
            }
        }
        return null
    }

    remove(data) {
        /********************************************************/ 
        const removeNodeFromTree = (node, data) => {
            if (node === null) {
                return null
            }
            if (node.data === data) {
                if (node.left === null && node.right === null) {
                    return null
                } else if (node.left === null) {
                    return node.right
                } else if (node.right === null) {
                    return node.left
                }
                // Condition: (node.left !== null && node.right !== null)
                let temporaryNode = node.right
                while (temporaryNode.left) {
                    temporaryNode = temporaryNode.left
                }
                node.data = temporaryNode.data
                node.right = removeNodeFromTree(node.right, temporaryNode.data)
            } else if (node.data > data) {
                node.left = removeNodeFromTree(node.left, data)
            } else if (node.data < data) {
                node.right = removeNodeFromTree(node.right, data)
            }
            return node
        }
        /********************************************************/
        this.root = removeNodeFromTree(this.root, data)
    }

    //////////////////////////////////////////////////////////////////////
    findMinHeight(node = this.root) {
        if (node === null) {
            return -1
        }
        const left = this.findMinHeight(node.left) + 1
        const right = this.findMinHeight(node.right) + 1
        if (left < right) {
            return left
        } else {
            return right
        }
    } 

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1
        }
        const left = this.findMaxHeight(node.left) + 1
        const right = this.findMaxHeight(node.right) + 1
        if (left < right) {
            return right
        } else {
            return left
        }
    }

    /**
     * Binary Tree: Perfect, Full, Complete, Balanced, Degenerate
     * https://towardsdatascience.com/5-types-of-binary-tree-with-cool-illustrations-9b335c430254
     */
    isBalanced() {
        return (this.findMinHeight() === this.findMaxHeight()) || (this.findMinHeight() === this.findMaxHeight() - 1)
        // return this.findMinHeight() >= this.findMaxHeight() - 1
    }

    //////////////////////////////////////////////////////////////////////
    /**
     * Traversal Order:  In, Pre, Post, Level
     */
    inOrder() {
        if (this.root === null) {
            return null
        }
        /**********************************/
        const result = []
        const traverseInOrder = (node) => {
            if (node === null) {
                return
            }
            traverseInOrder(node.left)
            result.push(node.data)
            traverseInOrder(node.right)
        }
        /**********************************/
        traverseInOrder(this.root)
        return result
    }

    preOrder() {
        if (this.root === null) {
            return null
        }
        /**********************************/
        const result = []
        const traversePreOrder = (node) => {
            if (node === null) {
                return
            }
            result.push(node.data)
            traversePreOrder(node.left)
            traversePreOrder(node.right)
        }
        /**********************************/
        traversePreOrder(this.root)
        return result
    }

    postOrder() {
        if (this.root === null) {
            return null
        }
        /**********************************/
        const result = []
        const traversePostOrder = (node) => {
            if (node === null) {
                return
            }
            traversePostOrder(node.left)
            traversePostOrder(node.right)
            result.push(node.data)
        }
        /**********************************/
        traversePostOrder(this.root)
        return result
    }
    
    levelOrder() {
        if (this.root === null) {
            return null
        }
        const queue = []
        const result = []
        queue.push(this.root)
        while (queue.length !== 0) {
            let current = queue.shift()
            result.push(current.data)
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        return result
    }
}

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