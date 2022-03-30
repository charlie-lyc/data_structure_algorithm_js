const hashFunction = (string, max) => {
    // Start initializing: hash
    // And use 'string.charCodeAt()' and '%'

}

class HashTable {
    constructor(limit) {
        // Initialize: storage, storageLimit

    }

    print() {

    }

    insert(key, value) {

    }

    remove(key) {

    }

    lookup(key) {

    }

    resize(newLimit) {

    }
}

module.exports = HashTable

////////////////////////////////////////////////////////////
console.log(hashFunction('beautiful', 4))

const hashTable = new HashTable(4)
hashTable.insert('beautiful', 'person')
hashTable.insert('beautiful', 'world')
hashTable.print()
hashTable.insert('fido', 'dog')
hashTable.insert('rex', 'dinosaur')
hashTable.insert('tux', 'penguin')
hashTable.print()
hashTable.remove('rex')
hashTable.remove('tux')
hashTable.print()
console.log(hashTable.lookup('rex'))
console.log(hashTable.lookup('tux'))
console.log(hashTable.lookup('fido'))
hashTable.insert('rex', 'dinosaur')
hashTable.insert('tux', 'penguin')
hashTable.resize(7)
hashTable.print()

/* Helper Function */
// function hashFunction (string, max) => {
//     let hash = 0
//     for (let i = 0; i < string.length; i ++) {
//         hash += string.charCodeAt(i)
//     }
//     return hash % max
// }