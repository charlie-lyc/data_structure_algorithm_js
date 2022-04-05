const PriorityQueue = require('../03-priorityQueue')

describe('Data Structure: 03-PriorityQueue', () => {
    let pq

    beforeEach(() => {
        pq = new PriorityQueue()
    })

    it('should have required methods', () => {
        expect(pq).toHaveProperty('print')
        expect(pq).toHaveProperty('size')
        expect(pq).toHaveProperty('enqueue')
        expect(pq).toHaveProperty('dequeue')
        expect(pq).toHaveProperty('frontIs')
        expect(pq).toHaveProperty('rearIs')
        expect(pq).toHaveProperty('isEmpty')
    })

    it('not throw error when print a priority queue', () => {
        expect(() => pq.print()).not.toThrow()
    })

    it('not throw error when measure the size of a priority queue', () => {
        expect(() => pq.size()).not.toThrow()
    })

    it('return 0 for the size of a new priority queue', () => {
        expect(pq.size()).toEqual(0)
    })

    it('not throw error when add an item', () => {
        expect(() => pq.enqueue()).not.toThrow()
    })

    it('return 2 for the size of priority queue after adding two items', () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        expect(pq.size()).toEqual(2)
    })

    it('not throw error when remove an item', () => {
        expect(() => pq.dequeue()).not.toThrow()
    })

    it('return null when remove an item from an empty priority queue', () => {
        expect(pq.dequeue()).toBeNull()
    })

    it('return 0 for the size of priority queue after removing more than added items', () => {
        pq.enqueue(['c', 3])
        pq.dequeue()
        pq.dequeue()
        expect(pq.size()).toEqual(0)
    })

    it('return 1 for the size of priority queue after adding two items and removing one', () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        pq.dequeue()
        expect(pq.size()).toEqual(1)
    })

    it("return the highest priority's element when remove an item", () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        pq.enqueue(['b', 2])
        expect(pq.dequeue()).toMatch(/a/)
    })

    it('adding items at the same time sorting in priority order and removing items also in priority order', () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        pq.enqueue(['b', 2])
        expect(pq.dequeue()).toMatch(/a/)
        expect(pq.dequeue()).toMatch(/b/)
        expect(pq.dequeue()).toMatch(/c/)
    })

    it("return the highest priority's element when use 'frontIs' method including 'front' property", () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        pq.enqueue(['b', 2])
        expect(pq.frontIs()).toMatch(/a/)
    })

    it("return the lowest priority's element when use 'rearIs' method including 'rear' property", () => {
        pq.enqueue(['c', 3])
        pq.enqueue(['a', 1])
        pq.enqueue(['b', 2])
        expect(pq.rearIs()).toMatch(/c/)
    })

    it('not throw error when check if priority queue is empty', () => {
        expect(() => pq.isEmpty()).not.toThrow()
    })

    it('returns true or false when priority queue is empty or not', () => {
        expect(pq.isEmpty()).toBe(true)
        pq.enqueue(['c', 3])
        expect(pq.isEmpty()).toBe(false)
    })

})