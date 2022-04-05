/* Queue */ 
class Queue {
    constructor() {
        this.collection = []
        this.front = 0
        this.rear = 0
    }

    print() {
        console.log(this.collection)
    }

    size() {
        return this.rear
    }

    enqueue(element) {
        if (element === undefined) {
            return false
        }
        this.collection.push(element)
        this.rear ++
        return true
    }

    dequeue() {
        if (this.rear === 0) {
            return null
        }
        const result = this.collection.shift()
        this.rear --
        return result
    }
    
    frontIs() {
        return this.collection[this.front]
    }

    rearIs() {
        return this.collection[this.rear - 1]
    }

    isEmpty() {
        return this.rear === 0
    }
}

const queue = new Queue()
queue.print()
console.log(queue.size())
console.log(queue.enqueue())
console.log(queue.dequeue())

console.log(queue.enqueue('a'))
console.log(queue.enqueue('b'))
console.log(queue.frontIs())
console.log(queue.rearIs())
console.log(queue.size())

console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.dequeue())