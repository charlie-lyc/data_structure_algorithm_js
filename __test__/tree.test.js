const Tree = require('../08-tree')

describe('Data Structure: 08-Tree', () => {
    let tree

    beforeEach(() => {
        tree = new Tree(null)
    })

    it('should have required methods', () => {
        expect(tree).toHaveProperty('add')
        expect(tree).toHaveProperty('isPresent')
        expect(tree).toHaveProperty('isDuplicated')
        expect(tree).toHaveProperty('removeEvery')
    })

    it('not throw error when add data', () => {
        expect(() => tree.add()).not.toThrow()
    })

    it('not throw error when check if data exist in a tree', () => {
        expect(() => tree.isPresent()).not.toThrow()
    })

    it('return true or false when check if data exist in a tree', () => {
        tree.add(5)
        expect(tree.isPresent(5)).toBe(true)
        expect(tree.isPresent(6)).toBe(false)
    })

    it("possible to add an child to a tree's children", () => {
        tree.add(5)
        tree.children[0].add(6)
        expect(tree.isPresent(6)).toBe(true)
        expect(tree.children[0].isPresent(6)).toBe(true)
    })

    it('correctly detect nested children', () => {
        tree.add(5)
        tree.add(6)
        tree.children[0].add(7)
        tree.children[1].add(8)
        expect(tree.children[0].isPresent(7)).toBe(true)
        expect(tree.children[1].isPresent(8)).toBe(true)
        expect(tree.children[0].isPresent(8)).toBe(false)
        expect(tree.children[1].isPresent(7)).toBe(false)
    })

    it('not throw error when check if data is duplicated', () => {
        expect(() => tree.isDuplicated()).not.toThrow()
    })

    it('return true or false when check if data is duplicated or not', () => {
        tree.add(5)
        tree.children[0].add(6)
        tree.children[0].add(5)
        expect(tree.isDuplicated(5)).toBe(true)
        expect(tree.isDuplicated(6)).toBe(false)
    })

    it('not throw error when remove all specific data', () => {
        expect(() => tree.removeEvery()).not.toThrow()
    })

    it('possible to remove all specific data', () => {
        tree.add(5)
        tree.children[0].add(6)
        tree.children[0].add(5)
        tree.removeEvery(5)
        expect(tree.isPresent(5)).toBe(false)
    })
})