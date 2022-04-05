const Queue = require('../02-queue')

describe('Data Structure: 02-Queue', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    it('should have required methods', () => {
        expect(queue).toHaveProperty('print')
        expect(queue).toHaveProperty('size')
        expect(queue).toHaveProperty('enqueue')
        expect(queue).toHaveProperty('dequeue')
        expect(queue).toHaveProperty('frontIs')
        expect(queue).toHaveProperty('rearIs')
        expect(queue).toHaveProperty('isEmpty')
    })

    it('not throw error when print a queue', () => {
        expect(() => queue.print()).not.toThrow()
    })

    it('not throw error when measure the size of a queue', () => {
        expect(() => queue.size()).not.toThrow()
    })

    it('return 0 for the size of a new queue', () => {
        expect(queue.size()).toEqual(0)
    })

    it('not throw error when add an element', () => {
        expect(() => queue.enqueue()).not.toThrow()
    })

    it('return false for the not given argument when add an element', () => {
        expect(queue.enqueue()).toBe(false)
    })

    it('return true for the given argument when add an element', () => {
        expect(queue.enqueue('a')).toBe(true)
    })

    it('return 2 for the size of queue after adding two elements', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.size()).toEqual(2)
    })

    it('not throw error when remove an element', () => {
        expect(() => queue.dequeue()).not.toThrow()
    })

    it('return null when remove an element from an empty queue', () => {
        expect(queue.dequeue()).toBeNull()
    })

    it('return 0 for the size of queue after removing more than added elements', () => {
        queue.enqueue('a')
        queue.dequeue()
        queue.dequeue()
        expect(queue.size()).toEqual(0)
    })

    it('return 1 for the size of queue after adding two elements and removing one', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.dequeue()
        expect(queue.size()).toEqual(1)
    })

    it('return the first added element when removing an element', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.dequeue()).toMatch(/a/)
    })

    it('adding elements sequentially and removing with the same sequence', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.dequeue()).toMatch(/a/)
        expect(queue.dequeue()).toMatch(/b/)
        expect(queue.dequeue()).toMatch(/c/)
    })

    it("not throw error when use 'frontIs' method", () => {
        expect(() => queue.frontIs()).not.toThrow()
    })

    it("return the first added element when use 'frontIs' method including 'front' property", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.frontIs()).toMatch(/a/)
    })

    it("not throw error when use 'rearIs' method", () => {
        expect(() => queue.rearIs()).not.toThrow()
    })

    it("return the last added element when use 'rearIs' method including 'rear' property", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.rearIs()).toMatch(/c/)
    })

    it('not throw error when check if queue is empty', () => {
        expect(() => queue.isEmpty()).not.toThrow()
    })

    it('returns true or false when check if queue is empty or not', () => {
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue('a')
        expect(queue.isEmpty()).toBe(false)
    })

})