const BinaryTree = require('../07-binaryTree')

describe('Data Structure: 07-BinaryTree', () => {
    let binaryTree

    beforeEach(() => {
        binaryTree = new BinaryTree()
    })

    it('not throw error when add data', () => {
        expect(() => binaryTree.add()).not.toThrow()
    })

    it('return true when add data that not exist in a binary tree', () => {
        expect(binaryTree.add(4)).toBeTruthy()
    })

    it('return false when add data that exist in a binary tree', () => {
        binaryTree.add(4)
        expect(binaryTree.add(4)).toBeFalsy()
    })

    it('not throw error when find the smallest data', () => {
        expect(() => binaryTree.findMin()).not.toThrow()
    })

    it('return null when find the smallest data in an empty binary tree', () => {
        expect(binaryTree.findMin()).toBeNull()
    })

    it('return the data when find the smallest data', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        expect(binaryTree.findMin()).toEqual(2)
    })

    it('not throw error when find the greatest data', () => {
        expect(() => binaryTree.findMax()).not.toThrow()
    })

    it('return null when find the greatest data in an empty binary tree', () => {
        expect(binaryTree.findMax()).toBeNull()
    })

    it('return the data when find the greatest data', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        expect(binaryTree.findMax()).toEqual(6)
    })

    it('return true of false when check if data exist or not in a binary tree', () => {
        binaryTree.add(4)
        expect(binaryTree.isPresent(4)).toBeTruthy()
        expect(binaryTree.isPresent(2)).toBeFalsy()
    })

    it('not throw error when find node tree', () => {
        expect(() => binaryTree.findNodeTree()).not.toThrow()
    })

    it('return null when find node tree that not exist in a binary tree', () => {
        expect(binaryTree.findNodeTree(4)).toBeNull()
    })

    it('return the node tree that has specific data', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        expect(binaryTree.findNodeTree(2).left.data).toEqual(1)
        expect(binaryTree.findNodeTree(2).right.data).toEqual(3)
        expect(binaryTree.findNodeTree(6).left.data).toEqual(5)
        expect(binaryTree.findNodeTree(6).right.data).toEqual(7)
    })

    it('not throw error when remove data', () => {
        expect(() => binaryTree.remove()).not.toThrow()
    })

    it('data not exist in a binary tree when remove added data', () => {
        binaryTree.add(4)
        expect(binaryTree.isPresent(4)).toBeTruthy()
        binaryTree.remove(4)
        expect(binaryTree.isPresent(4)).toBeFalsy()
    })

    it('data not change in a binary tree when remove not added data', () => {
        binaryTree.add(4)
        binaryTree.remove(2)
        expect(binaryTree.isPresent(4)).toBeTruthy()
    })

    it('possible to remove data if left or right child is null', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        binaryTree.remove(4)
        binaryTree.remove(7)
        expect(binaryTree.isPresent(4)).toBeFalsy()
        expect(binaryTree.isPresent(7)).toBeFalsy()
        binaryTree.add(0)
        binaryTree.add(4)
        binaryTree.remove(1)
        binaryTree.remove(3)
        expect(binaryTree.isPresent(1)).toBeFalsy()
        expect(binaryTree.isPresent(3)).toBeFalsy()
    })

    it('not throw error when find the shortest height', () => {
        expect(() => binaryTree.findMinHeight()).not.toThrow()
    })

    it('return -1 when find the shortest height in an empty binary tree', () => {
        expect(binaryTree.findMinHeight()).toEqual(-1)
    })

    it('return the shortest height in a binary tree', () => {
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(0)
        expect(binaryTree.findMinHeight()).toEqual(1)
    })

    it('not throw error when find the tallest height', () => {
        expect(() => binaryTree.findMaxHeight()).not.toThrow()
    })

    it('return -1 when find the tallest height in an empty binary tree', () => {
        expect(binaryTree.findMaxHeight()).toEqual(-1)
    })

    it('return the tallest height in a binary tree', () => {
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(0)
        expect(binaryTree.findMaxHeight()).toEqual(3)
    })

    it('not throw error when check if binary tree is balanced', () => {
        expect(() => binaryTree.isBalanced()).not.toThrow()
    })

    it('return true or false when check if binary tree is balance or not', () => {
        expect(binaryTree.isBalanced()).toBeFalsy()
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        expect(binaryTree.isBalanced()).toBeTruthy()
        binaryTree.remove(4)
        binaryTree.remove(7)
        expect(binaryTree.isBalanced()).toBeTruthy()
        binaryTree.add(0)
        expect(binaryTree.isBalanced()).toBeFalsy()
    })

    it('not throw error when traverse in order within a binary tree', () => {
        expect(() => binaryTree.inOrder()).not.toThrow()
    })

    it('return null when traverse in order within an empty binary tree', () => {
        expect(binaryTree.inOrder()).toBeNull()
    })

    it('return data as the result of traversing in order', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        binaryTree.remove(4)
        binaryTree.remove(7)
        binaryTree.add(0)
        const traverseInOrder = binaryTree.inOrder()
        const expectedResult = [0, 1, 2, 3, 5, 6]
        let result = false
        if (traverseInOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInOrder[i] !== expectedResult[i]) {
                    break
                }
                if (i === expectedResult.length - 1) {
                    if (traverseInOrder[i] === expectedResult[i]) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBeTruthy()
    })

    it('not throw error when traverse in pre-order within a binary tree', () => {
        expect(() => binaryTree.preOrder()).not.toThrow()
    })

    it('return null when traverse in pre-order within an empty binary tree', () => {
        expect(binaryTree.preOrder()).toBeNull()
    })

    it('return data as the result of traversing in pre-order', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        binaryTree.remove(4)
        binaryTree.remove(7)
        binaryTree.add(0)
        const traverseInPreOrder = binaryTree.preOrder()
        const expectedResult = [5, 2, 1, 0, 3, 6]
        let result = false
        if (traverseInPreOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInPreOrder[i] !== expectedResult[i]) {
                    break
                }
                if (i === expectedResult.length - 1) {
                    if (traverseInPreOrder[i] === expectedResult[i]) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBeTruthy()
    })

    it('not throw error when traverse in post-order within a binary tree', () => {
        expect(() => binaryTree.postOrder()).not.toThrow()
    })

    it('return null when traverse in post-order within an empty binary tree', () => {
        expect(binaryTree.postOrder()).toBeNull()
    })

    it('return data as the result of traversing in post-order', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        binaryTree.remove(4)
        binaryTree.remove(7)
        binaryTree.add(0)
        const traverseInPostOrder = binaryTree.postOrder()
        const expectedResult = [0, 1, 3, 2, 6, 5]
        let result = false
        if (traverseInPostOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInPostOrder[i] !== expectedResult[i]) {
                    break
                }
                if (i === expectedResult.length - 1) {
                    if (traverseInPostOrder[i] === expectedResult[i]) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBeTruthy()
    })

    it('not throw error when traverse in level-order within a binary tree', () => {
        expect(() => binaryTree.levelOrder()).not.toThrow()
    })

    it('return null when traverse in level-order within an empty binary tree', () => {
        expect(binaryTree.levelOrder()).toBeNull()
    })

    it('return data as the result of traversing in level-order', () => {
        binaryTree.add(4)
        binaryTree.add(2)
        binaryTree.add(6)
        binaryTree.add(1)
        binaryTree.add(3)
        binaryTree.add(5)
        binaryTree.add(7)
        binaryTree.remove(4)
        binaryTree.remove(7)
        binaryTree.add(0)
        const traverseInLevelOrder = binaryTree.levelOrder()
        const expectedResult = [5, 2, 6, 1, 3, 0]
        let result = false
        if (traverseInLevelOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInLevelOrder[i] !== expectedResult[i]) {
                    break
                }
                if (i === expectedResult.length - 1) {
                    if (traverseInLevelOrder[i] === expectedResult[i]) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBeTruthy()
    })
})