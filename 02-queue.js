/* Queue */ 
class Queue {
    constructor() {
        // Initialization: collection, front, rear
        
    }

    print() {

    }

    enqueue(element) {

    }

    dequeue() {

    }

    front() {
        
    }

    rear() {

    }

    size() {
        
    }

    isEmpty() {
        
    }
}

module.exports = Queue

/////////////////////////////////////////////////////////////

const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
console.log(queue.print())
console.log(queue.frontIs())
console.log(queue.rearIs())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.isEmpty())