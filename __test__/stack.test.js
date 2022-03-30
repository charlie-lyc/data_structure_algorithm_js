const Stack = require('../01-stack')

describe('Data Structure: 01-Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('does not throw error when print stack', () => {
        expect(() => stack.print()).not.toThrow()
    })

    it('returns 0 for the size of a new stack', () => {
        expect(stack.size()).toEqual(0)
    })

    it('does not throw error when adding an item', () => {
        expect(() => stack.push()).not.toThrow()
    })

    it('returns 2 for the size of stack after adding two items', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.size()).toEqual(2)
    })

    it('does not throw error when removing an item', () => {
        expect(() => stack.pop()).not.toThrow()
    })

    it('returns 0 for the size of stack after removing more than the number of added items', () => {
        stack.push('a')
        stack.pop()
        stack.pop()
        expect(stack.size()).toEqual(0)
    })

    it('returns null when removing an item from an empty stack', () => {
        expect(stack.pop()).toEqual(null)
    })

    it('returns 1 for the size of stack after adding two items and removing one', () => {
        stack.push('a')
        stack.push('b')
        stack.pop()
        expect(stack.size()).toEqual(1)
    })

    it('returns the last added item when removing an item', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.pop()).toEqual('b')
    })

    it('adding items sequentially but removing items reversely', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.pop()).toEqual('c')
        expect(stack.pop()).toEqual('b')
        expect(stack.pop()).toEqual('a')
    })

    it('returns the last item of stack when peeking an stack', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.peek()).toEqual('b')
    })

    it('returns true or false when stack is empty or not', () => {
        expect(stack.isEmpty()).toEqual(true)
        stack.push('a')
        expect(stack.isEmpty()).toEqual(false)
    })
})

