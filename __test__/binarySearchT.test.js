const BinarySearchTree = require('../07-binarySearchTree')

describe('Data Structure: 07-bst', () => {
    let bst

    beforeEach(() => {
        bst = new BinarySearchTree()
    })

    it('should have required methods', () => {
        expect(bst).toHaveProperty('add')
        expect(bst).toHaveProperty('isPresent')
        expect(bst).toHaveProperty('remove')
        expect(bst).toHaveProperty('findNode')
        expect(bst).toHaveProperty('findMin')
        expect(bst).toHaveProperty('findMax')
        expect(bst).toHaveProperty('findMinHeight')
        expect(bst).toHaveProperty('findMaxHeight')
        expect(bst).toHaveProperty('isBalanced')
        expect(bst).toHaveProperty('inOrder')
        expect(bst).toHaveProperty('preOrder')
        expect(bst).toHaveProperty('postOrder')
        expect(bst).toHaveProperty('levelOrder')
    })

    it('not throw error when add data to a binary search tree', () => {
        expect(() => bst.add()).not.toThrow()
    })

    it('return false for the not given argument when add data', () => {
        expect(bst.add()).toBe(false)
    })

    it('return false for the given argument of not number when add data', () => {
        expect(bst.add('a')).toBe(false)
    })

    it('return true when add data that not exist in a binary search tree', () => {
        expect(bst.add(4)).toBe(true)
    })

    it('return false when add data that exist in a binary search tree', () => {
        bst.add(4)
        expect(bst.add(4)).toBe(false)
    })

    it('not throw error when check if data exist in a binary search tree', () => {
        expect(() => bst.isPresent()).not.toThrow()
    })

    it('return false for the not given argument when check if data exist', () => {
        expect(bst.isPresent()).toBe(false)
    })

    it('return false for the given argument of not number when check if data exist', () => {
        expect(bst.isPresent('a')).toBe(false)
    })

    it('return true or false when check if data exist or not', () => {
        bst.add(4)
        expect(bst.isPresent(4)).toBe(true)
        expect(bst.isPresent(2)).toBe(false)
    })

    it('not throw error when remove data from a binary search tree', () => {
        expect(() => bst.remove()).not.toThrow()
    })

    it('return false for the not given argument when remove data', () => {
        expect(bst.remove()).toBe(false)
    })

    it('return false for the given argument of not number when remove data', () => {
        expect(bst.remove('a')).toBe(false)
    })

    it('return false when remove data that not exist in a binary search tree', () => {
        expect(bst.remove(4)).toBe(false)
    })

    it('return true when remove data that exist in a binary search tree', () => {
        bst.add(4)
        expect(bst.remove(4)).toBe(true)
    })

    it('possible to remove data if left or right child is null', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        expect(bst.remove(4)).toBe(true)
        expect(bst.remove(7)).toBe(true)
        bst.add(0)
        bst.add(4)
        expect(bst.remove(1)).toBe(true)
        expect(bst.remove(3)).toBe(true)
    })

    it('not throw error when find node in a binary search tree', () => {
        expect(() => bst.findNode()).not.toThrow()
    })

    it('return null for the not given argument when find node', () => {
        expect(bst.findNode()).toBeNull()
    })

    it('return null for the given argument of not number when find node', () => {
        expect(bst.findNode('a')).toBeNull()
    })

    it('return null when find node that not exists in a binary search tree', () => {
        expect(bst.findNode(4)).toBeNull()
    })

    it('return the node when find node that exists in a binary search tree', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        expect(bst.findNode(2).left.data).toEqual(1)
        expect(bst.findNode(2).right.data).toEqual(3)
        expect(bst.findNode(6).left.data).toEqual(5)
        expect(bst.findNode(6).right.data).toEqual(7)
    })

    it('not throw error when find the smallest data in a binary search tree', () => {
        expect(() => bst.findMin()).not.toThrow()
    })

    it('return null when find the smallest data in an empty binary search tree', () => {
        expect(bst.findMin()).toBeNull()
    })

    it('return the data when find the smallest data', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        expect(bst.findMin()).toEqual(2)
    })

    it('not throw error when find the greatest data in a binary search tree', () => {
        expect(() => bst.findMax()).not.toThrow()
    })

    it('return null when find the greatest data in an empty binary search tree', () => {
        expect(bst.findMax()).toBeNull()
    })

    it('return the data when find the greatest data', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        expect(bst.findMax()).toEqual(6)
    })

    it('not throw error when find the shortest height in a binary search tree', () => {
        expect(() => bst.findMinHeight()).not.toThrow()
    })

    it('return -1 when find the shortest height in an empty binary search tree', () => {
        expect(bst.findMinHeight()).toEqual(-1)
    })

    it('return the value when find the shortest height', () => {
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(0)
        expect(bst.findMinHeight()).toEqual(1)
    })

    it('not throw error when find the tallest height in a binary search tree', () => {
        expect(() => bst.findMaxHeight()).not.toThrow()
    })

    it('return -1 when find the tallest height in an empty binary search tree', () => {
        expect(bst.findMaxHeight()).toEqual(-1)
    })

    it('return the value when find the tallest height', () => {
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(0)
        expect(bst.findMaxHeight()).toEqual(3)
    })

    it('not throw error when check if binary search tree is balanced', () => {
        expect(() => bst.isBalanced()).not.toThrow()
    })

    it('return false for the empty binary search tree when check if binary search tree is balanced', () => {
        expect(bst.isBalanced()).toBe(false)
    })

    it('return true or false when check if binary search tree is balanced or not', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        expect(bst.isBalanced()).toBe(true)
        bst.remove(4)
        bst.remove(7)
        expect(bst.isBalanced()).toBe(true)
        bst.add(0)
        expect(bst.isBalanced()).toBe(false)
    })

    it('not throw error when traverse in order within a binary search tree', () => {
        expect(() => bst.inOrder()).not.toThrow()
    })

    it('return null when traverse in order within an empty binary search tree', () => {
        expect(bst.inOrder()).toBeNull()
    })

    it('return array as the result of traversing in order', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        bst.remove(4)
        bst.remove(7)
        bst.add(0)
        const traverseInOrder = bst.inOrder()
        const expectedResult = [0, 1, 2, 3, 5, 6]
        let result = false
        if (traverseInOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInOrder[i] !== expectedResult[i]) {
                    break
                } else {
                    if (i === expectedResult.length - 1) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBe(true)
    })

    it('not throw error when traverse in pre-order within a binary search tree', () => {
        expect(() => bst.preOrder()).not.toThrow()
    })

    it('return null when traverse in pre-order within an empty binary search tree', () => {
        expect(bst.preOrder()).toBeNull()
    })

    it('return array as the result of traversing in pre-order', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        bst.remove(4)
        bst.remove(7)
        bst.add(0)
        const traverseInPreOrder = bst.preOrder()
        const expectedResult = [5, 2, 1, 0, 3, 6]
        let result = false
        if (traverseInPreOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInPreOrder[i] !== expectedResult[i]) {
                    break
                } else {
                    if (i === expectedResult.length - 1) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBe(true)
    })

    it('not throw error when traverse in post-order within a binary search tree', () => {
        expect(() => bst.postOrder()).not.toThrow()
    })

    it('return null when traverse in post-order within an empty binary search tree', () => {
        expect(bst.postOrder()).toBeNull()
    })

    it('return array as the result of traversing in post-order', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        bst.remove(4)
        bst.remove(7)
        bst.add(0)
        const traverseInPostOrder = bst.postOrder()
        const expectedResult = [0, 1, 3, 2, 6, 5]
        let result = false
        if (traverseInPostOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInPostOrder[i] !== expectedResult[i]) {
                    break
                } else {
                    if (i === expectedResult.length - 1) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBe(true)
    })

    it('not throw error when traverse in level-order within a binary search tree', () => {
        expect(() => bst.levelOrder()).not.toThrow()
    })

    it('return null when traverse in level-order within an empty binary search tree', () => {
        expect(bst.levelOrder()).toBeNull()
    })

    it('return array as the result of traversing in level-order', () => {
        bst.add(4)
        bst.add(2)
        bst.add(6)
        bst.add(1)
        bst.add(3)
        bst.add(5)
        bst.add(7)
        bst.remove(4)
        bst.remove(7)
        bst.add(0)
        const traverseInLevelOrder = bst.levelOrder()
        const expectedResult = [5, 2, 6, 1, 3, 0]
        let result = false
        if (traverseInLevelOrder.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (traverseInLevelOrder[i] !== expectedResult[i]) {
                    break
                } else {
                    if (i === expectedResult.length - 1) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBe(true)
    })
})