/* Helper Function */
const hashFunction = (string, max) => {
    let hash = 0
    for (let i = 0; i < string.length; i ++) {
        hash += string.charCodeAt(i)
    }
    return hash % max
}

//////////////////////////////////////////////////////
/**
 * Hash Table
 * : Here is a kind of size-limited 3 dimension array
 */
class HashTable {
    constructor(limit) {
        this.storage = []
        this.storageLimit = limit
    }

    print() {
        console.log(this.storage)
    }

    insert(key, value) {
        if (key === undefined || typeof key !== 'string' || value === undefined ) {
            return false
        }
        const index = hashFunction(key, this.storageLimit)
        if (this.storage[index] === undefined) {
            this.storage[index] = [ [key, value] ]
        } else {
            let inserted = false
            for (let i = 0; i < this.storage[index].length; i ++) {
                if (this.storage[index][i] === undefined) {
                    continue
                }
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value
                    inserted = true
                    break
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value])
            }
        }
        return true
    }

    remove(key) {
        if (key === undefined || typeof key !== 'string' || this.storage.length === 0) {
            return false
        }
        const index = hashFunction(key, this.storageLimit)
        let removed = false
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
            removed = true
        } else {
            for (let i = 0; i < this.storage[index].length; i ++) {
                if (this.storage[index][i] === undefined) {
                    continue
                }
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i]
                    removed = true
                    break
                }
            }
        }
        return removed
    }

    lookup(key) {
        if (key === undefined || typeof key !== 'string' || this.storage.length === 0) {
            return undefined
        }
        const index = hashFunction(key, this.storageLimit)
        if (this.storage[index] === undefined) {
            return undefined
        }
        for (let i = 0; i < this.storage[index].length; i ++) {
            if (this.storage[index][i] === undefined) {
                continue
            }
            if (this.storage[index][i][0] === key) {
                return this.storage[index][i][1]
            }
        }
        return undefined
    }

    resize(newLimit) {
        this.storageLimit = newLimit
        if (this.storage.length !== 0) {
            const newStorage = []
            this.storage.forEach(element => {
                element.forEach(ele => {
                    const index = hashFunction(ele[0], this.storageLimit)
                    if (newStorage[index] === undefined) {
                        newStorage[index] = [ [ele[0], ele[1]] ]
                    } else {
                        newStorage[index].push([ele[0], ele[1]])
                    }
                })
            })
            this.storage = newStorage
        }
        return
    }
}

console.log(hashFunction('beautiful', 4)) // 1
console.log(hashFunction('fido', 4))      // 2
console.log(hashFunction('rex', 4))       // 3
console.log(hashFunction('tux', 4))       // 1

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
hashTable.remove('tux')
hashTable.print()
console.log(hashTable.lookup('rex'))
console.log(hashTable.lookup('tux'))
console.log(hashTable.lookup('fido'))
hashTable.insert('rex', 'dinosaur')
hashTable.insert('tux', 'penguin')
hashTable.resize(6)
console.log(hashTable.storage.length)
hashTable.print()
hashTable.resize(4)
console.log(hashTable.storage.length)
hashTable.print()