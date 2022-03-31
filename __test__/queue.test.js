const Queue = require('../02-queue')

describe('Data Structure: 02-Queue', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    it('does not throw error when print queue', () => {
        expect(() => queue.print()).not.toThrow()
    })

    it('returns 0 for the size of a new queue', () => {
        expect(queue.size()).toEqual(0)
    })

    it('does not throw error when adding an item', () => {
        expect(() => queue.enqueue()).not.toThrow()
    })

    it('returns 2 for the size of queue after adding two items', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.size()).toEqual(2)
    })

    it('does not throw error when removing an item', () => {
        expect(() => queue.dequeue()).not.toThrow()
    })

    it('returns null when removing an item from an empty queue', () => {
        expect(queue.dequeue()).toEqual(null)
    })

    it('returns 0 for the size of queue after removing more than added items', () => {
        queue.enqueue('a')
        queue.dequeue()
        queue.dequeue()
        expect(queue.size()).toEqual(0)
    })

    it('returns 1 for the size of queue after adding two items and removing one', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.dequeue()
        expect(queue.size()).toEqual(1)
    })

    it('returns the first added item when removing an item', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.dequeue()).toEqual('a')
    })

    it('adding items sequentially and same removing items', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.dequeue()).toEqual('a')
        expect(queue.dequeue()).toEqual('b')
        expect(queue.dequeue()).toEqual('c')
    })

    it("returns the first added item when using 'frontIs' method", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.frontIs()).toEqual('a')
    })

    it("returns the last added item when using 'rearIs' method", () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.rearIs()).toEqual('c')
    })

    it('returns true or false when queue is empty or not', () => {
        expect(queue.isEmpty()).toEqual(true)
        queue.enqueue('a')
        expect(queue.isEmpty()).toEqual(false)
    })

})