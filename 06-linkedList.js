class Node {
    constructor(data) {
        // Initialize: data, next

    }
}

class LinkedList {
    constructor() {
        // Initialize: head, length

    }

    _head() {

    }

    size() {

    }

    isEmpty() {

    }

    add(data) {

    }

    remove(data) {

    }

    indexOf(data) {

    }

    dataAt(index) {

    }

    addAt(index, data) {

    }

    removeAt(index) {

    }
}

module.exports = LinkedList

////////////////////////////////////////////////////////////

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