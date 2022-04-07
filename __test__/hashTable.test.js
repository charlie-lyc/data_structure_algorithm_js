const { hashFunction, HashTable } = require('../05-hashTable')

describe('Data Structure: 05-HashTable', () => {
    let ht

    beforeEach(() => {
        ht = new HashTable(4)
    })

    it('return the index less than max limit when use hash function', () => {
        expect(hashFunction('beautiful', 4)).toEqual(1)
        expect(hashFunction('fido', 4)).toEqual(2)
        expect(hashFunction('rex', 4)).toEqual(3)
        expect(hashFunction('tux', 4)).toEqual(1)
    })

    it('should have required methods', () => {
        expect(ht).toHaveProperty('print')
        expect(ht).toHaveProperty('insert')
        expect(ht).toHaveProperty('lookup')
        expect(ht).toHaveProperty('remove')
        expect(ht).toHaveProperty('resize')
    })

    it('not throw error when print a hash table', () => {
        expect(() => ht.print()).not.toThrow()
    })

    it('not throw error when insert value to a hash table', () => {
        expect(() => ht.insert()).not.toThrow()
    })

    it('return false for the not given two or one argument(s) when insert value', () => {
        expect(ht.insert()).toBe(false)
        expect(ht.insert('beautiful')).toBe(false)
    })

    it('return false for the first argument of not string when insert value', () => {
        expect(ht.insert(1, 'person')).toBe(false)
    })

    it('return true for the given argument when insert value', () => {
        expect(ht.insert('beautiful', 'person')).toBe(true)
    })

    it('not throw error when look up key in a hash table', () => {
        expect(() => ht.lookup()).not.toThrow()
    })

    it('return undefined for the not given argument when look up key', () => {
        expect(ht.lookup()).toBeUndefined()
    })

    it('return undefined for the given argument of not string when look up key', () => {
        expect(ht.lookup(1)).toBeUndefined()
    })

    it('return undefined when look up key in an empty hash table', () => {
        expect(ht.lookup('beautiful')).toBeUndefined()
    })

    it('return the value or undefined when look up key that exists or not in a hash table', () => {
        ht.insert('beautiful', 'person')
        expect(ht.lookup('beautiful')).toMatch(/person/)
        expect(ht.lookup('fido')).toBeUndefined()
    })

    it('return the last inserted value when insert different values in same key', () => {
        ht.insert('beautiful', 'person')
        ht.insert('beautiful', 'world')
        expect(ht.lookup('beautiful')).toMatch(/world/)
    })

    it('not throw error when remove key from a hash table', () => {
        expect(() => ht.remove()).not.toThrow()
    })

    it('return false for the not given argument when remove key', () => {
        expect(ht.remove()).toBe(false)
    })

    it('return false for the given argument of not string when remove key', () => {
        expect(ht.remove(1)).toBe(false)
    })

    it('return false when remove key that not exists in a hash table', () => {
        expect(ht.remove('beautiful')).toBe(false)
    })

    it('return true when remove key that exists in a hash table', () => {
        ht.insert('beautiful', 'person')
        expect(ht.remove('beautiful')).toBe(true)
    })

    it('return undefined when look up removed key', () => {
        ht.insert('beautiful', 'person')
        ht.insert('fido', 'dog')
        ht.insert('rex', 'dinosaur')
        ht.insert('tux', 'penguin')
        ht.remove('beautiful')
        ht.remove('rex')
        ht.remove('tux')
        expect(ht.lookup('beautiful')).toBeUndefined()
        expect(ht.lookup('rex')).toBeUndefined()
        expect(ht.lookup('tux')).toBeUndefined()
        expect(ht.lookup('fido')).toMatch(/dog/)
    })

    it('not throw error when resize a hash table', () => {
        expect(() => ht.resize()).not.toThrow()
    })

    it('return false for the not given argument when resize a hash table', () => {
        expect(ht.resize()).toBe(false)
    })

    it('return false for the given argument of not number when resize a hash table', () => {
        expect(ht.resize('beautiful')).toBe(false)
    })

    it('return false for the given argument of number less than 1 when resize a hash table', () => {
        expect(ht.resize(-1)).toBe(false)
        expect(ht.resize(0)).toBe(false)
    })

    it('return true for the given argument of number when resize a hash table', () => {
        expect(ht.resize(6)).toBe(true)
    })

    it('possible to resize the hash table in a new limit size', () => {
        ht.insert('beautiful', 'person')
        ht.insert('fido', 'dog')
        ht.insert('rex', 'dinosaur')
        ht.insert('tux', 'penguin')
        ht.insert('data', 'structure')
        ht.insert('helper', 'function')
        ht.insert('hash', 'table')
        expect(ht.lookup('beautiful')).toMatch(/person/)
        expect(ht.lookup('fido')).toMatch(/dog/)
        expect(ht.lookup('rex')).toMatch(/dinosaur/)
        expect(ht.lookup('tux')).toMatch(/penguin/)
        expect(ht.lookup('data')).toMatch(/structure/)
        expect(ht.lookup('helper')).toMatch(/function/)
        expect(ht.lookup('hash')).toMatch(/table/)
        expect(ht.storageLimit).toEqual(4)
        expect(ht.storage.length).toEqual(4)
        ht.resize(6)
        expect(ht.lookup('beautiful')).toMatch(/person/)
        expect(ht.lookup('fido')).toMatch(/dog/)
        expect(ht.lookup('rex')).toMatch(/dinosaur/)
        expect(ht.lookup('tux')).toMatch(/penguin/)
        expect(ht.lookup('data')).toMatch(/structure/)
        expect(ht.lookup('helper')).toMatch(/function/)
        expect(ht.lookup('hash')).toMatch(/table/)
        expect(ht.storageLimit).toEqual(6)
        expect(ht.storage.length).toEqual(6)
    })

})