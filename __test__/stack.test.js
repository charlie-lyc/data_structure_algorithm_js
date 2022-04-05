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

    it('not throw error when measure the size of a stack', () => {
        expect(() => stack.size()).not.toThrow()
    })

    it('return 0 for the size of a new stack', () => {
        expect(stack.size()).toEqual(0)
    })

    it('not throw error when add an item', () => {
        expect(() => stack.push()).not.toThrow()
    })

    it('return false for the not given argument when add an element', () => {
        expect(stack.push()).toBe(false)
    })

    it('return true for the given argument when add an element', () => {
        expect(stack.push('a')).toBe(true)
    })

    it('return 2 for the size of stack after adding two elements', () => {
        stack.push('a')
        stack.push('b')
        expect(stack.size()).toEqual(2)
    })

    it('not throw error when remove an element', () => {
        expect(() => stack.pop()).not.toThrow()
    })

    it('return null when remove an element from an empty stack', () => {
        expect(stack.pop()).toBeNull()
    })

    it('return 0 for the size of stack after removing more than added elements', () => {
        stack.push('a')
        stack.pop()
        stack.pop()
        expect(stack.size()).toEqual(0)
    })

    it('return 1 for the size of stack after adding two elements and removing one', () => {
        stack.push('a')
        stack.push('b')
        stack.pop()
        expect(stack.size()).toEqual(1)
    })

    it('return the last added element when remove an element', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.pop()).toMatch(/c/)
    })

    it('adding elements sequentially but removing elements reversely', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.pop()).toMatch(/c/)
        expect(stack.pop()).toMatch(/b/)
        expect(stack.pop()).toMatch(/a/)
    })

    it('not throw error when peek a stack', () => {
        expect(() => stack.peek()).not.toThrow()
    })

    it('return the last added element when peek a stack', () => {
        stack.push('a')
        stack.push('b')
        stack.push('c')
        expect(stack.peek()).toMatch(/c/)
    })

    it('not throw error when check if stack is empty', () => {
        expect(() => stack.isEmpty()).not.toThrow()
    })

    it('return true or false when check if stack is empty or not', () => {
        expect(stack.isEmpty()).toBe(true)
        stack.push('a')
        expect(stack.isEmpty()).toBe(false)
    })
})

