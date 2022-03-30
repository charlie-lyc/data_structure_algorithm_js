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
        return
    }

    remove(data) {
        if (this.head === null) {
            return
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
        return
    }

    indexOf(data) {
        if (this.head === null) {
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

    dataAt(index) {
        if (0 > index || index > this.length - 1) {
            return undefined
        }
        if (this.head === null) {
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
        return undefined
    }

    addAt(index, data) {
        if (0 > index || index > this.length) {
            return
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
            if (this.head === null) {
                return
            }
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
        return

    }

    removeAt(index) {
        if (0 > index || index > this.length - 1) {
            return
        }
        let current = this.head
        if (index === 0) {
            if (this.head === null) {
                return 
            } else if (this.head !== null) {
                if (current.next === null) {
                    this.head = null
                } else if (current.next !== null) {
                    this.head = current.next
                }
                this.length --
                return
            }
        }
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
        return
    }
}

const linkedList = new LinkedList()

console.log(linkedList.isEmpty())
linkedList.add('Kitten')
linkedList.add('Puppy')
linkedList.add('Dog')
linkedList.add('Cat')
linkedList.add('Fish')
console.log(linkedList.isEmpty())
console.log(linkedList._head())
console.log(linkedList.size())
linkedList.remove('Kitten')
linkedList.remove('Fish')
linkedList.remove('Fish')
console.log(linkedList._head())
console.log(linkedList.size())

console.log(linkedList.indexOf('Puppy'))
console.log(linkedList.indexOf('Dog'))
console.log(linkedList.indexOf('Cat'))
console.log(linkedList.indexOf('Kitten'))

console.log(linkedList.dataAt(0))
console.log(linkedList.dataAt(1))
console.log(linkedList.dataAt(2))
console.log(linkedList.dataAt(3))

linkedList.addAt(0, 'Kitten')
console.log(linkedList.indexOf('Kitten'))
linkedList.addAt(4, 'Fish')
console.log(linkedList.indexOf('Fish'))

linkedList.addAt(-1, 'hello')
console.log(linkedList.indexOf('hello'))
linkedList.addAt(6, 'hello')
console.log(linkedList.indexOf('hello'))