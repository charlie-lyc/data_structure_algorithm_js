const LinkedList = require('../06-linkedList')

describe('Data Structure: 06-LinkedList', () => {
    let linkedList

    beforeEach(() => {
        linkedList = new LinkedList()
    })

    it('not throw error when show the head of a linked list', () => {
        expect(() => linkedList._head()).not.toThrow()
    })

    it('return 0 for the size of an empty linked list', () => {
        expect(linkedList.size()).toEqual(0)
    })

    it('not throw error when add data', () => {
        expect(() => linkedList.add()).not.toThrow()
    })

    it('return true of false when a linked list is empty or not', () => {
        expect(linkedList.isEmpty()).toBeTruthy()
        linkedList.add('Kitten')
        expect(linkedList.isEmpty()).toBeFalsy()
    })

    it('return 1 for the size of linked list when add data once to an empty linked list', () => {
        linkedList.add('Kitten')
        expect(linkedList.size()).toEqual(1)
    })

    it('not throw error when remove data', () => {
        expect(() => linkedList.remove()).not.toThrow()
    })

    it('return 1 for the size of linked list after adding data twice and removing data once', () => {
        linkedList.add('Kitten')
        linkedList.add('Puppy')
        linkedList.remove('Kitten')
        expect(linkedList.size()).toEqual(1)
    })

    it('not throw error when find index of specific data', () => {
        expect(() => linkedList.indexOf()).not.toThrow()
    })

    it('return the index or -1 when data exists in a linked list or not', () => {
        linkedList.add('Kitten')
        expect(linkedList.indexOf('Kitten')).toEqual(0)
        expect(linkedList.indexOf('Fish')).toEqual(-1)
    })

    it('not throw error when find data at specific index', () => {
        expect(() => linkedList.dataAt()).not.toThrow()
    })

    it('return the data or undefined when index is within the range or not', () => {
        linkedList.add('Kitten')
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
        expect(linkedList.dataAt(1)).toBeUndefined()
    })

    it('not throw error when add data at specific index', () => {
        expect(() => linkedList.addAt()).not.toThrow()
    })

    it('data not exist in a linked list when add data at index out of the range', () => {
        linkedList.addAt(1, 'Kitten')
        expect(linkedList.dataAt(1)).toBeUndefined()
    })

    it('possible to add data at specific index', () => {
        linkedList.addAt(0, 'Kitten')
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
        linkedList.addAt(0, 'Puppy')
        expect(linkedList.dataAt(0)).toMatch(/Puppy/)
    })

    it('not throw error when remove data at specific index', () => {
        expect(() => linkedList.removeAt()).not.toThrow()
    })

    it('data not change in a linked list when remove data at index out of the range', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        linkedList.remove(2)
        expect(linkedList.dataAt(0)).toMatch(/Kitten/)
        expect(linkedList.dataAt(1)).toMatch(/Puppy/)
    })

    it('possible to remove data at specific index ', () => {
        linkedList.addAt(0, 'Kitten')
        linkedList.addAt(1, 'Puppy')
        linkedList.removeAt(0)
        expect(linkedList.size()).toEqual(1)
    })

})