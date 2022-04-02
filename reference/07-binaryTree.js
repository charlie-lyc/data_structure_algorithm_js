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
            return true
        }
        /**************************************************/ 
        const searchTreeAndAddNode = (node) => {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data)
                    return true
                } else {
                    return searchTreeAndAddNode(node.left)
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data)
                    return true
                } else {
                    return searchTreeAndAddNode(node.right)
                }
            } else if (data === node.data) {
                return false
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

    findNodeTree(data) {
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
        const searchTreeAndRemoveNode = (node, data) => {
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
                node.right = searchTreeAndRemoveNode(node.right, temporaryNode.data)
            } else if (node.data > data) {
                node.left = searchTreeAndRemoveNode(node.left, data)
            } else if (node.data < data) {
                node.right = searchTreeAndRemoveNode(node.right, data)
            }
            return node
        }
        /********************************************************/
        this.root = searchTreeAndRemoveNode(this.root, data)
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
        if (this.root === null) {
            return false
        }
        return this.findMinHeight() >= this.findMaxHeight() - 1
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

const binaryTree = new BinaryTree()
console.log(binaryTree.findMin())
console.log(binaryTree.findMax())
console.log(binaryTree.isPresent(4))
console.log(binaryTree.findNodeTree(4))
binaryTree.remove()
console.log(binaryTree.findMinHeight())
console.log(binaryTree.findMaxHeight())
console.log(binaryTree.isBalanced())
console.log(binaryTree.inOrder())
console.log(binaryTree.preOrder())
console.log(binaryTree.postOrder())
console.log(binaryTree.levelOrder())

console.log(binaryTree.add(4))
console.log(binaryTree.add(4))
console.log(binaryTree.add(2))
console.log(binaryTree.add(6))
console.log(binaryTree.add(1))
console.log(binaryTree.add(3))
console.log(binaryTree.add(5))
console.log(binaryTree.add(7))
//              4
//         2          6
//     1      3    5     7
console.log(binaryTree)
console.log(binaryTree.findNodeTree(2))
console.log(binaryTree.findNodeTree(6))
console.log(binaryTree.findMin())
console.log(binaryTree.findMax())
console.log(binaryTree.isPresent(2))
console.log(binaryTree.isPresent(6))
console.log(binaryTree.findMinHeight())
console.log(binaryTree.findMaxHeight())
console.log(binaryTree.isBalanced())
binaryTree.remove(4)
binaryTree.remove(7)
//              5
//         2          6
//     1      3          
console.log(binaryTree.add(0))
//              5
//         2          6
//     1      3
// 0          
console.log(binaryTree.findMinHeight())
console.log(binaryTree.findMaxHeight())
console.log(binaryTree.isBalanced())

console.log(binaryTree.inOrder())   // [0, 1, 2, 3, 5, 6]
console.log(binaryTree.preOrder())  // [5, 2, 1, 0, 3, 6]
console.log(binaryTree.postOrder()) // [0, 1, 3, 2, 6, 5]
console.log(binaryTree.levelOrder())// [5, 2, 6, 1, 3, 0]

console.log(binaryTree.add(4))
console.log(binaryTree.findMinHeight())
console.log(binaryTree.findMaxHeight())

binaryTree.remove(1)
binaryTree.remove(3)