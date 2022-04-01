const { expect } = require('@jest/globals')
const MySet = require('../04-set.js')

describe('Data Structure: 03-Set', () => {
    let firstSet
    let secondSet
    let thirdSet

    beforeEach(() => {
        firstSet = new MySet()
    })

    it('not throw error when print a set', () => {
        expect(() => firstSet.print()).not.toThrow()
    })

    it('not throw error when show all values from a set', () => {
        expect(() => firstSet.values()).not.toThrow()
    })

    it('return 0 for the size of a new set', () => {
        expect(firstSet.size()).toEqual(0)
    })

    it('not throw error when add an element', () => {
        expect(() => firstSet.add()).not.toThrow()
    })

    it('return true when add an element that not exists in a set', () => {
        expect(firstSet.add('a')).toBeTruthy()
    })

    it('return false when add an element that exists in a set', () => {
        firstSet.add('a')
        expect(firstSet.add('a')).toBeFalsy()
    })

    it('not throw error when removing an element', () => {
        expect(() => firstSet.remove()).not.toThrow()
    })

    it('return true when remove an element that exists in a set', () => {
        firstSet.add('a')
        expect(firstSet.remove('a')).toBeTruthy()
    })

    it('return false when remove an element that not exists in a set', () => {
        expect(firstSet.remove('a')).toBeFalsy()
    })

    it('return 1 for the size of a set after adding two elements and removing one', () => {
        firstSet.add('a')
        firstSet.add('b')
        firstSet.remove('b')
        expect(firstSet.size()).toEqual(1)
    })

    it('return true or false when a set has an element or not', () => {
        firstSet.add('a')
        expect(firstSet.has('a')).toBeTruthy()
        expect(firstSet.has('b')).toBeFalsy()
    })

    it('not throw error when find the union set', () => {
        const otherSet = new MySet()
        expect(() => firstSet.union(otherSet)).not.toThrow()
    })

    it('not throw error when find the intersection set', () => {
        const otherSet = new MySet()
        expect(() => firstSet.intersection(otherSet)).not.toThrow()
    })

    it('not throw error when find the difference set', () => {
        const otherSet = new MySet()
        expect(() => firstSet.difference(otherSet)).not.toThrow()
    })

    it('not throw error when check if the subset is or not', () => {
        const otherSet = new MySet()
        expect(() => firstSet.subset(otherSet)).not.toThrow()
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
        expect(result).toBeTruthy()
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
        expect(result).toBeTruthy()
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
        expect(result).toBeTruthy()
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
        const result1 = firstSet.subset(secondSet)
        const result2 = firstSet.subset(thirdSet)
        expect(result1).toBeTruthy()
        expect(result2).toBeFalsy()
    })
})