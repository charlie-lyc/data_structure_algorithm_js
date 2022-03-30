/* Trie */
class Node {
    constructor() {
        // Initialize: keys, end

    }

    setEnd() {

    }

    isEnd() {

    }
}

class Trie {
    constructor() {
        // Initialize: root

    }

    add(input, node = this.root) {

    }

    isPresent(word) {

    }

    print() {

    }
}

module.exports = Trie

////////////////////////////////////////////////////////////

const trie = new Trie()
trie.add('ball') 
trie.add('bat') 
trie.add('doll') 
trie.add('dork') 
trie.add('do') 
trie.add('dorm')
trie.add('send')
trie.add('sense')
console.log(trie.print())
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
