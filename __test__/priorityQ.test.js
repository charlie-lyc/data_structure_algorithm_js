const PriorityQueue = require('../03-priorityQueue')

describe('Data Structure: 03-PriorityQueue', () => {
    let priorityQueue

    beforeEach(() => {
        priorityQueue = new PriorityQueue()
    })

    it('not throw error when print a priority queue', () => {
        expect(() => priorityQueue.print()).not.toThrow()
    })

    it('return 0 for the size of a new priority queue', () => {
        expect(priorityQueue.size()).toEqual(0)
    })

    it('not throw error when add an item', () => {
        expect(() => priorityQueue.enqueue()).not.toThrow()
    })

    it('return 2 for the size of priority queue after adding two items', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        expect(priorityQueue.size()).toEqual(2)
    })

    it('not throw error when remove an item', () => {
        expect(() => priorityQueue.dequeue()).not.toThrow()
    })

    it('return null when remove an item from an empty priority queue', () => {
        expect(priorityQueue.dequeue()).toBeNull()
    })

    it('return 0 for the size of priority queue after removing more than added items', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.dequeue()
        priorityQueue.dequeue()
        expect(priorityQueue.size()).toEqual(0)
    })

    it('return 1 for the size of priority queue after adding two items and removing one', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.dequeue()
        expect(priorityQueue.size()).toEqual(1)
    })

    it("return the highest priority's element when remove an item from priority queue", () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.dequeue()).toMatch(/a/)
    })

    it('adding items at the same time sorting in priority order and removing items also in priority order', () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.dequeue()).toMatch(/a/)
        expect(priorityQueue.dequeue()).toMatch(/b/)
        expect(priorityQueue.dequeue()).toMatch(/c/)
    })

    it("return the highest priority's element when use 'frontIs' method including 'front' property", () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.frontIs()).toMatch(/a/)
    })

    it("return the lowest priority's element when use 'rearIs' method including 'rear' property", () => {
        priorityQueue.enqueue(['c', 3])
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 2])
        expect(priorityQueue.rearIs()).toMatch(/c/)
    })

    it('returns true or false when queue is empty or not', () => {
        expect(priorityQueue.isEmpty()).toBeTruthy()
        priorityQueue.enqueue(['c', 3])
        expect(priorityQueue.isEmpty()).toBeFalsy()
    })

})