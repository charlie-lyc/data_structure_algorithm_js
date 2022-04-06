/* Linked List */
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    _head() {
        return this.head
    }

    size() {
        return this.length
    }

    isEmpty() {
        return this.length === 0
    }

    add(data) {
        if (data === undefined) {
            return false
        }
        const node = new Node(data)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.length ++
        return true
    }

    indexOf(data) {
        if (data === undefined || this.head === null) {
            return -1
        }
        let current = this.head
        let index = 0
        while (current !== null) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index ++
        }
        return -1
    }

    remove(data) {
        if (this.indexOf(data) === -1) {
            return false
        }
        let current = this.head
        if (current.data === data) {
            this.head = current.next
            this.length --
        } else if (current.data !== data) {
            let previous
            while (current.next !== null) {
                previous = current
                current = current.next
                if (current.data === data) {
                    previous.next = current.next
                    this.length --
                    break
                }
            }
        }
        return true
    }

    dataAt(index) {
        if (index === undefined) {
            return undefined
        }
        if (0 > index || index > this.length - 1) {
            return undefined
        }
        let current = this.head
        let currentIndex = 0
        while (current !== null) {
            if (currentIndex === index) {
                return current.data
            }
            current = current.next
            currentIndex ++
        }
    }

    addAt(index, data) {
        if (index === undefined || data === undefined) {
            return false
        }
        if (0 > index || index > this.length) {
            return false
        }
        const node = new Node(data)
        let current = this.head
        if (index === 0) {
            if (this.head === null) {
                this.head = node
            } else if (this.head !== null) {
                node.next = current
                this.head = node
            }
            this.length ++
        } else if (index !== 0) {
            let previous
            let currentIndex = 0
            while (current !== null) {
                previous = current
                current = current.next
                currentIndex ++
                if (currentIndex === index) {
                    node.next = current
                    previous.next = node
                    this.length ++
                    break
                }
            }
        }
        return true
    }

    removeAt(index) {
        if (index === undefined) {
            return false
        }
        if (0 > index || index > this.length - 1) {
            return false
        }
        let current = this.head
        if (index === 0) {
            if (this.head !== null) {
                if (current.next === null) {
                    this.head = null
                } else if (current.next !== null) {
                    this.head = current.next
                }
                this.length --
            }
        } else if (index !== 0) {
            let previous
            let currentIndex = 0
            while (current !== null) {
                previous = current
                current = current.next
                currentIndex ++
                if (currentIndex === index) {
                    previous.next = current.next
                    this.length --
                    break
                }
            }
        }
        return true
    }
}

const linkedList = new LinkedList()

console.log(linkedList._head())
console.log(linkedList.size())
console.log(linkedList.isEmpty())
console.log(linkedList.add())
console.log(linkedList.remove())
console.log(linkedList.remove('Kitten'))
console.log(linkedList.indexOf('Kitten'))
console.log(linkedList.dataAt())
console.log(linkedList.dataAt(0))
console.log(linkedList.addAt())
console.log(linkedList.addAt(1, 'Kitten'))
console.log(linkedList.removeAt())
console.log(linkedList.removeAt(0))

console.log(linkedList.addAt(0, 'Kitten'))
console.log(linkedList.removeAt(0))

console.log(linkedList.add('Kitten'))
console.log(linkedList.add('Puppy'))
console.log(linkedList.add('Dog'))
console.log(linkedList.add('Cat'))
console.log(linkedList.add('Fish'))
console.log(linkedList.isEmpty())

console.log(linkedList.remove('Kitten'))
console.log(linkedList.remove('Fish'))
console.log(linkedList._head())
console.log(linkedList.size())

console.log(linkedList.indexOf('Puppy'))
console.log(linkedList.indexOf('Dog'))
console.log(linkedList.indexOf('Cat'))

console.log(linkedList.dataAt(0))
console.log(linkedList.dataAt(1))
console.log(linkedList.dataAt(2))

console.log(linkedList.addAt(0, 'Kitten'))
console.log(linkedList.indexOf('Kitten'))
console.log(linkedList.addAt(4, 'Fish'))
console.log(linkedList.indexOf('Fish'))

console.log(linkedList.addAt(-1, 'hello'))
console.log(linkedList.indexOf('hello'))
console.log(linkedList.addAt(6, 'hello'))
console.log(linkedList.indexOf('hello'))

console.log(linkedList.dataAt(0))
console.log(linkedList.removeAt(0))
console.log(linkedList.dataAt(0))
console.log(linkedList.dataAt(3))
console.log(linkedList.removeAt(3))
console.log(linkedList.dataAt(3))