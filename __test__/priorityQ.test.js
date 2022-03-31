const PriorityQueue = require('../03-priorityQueue')

describe('Data Structure: 03-PriorityQueue', () => {
    let priorityQueue

    beforeEach(() => {
        priorityQueue = new PriorityQueue()
    })

    it('does not throw error when print priority queue', () => {
        expect(() => priorityQueue.print()).not.toThrow()
    })

    it('returns 0 for the size of a new priority queue', () => {
        expect(priorityQueue.size()).toEqual(0)
    })

    it('does not throw error when adding an item', () => {
        expect(() => priorityQueue.enqueue()).not.toThrow()
    })

    it('returns 2 for the size of priority queue after adding two items', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        expect(priorityQueue.size()).toEqual(2)
    })

    it('does not throw error when removing an item', () => {
        expect(() => priorityQueue.dequeue()).not.toThrow()
    })

    it('returns null when removing an item from an empty priority queue', () => {
        expect(priorityQueue.dequeue()).toEqual(null)
    })

    it('returns 0 for the size of priority queue after removing more than added items', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.dequeue()
        priorityQueue.dequeue()
        expect(priorityQueue.size()).toEqual(0)
    })

    it('returns 1 for the size of priority queue after adding two items and removing one', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.dequeue()
        expect(priorityQueue.size()).toEqual(1)
    })

    it('returns the item that has higher priority when removing an item', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.dequeue()).toEqual('a')
    })

    it('adding items at the same time sorting in priority order and removing items also in priority order', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.dequeue()).toEqual('a')
        expect(priorityQueue.dequeue()).toEqual('b')
        expect(priorityQueue.dequeue()).toEqual('c')
    })

    it("returns the highest priority element in priority queue when using 'frontIs' method", () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.frontIs()).toEqual('a')
    })

    it("returns the lowest priority element in priority queue when using 'rearIs' method", () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.rearIs()).toEqual('c')
    })

    it('returns true or false when queue is empty or not', () => {
        expect(priorityQueue.isEmpty()).toEqual(true)
        priorityQueue.enqueue(['c', 3])
        expect(priorityQueue.isEmpty()).toEqual(false)
    })

})