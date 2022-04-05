const Trie = require('../09-trie')

describe('Data Structure: 09-Trie', () => {
    let trie

    beforeEach(() => {
        trie = new Trie()
    })

    it('should have required methods', () => {
        expect(trie).toHaveProperty('add')
        expect(trie).toHaveProperty('isPresent')
        expect(trie).toHaveProperty('printAllWords')
    })

    it('not throw error when add word', () => {
        expect(() => trie.add()).not.toThrow()
    })

    it('return false for the not given argument when add word', () => {
        expect(trie.add()).toBe(false)
    })

    it('return false for being 0 in the length of given argument when check if word exists', () => {
        expect(trie.add('')).toBe(false)
    })

    it('not throw error when check if word exists in trie', () => {
        expect(() => trie.isPresent()).not.toThrow()
    })

    it('return false for the not given argument when check if word exists', () => {
        expect(trie.isPresent()).toBe(false)
    })

    it('return false for being 0 in the length of given argument when check if word exists', () => {
        expect(trie.isPresent('')).toBe(false)
    })

    it('return true or false when check if word exists in trie or not', () => {
        trie.add('ball')
        expect(trie.isPresent('ball')).toBe(true)
        expect(trie.isPresent('bat')).toBe(false)
    })

    it('not throw error when print all words', () => {
        expect(() => trie.printAllWords()).not.toThrow()
    })

    it('return null when print all words from an empty trie', () => {
        expect(trie.printAllWords()).toBeNull()
    })

    it('return the array of words when print all words', () => {
        trie.add('ball') 
        trie.add('bat') 
        trie.add('doll') 
        trie.add('dork') 
        trie.add('do') 
        trie.add('dorm')
        trie.add('send')
        trie.add('sense')
        const words = trie.printAllWords()
        words.forEach(word => 
            expect(trie.isPresent(word)).toBe(true)
        )
    })

})