const Stack = require('../01-stack')

describe('Data Structure: 01-Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('should have required methods', () => {
        expect(stack).toHaveProperty('print')
        expect(stack).toHaveProperty('size')
        expect(stack).toHaveProperty('push')
        expect(stack).toHaveProperty('pop')
        expect(stack).toHaveProperty('peek')
        expect(stack).toHaveProperty('isEmpty')
    })

    it('not throw error when print a stack', () => {
        expect(() => stack.print()).not.toThrow()
    })

    it('return 0 for the size of a new stack', () => {
        expect(stack.size()).toEqual(0)
    })

    it('not throw error when add an item', () => {
        expect(() => stack.push()).not.toThrow()
    })

    it('return 2 for the size of stack after adding two items', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.size()).toEqual(2)
    })

    it('not throw error when remove an item', () => {
        expect(() => stack.pop()).not.toThrow()
    })

    it('return null when remove an item from an empty stack', () => {
        expect(stack.pop()).toBeNull()
    })

    it('return 0 for the size of stack after removing more than added items', () => {
        stack.push('a')
        stack.pop()
        stack.pop()
        expect(stack.size()).toEqual(0)
    })

    it('return 1 for the size of stack after adding two items and removing one', () => {
        stack.push('a')
        stack.push('b')
        stack.pop()
        expect(stack.size()).toEqual(1)
    })

    it('return the last added item when remove an item', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.pop()).toMatch(/c/)
    })

    it('adding items sequentially but removing items reversely', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.pop()).toMatch(/c/)
        expect(stack.pop()).toMatch(/b/)
        expect(stack.pop()).toMatch(/a/)
    })

    it('return the last added item when peeking a stack', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.peek()).toMatch(/c/)
    })

    it('return true or false when stack is empty or not', () => {
        expect(stack.isEmpty()).toBeTruthy()
        stack.push('a')
        expect(stack.isEmpty()).toBeFalsy()
    })
})

