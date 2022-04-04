const MinHeap = require('../10-minHeap')

describe('Data Structure: 10-MinHeap', () => {
    let minHeap

    beforeEach(() => {
        minHeap = new MinHeap()
    })

    it('should have required methods', () => {
        expect(minHeap).toHaveProperty('print')
        expect(minHeap).toHaveProperty('insert')
        expect(minHeap).toHaveProperty('removeSmallest')
        expect(minHeap).toHaveProperty('sort')
    })

    it('not throw error when print min heap', () => {
        expect(() => minHeap.print()).not.toThrow()
    })

    it('return the array with only null element when print an empty min heap', () => {
        expect(minHeap.print().length).toEqual(1)
        expect(minHeap.print()[0]).toBeNull()
    })

    it('not throw error when insert number', () => {
        expect(() => minHeap.insert()).not.toThrow()
    })

    it('return the array with null and added number when insert number to min heap', () => {
        minHeap.insert(4)
        expect(minHeap.print().length).toEqual(2)
        expect(minHeap.print()[0]).toBeNull()
        expect(minHeap.print()[1]).toEqual(4)
    })

    it('not throw error when remove the smallest number', () => {
        expect(() => minHeap.removeSmallest()).not.toThrow()
    })

    it('return the smallest number when remove the smallest number', () => {
        minHeap.insert(8)
        minHeap.insert(10)
        minHeap.insert(5)
        minHeap.insert(16)
        minHeap.insert(3)
        minHeap.insert(1)
        expect(minHeap.print()[0]).toBeNull()
        expect(minHeap.print()[1]).toEqual(1)
        expect(minHeap.removeSmallest()).toEqual(1)
        expect(minHeap.print()[1]).not.toEqual(1)
    })

    it('not throw error when sort min heap', () => {
        expect(() => minHeap.sort()).not.toThrow()
    })

    it('return null when sort an empty min heap', () => {
        expect(minHeap.sort()).toBeNull()
    })

    it('return the sorted array without null element when sort min heap', () => {
        minHeap.insert(8)
        minHeap.insert(10)
        minHeap.insert(5)
        minHeap.insert(16)
        minHeap.insert(3)
        minHeap.insert(1)
        const sortedMinHeap = minHeap.sort()
        expect(sortedMinHeap).not.toContain(null)
        const expectedResult = [ 1, 3, 5, 8, 10, 16 ]
        let result = false
        if (sortedMinHeap.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (sortedMinHeap[i] !== expectedResult[i]) {
                    break
                } else {
                    if (i === expectedResult.length - 1) {
                        result = true
                        break
                    }
                }
            }
        }
        expect(result).toBe(true)
    })
})