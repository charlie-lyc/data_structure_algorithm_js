const MySet = require('../04-set')

describe('Data Structure: 04-Set', () => {
    let firstSet
    let secondSet
    let thirdSet

    beforeEach(() => {
        firstSet = new MySet()
    })

    it('should have required methods', () => {
        expect(firstSet).toHaveProperty('print')
        expect(firstSet).toHaveProperty('values')
        expect(firstSet).toHaveProperty('size')
        expect(firstSet).toHaveProperty('has')
        expect(firstSet).toHaveProperty('add')
        expect(firstSet).toHaveProperty('remove')
        expect(firstSet).toHaveProperty('union')
        expect(firstSet).toHaveProperty('intersection')
        expect(firstSet).toHaveProperty('difference')
        expect(firstSet).toHaveProperty('isSubset')
        expect(firstSet).toHaveProperty('isEmpty')
    })

    it('not throw error when print a set', () => {
        expect(() => firstSet.print()).not.toThrow()
    })

    it('not throw error when show all values from a set', () => {
        expect(() => firstSet.values()).not.toThrow()
    })

    it('not throw error when measure the size of a set', () => {
        expect(() => firstSet.size()).not.toThrow()
    })

    it('return 0 for the size of a new set', () => {
        expect(firstSet.size()).toEqual(0)
    })

    it('not throw error when check if element exists in a set', () => {
        expect(() => firstSet.has()).not.toThrow()
    })

    it('return false for not given argument when check if element exists', () => {
        expect(firstSet.has()).toBe(false)
    })

    it('return true or false when a set has an element or not', () => {
        firstSet.add('a')
        expect(firstSet.has('a')).toBe(true)
        expect(firstSet.has('b')).toBe(false)
    })

    it('not throw error when add an element', () => {
        expect(() => firstSet.add()).not.toThrow()
    })

    it('return false for not given argument when add an element', () => {
        expect(firstSet.add()).toBe(false)
    })

    it('return true when add an element that not exists in a set', () => {
        expect(firstSet.add('a')).toBe(true)
    })

    it('return false when add an element that exists in a set', () => {
        firstSet.add('a')
        expect(firstSet.add('a')).toBe(false)
    })

    it('not throw error when removing an element', () => {
        expect(() => firstSet.remove()).not.toThrow()
    })

    it('return true when remove an element that exists in a set', () => {
        firstSet.add('a')
        expect(firstSet.remove('a')).toBe(true)
    })

    it('return false when remove an element that not exists in a set', () => {
        expect(firstSet.remove('a')).toBe(false)
    })

    it('return 1 for the size of a set after adding two elements and removing one', () => {
        firstSet.add('a')
        firstSet.add('b')
        firstSet.remove('b')
        expect(firstSet.size()).toEqual(1)
    })

    it('not throw error when find the union set', () => {
        expect(() => firstSet.union()).not.toThrow()
    })

    it('return null for not given argument when find the union set', () => {
        expect(firstSet.union()).toBeNull()
    })

    it('return the union set of other set', () => {
        const secondSet = new MySet()
        firstSet.add('a')
        firstSet.add('b')
        firstSet.add('c')
        secondSet.add('c')
        secondSet.add('d')
        secondSet.add('e')
        const unionSet = firstSet.union(secondSet)
        const expectedResult = ['a', 'b', 'c', 'd', 'e']
        let result = false
        if (unionSet.length === expectedResult.length) {
            result = expectedResult.every(element => unionSet.indexOf(element) !== -1)
        }
        expect(result).toBe(true)
    })

    it('not throw error when find the intersection set', () => {
        expect(() => firstSet.intersection()).not.toThrow()
    })

    it('return null for not given argument when find the intersection set', () => {
        expect(firstSet.intersection()).toBeNull()
    })

    it('return the intersection set of other set', () => {
        const secondSet = new MySet()
        firstSet.add('a')
        firstSet.add('b')
        firstSet.add('c')
        firstSet.add('d')
        secondSet.add('c')
        secondSet.add('d')
        secondSet.add('e')
        secondSet.add('f')
        const intersectionSet = firstSet.intersection(secondSet)
        const expectedResult = ['c', 'd']
        let result = false
        if (intersectionSet.length === expectedResult.length) {
            result = expectedResult.every(element => intersectionSet.indexOf(element) !== -1)
        }
        expect(result).toBe(true)
    })

    it('not throw error when find the difference set', () => {
        expect(() => firstSet.difference()).not.toThrow()
    })

    it('return null for not given argument when find the difference set', () => {
        expect(firstSet.difference()).toBeNull()
    })

    it('return the difference set of other set', () => {
        const secondSet = new MySet()
        firstSet.add('a')
        firstSet.add('b')
        firstSet.add('c')
        firstSet.add('d')
        secondSet.add('c')
        secondSet.add('d')
        secondSet.add('e')
        secondSet.add('f')
        const differenceSet = firstSet.difference(secondSet)
        const expectedResult = ['a', 'b']
        let result = false
        if (differenceSet.length === expectedResult.length) {
            result = expectedResult.every(element => differenceSet.indexOf(element) !== -1)
        }
        expect(result).toBe(true)
    })

    it('not throw error when check if the subset of other set is', () => {
        expect(() => firstSet.isSubset()).not.toThrow()
    })

    it('return null for not given argument when check if the subset of other set is', () => {
        expect(firstSet.difference()).toBeNull()
    })

    it('return true of false when check if the subset of other set is or not', () => {
        const secondSet = new MySet()
        const thirdSet = new MySet()
        firstSet.add('a')
        firstSet.add('b')
        firstSet.add('c')
        secondSet.add('a')
        secondSet.add('b')
        secondSet.add('c')
        secondSet.add('d')
        thirdSet.add('a')
        thirdSet.add('b')
        thirdSet.add('d')
        thirdSet.add('e')
        const result1 = firstSet.isSubset(secondSet)
        const result2 = firstSet.isSubset(thirdSet)
        expect(result1).toBe(true)
        expect(result2).toBe(false)
    })

    it('not throw error when check if set is empty', () => {
        expect(() => firstSet.isEmpty()).not.toThrow()
    })

    it('return true of false when check if set is empty or not', () => {
        expect(firstSet.isEmpty()).toBe(true)
        firstSet.add('a')
        expect(firstSet.isEmpty()).toBe(false)
    })
})