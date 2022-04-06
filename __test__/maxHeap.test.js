const MaxHeap = require('../11-maxHeap')

describe('Data Structure: 11-MaxHeap', () => {
    let maxHeap 

    beforeEach(() => {
        maxHeap = new MaxHeap()
    })

    it('should have required methods', () => {
        expect(maxHeap).toHaveProperty('print')
        expect(maxHeap).toHaveProperty('insert')
        expect(maxHeap).toHaveProperty('removeGreatest')
        expect(maxHeap).toHaveProperty('sort')
    })

    it('not throw error when print max heap', () => {
        expect(() => maxHeap.print()).not.toThrow()
    })

    it('return the array with only null element when print a newly generated heap', () => {
        expect(maxHeap.print().length).toEqual(1)
        expect(maxHeap.print()[0]).toBeNull()
    })

    it('not throw error when insert number to max heap', () => {
        expect(() => maxHeap.insert()).not.toThrow()
    })

    it('return false for the not given argument when insert number', () => {
        expect(maxHeap.insert()).toBe(false)
    })

    it("return false for the argument of not 'number' type when insert number", () => {
        expect(maxHeap.insert('a')).toBe(false)
    })

    it('return the array with null and added number when insert number', () => {
        maxHeap.insert(4)
        expect(maxHeap.print().length).toEqual(2)
        expect(maxHeap.print()[0]).toBeNull()
        expect(maxHeap.print()[1]).toEqual(4)
    })

    it('not throw error when remove the greatest number from max heap', () => {
        expect(() => maxHeap.removeGreatest()).not.toThrow()
    })

    it('return null when remove the greatest number from a newly generated min heap', () => {
        expect(maxHeap.removeGreatest()).toBeNull()
    })

    it('return the greatest number when remove the greatest number', () => {
        maxHeap.insert(8)
        maxHeap.insert(10)
        maxHeap.insert(5)
        maxHeap.insert(16)
        maxHeap.insert(3)
        maxHeap.insert(1)
        expect(maxHeap.print()[0]).toBeNull()
        expect(maxHeap.print()[1]).toEqual(16)
        expect(maxHeap.removeGreatest()).toEqual(16)
        expect(maxHeap.print()[1]).not.toEqual(16)
    })

    it('not throw error when sort max heap', () => {
        expect(() => maxHeap.sort()).not.toThrow()
    })

    it('return null when sort a newly generated max heap', () => {
        expect(maxHeap.sort()).toBeNull()
    })

    it('return the sorted array without null element when sort max heap', () => {
        maxHeap.insert(8)
        maxHeap.insert(10)
        maxHeap.insert(5)
        maxHeap.insert(16)
        maxHeap.insert(3)
        maxHeap.insert(1)
        const sortedMaxHeap = maxHeap.sort()
        expect(sortedMaxHeap).not.toContain(null)
        const expectedResult = [ 16, 10, 8, 5, 3, 1 ]
        let result = false
        if (sortedMaxHeap.length === expectedResult.length) {
            for (let i = 0; i < expectedResult.length; i ++) {
                if (sortedMaxHeap[i] !== expectedResult[i]) {
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