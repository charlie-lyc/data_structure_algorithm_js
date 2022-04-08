const LinkedList = require('../06-linkedList')

describe('Data Structure: 06-LinkedList', () => {
    let linkedList

    beforeEach(() => {
        linkedList = new LinkedList()
    })

    it('should have required methods', () => {
        expect(linkedList).toHaveProperty('_head')
        expect(linkedList).toHaveProperty('size')
        expect(linkedList).toHaveProperty('isEmpty')
        expect(linkedList).toHaveProperty('add')
        expect(linkedList).toHaveProperty('remove')
        expect(linkedList).toHaveProperty('indexOf')
        expect(linkedList).toHaveProperty('dataAt')
        expect(linkedList).toHaveProperty('addAt')
        expect(linkedList).toHaveProperty('removeAt')
    })

    it('not throw error when show the head of a linked list', () => {
        expect(() => linkedList._head()).not.toThrow()
    })

    it('not throw error when measure the size of a linked list', () => {
        expect(() => linkedList.size()).not.toThrow()
    })

    it('return 0 for the size of an empty linked list', () => {
        expect(linkedList.size()).toEqual(0)
    })

    it('not throw error when check if linked list is empty', () => {
        expect(() => linkedList.isEmpty()).not.toThrow()
    })

    it('not throw error when add data to a linked list', () => {
        expect(() => linkedList.add()).not.toThrow()
    })

    it('return false for the not given argument when add data', () => {
        expect(linkedList.add()).toBe(false)
    })

    it('return true for the given argument when add data', () => {
        expect(linkedList.add('Kitten')).toBe(true)
    })

    it('return true or false when a linked list is empty or not', () => {
        expect(linkedList.isEmpty()).toBe(true)
        linkedList.add('Kitten')
        expect(linkedList.isEmpty()).toBe(false)
    })

    it('return 1 for the size of linked list when add data once to an empty linked list', () => {
        linkedList.add('Kitten')
        expect(linkedList.size()).toEqual(1)
    })

    it('not throw error when find the index of specific data', () => {
        expect(() => linkedList.indexOf()).not.toThrow()
    })

    it('return -1 for the not given argument when find the index of specific data', () => {
        expect(linkedList.indexOf()).toEqual(-1)
    })

    it('return -1 when find the index of specific data from an empty linked list', () => {
        expect(linkedList.indexOf('Kitten')).toEqual(-1)
    })

    it('return the index or -1 when data exists in a linked list or not', () => {
        linkedList.add('Kitten')
        linkedList.add('Puppy')
        expect(linkedList.indexOf('Kitten')).toEqual(0)
        expect(linkedList.indexOf('Puppy')).toEqual(1)
        expect(linkedList.indexOf('Fish')).toEqual(-1)
    })

    it('not throw error when remove data from a linked list', () => {
        expect(() => linkedList.remove()).not.toThrow()
    })

    it('return false for the not given argument when remove data', () => {
        expect(linkedList.remove()).toBe(false)
    })

    it('return false when remove data that not exist in a linked list', () => {
        expect(linkedList.remove('Kitten')).toBe(false)
    })

    it('return true when remove data that exist in a linked list', () => {
        linkedList.add('Kitten')
        expect(linkedList.remove('Kitten')).toBe(true)
    })

    it('return 1 for the size of linked list after adding data twice and removing data once', () => {
        linkedList.add('Kitten')
        linkedList.add('Puppy')
        linkedList.remove('Kitten')
        expect(linkedList.size()).toEqual(1)
    })

    it('not throw error when find the data at specific index', () => {
        expect(() => linkedList.dataAt()).not.toThrow()
    })

    it('return undefined for the not given argument when find the data at specific index', () => {
        expect(linkedList.dataAt()).toBeUndefined()
    })

    it('return undefined when find the data at specific index out of the range', () => {
        linkedList.add('Kitten')
        expect(linkedList.dataAt(1)).toBeUndefined()
    })

    it('return the data when find it at specific index within the range', () => {
        linkedList.add('Kitten')
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
    })

    it('not throw error when add data at specific index', () => {
        expect(() => linkedList.addAt()).not.toThrow()
    })

    it('return false for the not given or one argument when add data at specific index', () => {
        expect(linkedList.addAt()).toBe(false)
        expect(linkedList.addAt(1)).toBe(false)
    })

    it('return false when add data at specific index out of the range', () => {
        expect(linkedList.addAt(1, 'Kitten')).toBe(false)
        expect(linkedList.addAt(2, 'Kitten')).toBe(false)
    })

    it('data not change in a linked list when add data at specific index out of the range', () => {
        linkedList.addAt(1, 'Kitten')
        linkedList.addAt(2, 'Puppy')
        expect(linkedList.dataAt(0)).toBeUndefined()
        expect(linkedList.dataAt(1)).toBeUndefined()
        expect(linkedList.dataAt(2)).toBeUndefined()
    })

    it('return true when add data at specific index within the range', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        expect(linkedList.addAt(0, 'Kitten')).toBe(true)
        expect(linkedList.addAt(1, 'Puppy')).toBe(true)
    })

    it('possible to add data at specific index within the range', () => {
        linkedList.addAt(0, 'Kitten')
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
        linkedList.addAt(0, 'Puppy')
        expect(linkedList.dataAt(0)).toMatch(/Puppy/)
    })

    it('not throw error when remove data at specific index', () => {
        expect(() => linkedList.removeAt()).not.toThrow()
    })

    it('return false for the not given argument when remove data at specific index', () => {
        expect(linkedList.removeAt()).toBe(false)
    })

    it('return false when remove data at specific index out of the range', () => {
        expect(linkedList.removeAt(1)).toBe(false)
        expect(linkedList.removeAt(2)).toBe(false)
    })

    it('data not change in a linked list when remove data at specific index out of the range', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        linkedList.removeAt(2)
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
        expect(linkedList.dataAt(1)).toMatch(/Puppy/)
    })

    it('return true when remove data at specific index within the range', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        expect(linkedList.removeAt(1)).toBe(true)
        expect(linkedList.removeAt(0)).toBe(true)
    })

    it('possible to remove data at specific index within the range', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        linkedList.removeAt(0)
        expect(linkedList.dataAt(0)).toMatch(/Puppy/)
    })

})