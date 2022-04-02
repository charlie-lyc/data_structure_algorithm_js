const { hashFunction, HashTable } = require('../05-hashTable')

describe('Data Structure: 05-HashTable', () => {
    let hashTable

    beforeEach(() => {
        hashTable = new HashTable(4)
    })

    it('return index less than max limit when use hash function', () => {
        expect(hashFunction('beautiful', 4)).toEqual(1)
        expect(hashFunction('fido', 4)).toEqual(2)
        expect(hashFunction('rex', 4)).toEqual(3)
        expect(hashFunction('tux', 4)).toEqual(1)
    })

    it('should have required methods', () => {
        expect(hashTable).toHaveProperty('print')
        expect(hashTable).toHaveProperty('insert')
        expect(hashTable).toHaveProperty('remove')
        expect(hashTable).toHaveProperty('lookup')
        expect(hashTable).toHaveProperty('resize')
    })

    it('not throw error when print a hash table', () => {
        expect(() => hashTable.print()).not.toThrow()
    })

    it('not throw error when insert value', () => {
        expect(() => hashTable.insert('beautiful', 'person')).not.toThrow()
    })

    it('not throw error when look up key', () => {
        expect(() => hashTable.lookup('beautiful')).not.toThrow()
    })

    it('return undefined when look up key that not exists in a hash table', () => {
        expect(hashTable.lookup('beautiful')).toBeUndefined()
    })

    it('return value when look up key that exists in a hash table', () => {
        hashTable.insert('beautiful', 'person')
        expect(hashTable.lookup('beautiful')).toMatch(/person/)
    })

    it('return the last inserted value when insert different values in same key', () => {
        hashTable.insert('beautiful', 'person')
        hashTable.insert('beautiful', 'world')
        expect(hashTable.lookup('beautiful')).toMatch(/world/)
    })

    it('not throw error when remove key', () => {
        expect(() => hashTable.remove('beautiful')).not.toThrow()
    })

    it('return undefined when look up removed key', () => {
        hashTable.insert('beautiful', 'person')
        expect(hashTable.lookup('beautiful')).toMatch(/person/)
        hashTable.remove('beautiful')
        expect(hashTable.lookup('beautiful')).toBeUndefined()
    })

    it('not throw error when resize a hash table', () => {
        expect(() => hashTable.resize()).not.toThrow()
    })

    it('resize hash table in a new limit size', () => {
        hashTable.insert('beautiful', 'person')
        hashTable.insert('fido', 'dog')
        hashTable.insert('rex', 'dinosaur')
        hashTable.insert('tux', 'penguin')
        hashTable.insert('rex', 'dinosaur')
        hashTable.insert('tux', 'penguin')
        expect(hashTable.storageLimit).toEqual(4)
        expect(hashTable.storage.length).toEqual(4) // only in this case, storage has the key of index 3
        hashTable.resize(6)
        expect(hashTable.storageLimit).toEqual(6)
        expect(hashTable.storage.length).toEqual(6) // only in this case, storage has the key of index 5
    })

})