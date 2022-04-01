const Queue = require('../02-queue')

describe('Data Structure: 02-Queue', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    it('not throw error when print a queue', () => {
        expect(() => queue.print()).not.toThrow()
    })

    it('return 0 for the size of a new queue', () => {
        expect(queue.size()).toEqual(0)
    })

    it('not throw error when add an item', () => {
        expect(() => queue.enqueue()).not.toThrow()
    })

    it('return 2 for the size of queue after adding two items', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.size()).toEqual(2)
    })

    it('not throw error when remove an item', () => {
        expect(() => queue.dequeue()).not.toThrow()
    })

    it('return null when remove an item from an empty queue', () => {
        expect(queue.dequeue()).toBeNull()
    })

    it('return 0 for the size of queue after removing more than added items', () => {
        queue.enqueue('a')
        queue.dequeue()
        queue.dequeue()
        expect(queue.size()).toEqual(0)
    })

    it('return 1 for the size of queue after adding two items and removing one', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.dequeue()
        expect(queue.size()).toEqual(1)
    })

    it('return the first added item when removing an item', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.dequeue()).toMatch(/a/)
    })

    it('adding items sequentially and same removing items', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.dequeue()).toMatch(/a/)
        expect(queue.dequeue()).toMatch(/b/)
        expect(queue.dequeue()).toMatch(/c/)
    })

    it("return the first added item when use 'frontIs' method including 'front' property", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.frontIs()).toMatch(/a/)
    })

    it("return the last added item when use 'rearIs' method including 'rear' property", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.rearIs()).toMatch(/c/)
    })

    it('returns true or false when queue is empty or not', () => {
        expect(queue.isEmpty()).toBeTruthy()
        queue.enqueue('a')
        expect(queue.isEmpty()).toBeFalsy()
    })

})