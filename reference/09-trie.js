/* Trie */
class Node {
    constructor() {
        /**
         * Global Object 'Map'
         * : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
         *   
         * - Instance Property: size
         * - Instance Methods: set(key, value), get(key), has(key), delete(key), clear()
         * - Iteration Methods: keys(), values(), entries(), forEach(callback()) 
         */
        this.keys = new Map()
        this.end = false
    }

    setEnd() {
        this.end = true
    }

    isEnd() {
        return this.end
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    add(word, node = this.root) {
        if (word.length === 0) {
            node.setEnd()
            return
        }
        if (!node.keys.has(word[0])) {
            node.keys.set(word[0], new Node())
            this.add(word.substr(1), node.keys.get(word[0]))
        } else {
            this.add(word.substr(1), node.keys.get(word[0]))
        }
    }

    isPresent(word) {
        let _word = word.slice()
        let current = this.root
        while (_word.length > 1) {
            if (!current.keys.has(_word[0])) {
                return false
            } else {
                current = current.keys.get(_word[0])
                _word = _word.substr(1)
            }
        }
        if (current.keys.has(_word) && current.keys.get(_word).isEnd()) {
            return true
        }
        return false
    }

    printAllWords() {
        let words = []
        /********************************************************/
        const searchTrie = (node, string) => {
            if (node.keys.size === 0) {
                if (string.length > 0) {
                    words.push(string)
                }
                return
            }
            if (node.isEnd()) {
                words.push(string)
            }
            for (const key of node.keys.keys()) {
                searchTrie(node.keys.get(key), string.concat(key))
            }
        }
        /********************************************************/
        searchTrie(this.root, '')
        if (words.length > 0) {
            return words
        }
        return null
    }
}

const trie = new Trie()
console.log(trie.printAllWords())
trie.add('ball') 
trie.add('bat') 
trie.add('doll') 
trie.add('dork') 
trie.add('do') 
trie.add('dorm')
trie.add('send')
trie.add('sense')
console.log(trie.printAllWords())
console.log(trie.isPresent('ball'))
console.log(trie.isPresent('bat'))
console.log(trie.isPresent('doll'))
console.log(trie.isPresent('dork'))
console.log(trie.isPresent('do'))
console.log(trie.isPresent('dorm'))
console.log(trie.isPresent('send'))
console.log(trie.isPresent('sense'))
console.log(trie.isPresent('sen'))
console.log(trie.isPresent('hello'))