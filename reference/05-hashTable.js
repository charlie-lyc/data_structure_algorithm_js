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
 * : here is a kind of size-limited 3 dimension array
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

    remove(key) {
        if (key === undefined || typeof key !== 'string' || this.lookup(key) === undefined) {
            return false
        }
        const index = hashFunction(key, this.storageLimit)
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        } else {
            for (let i = 0; i < this.storage[index].length; i ++) {
                if (this.storage[index][i] === undefined) {
                    continue
                }
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i]
                    break
                }
            }
        }
        return true
    }

    resize(newLimit) {
        if (newLimit === undefined || typeof newLimit !== 'number' || newLimit < 1) {
            return false
        }
        this.storageLimit = newLimit
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
        return true
    }
}

console.log(hashFunction('beautiful', 4)) // 1
console.log(hashFunction('fido', 4))      // 2
console.log(hashFunction('rex', 4))       // 3
console.log(hashFunction('tux', 4))       // 1

const ht = new HashTable(4)
ht.print()
console.log(ht.insert())
console.log(ht.lookup())
console.log(ht.remove())
console.log(ht.resize())
console.log(ht.lookup('beautiful'))
console.log(ht.remove('beautiful'))

console.log(ht.insert('beautiful', 'person'))
console.log(ht.insert('beautiful', 'world'))
console.log(ht.insert('fido', 'dog'))
console.log(ht.insert('rex', 'dinosaur'))
console.log(ht.insert('tux', 'penguin'))
ht.print()

console.log(ht.remove('beautiful'))
console.log(ht.remove('rex'))
console.log(ht.remove('tux'))
ht.print()

console.log(ht.lookup('beautiful'))
console.log(ht.lookup('rex'))
console.log(ht.lookup('tux'))
console.log(ht.lookup('fido'))

console.log(ht.insert('beautiful', 'person'))
console.log(ht.insert('rex', 'dinosaur'))
console.log(ht.insert('tux', 'penguin'))
console.log(ht.insert('data', 'structure'))
console.log(ht.insert('helper', 'function'))
console.log(ht.insert('hash', 'table'))
ht.print()

console.log(ht.resize(6))
console.log(ht.storageLimit)
console.log(ht.storage.length) // 6
ht.print()
console.log(ht.lookup('beautiful'))
console.log(ht.lookup('fido'))
console.log(ht.lookup('rex'))
console.log(ht.lookup('tux'))
console.log(ht.lookup('data'))
console.log(ht.lookup('helper'))
console.log(ht.lookup('hash'))

console.log(ht.resize(4))
console.log(ht.storageLimit)
console.log(ht.storage.length) // 4
ht.print()
console.log(ht.lookup('beautiful'))
console.log(ht.lookup('fido'))
console.log(ht.lookup('rex'))
console.log(ht.lookup('tux'))
console.log(ht.lookup('data'))
console.log(ht.lookup('helper'))
console.log(ht.lookup('hash'))
