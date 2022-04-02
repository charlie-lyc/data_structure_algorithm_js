const Tree = require('../08-tree')

describe('Data Structure: 08-Tree', () => {
    let tree

    beforeEach(() => {
        tree = new Tree()
    })

    it('should have required methods and variables', () => {
        expect(tree).toHaveProperty('add')
        expect(tree).toHaveProperty('isPresent')
    })

    // it('should add children to the tree', function() {
    //     rootNode.insertNode(5)
    //     expect(rootNode.children[0].value).toEqual(5)
    // })

    // it('should return true for a value that the tree contains', () => {
    //     rootNode.insertNode(5)
    //     expect(rootNode.contains(5)).toEqual(true)
    // })

    // it('should return false for a value that was not added', () => {
    //     rootNode.insertNode(5)
    //     expect(rootNode.contains(6)).toEqual(false)
    // })

    // it("should be able to add children to a tree's child", () => {
    //     rootNode.insertNode(5)
    //     rootNode.insertNode(6)
    //     rootNode.children[0].insertNode(7)
    //     expect(rootNode.children[0].children.length).toEqual(1)
    //     expect(rootNode.children[0].contains(7)).toEqual(true)
    // })

    // it('should correctly detect nested children', () => {
    //     rootNode.insertNode(5)
    //     rootNode.insertNode(6)
    //     rootNode.children[0].insertNode(7)
    //     rootNode.children[1].insertNode(8)
    //     expect(rootNode.contains(7)).toEqual(true)
    //     expect(rootNode.contains(8)).toEqual(true)
    // })
})