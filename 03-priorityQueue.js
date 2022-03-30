class PriorityQueue {
    constructor() {
        // Initialize: collection, front, rear

    }

    print() {

    }

    enqueue(element) {

    }

    dequeue() {

    }

    frontIs() {

    }

    rearIs() {

    }

    size() {

    }

    isEmpty() {

    }
}

module.exports = PriorityQueue

/////////////////////////////////////////////////////////////

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue(['c', 3])
priorityQueue.enqueue(['b', 2])
priorityQueue.enqueue(['a', 1])
console.log(priorityQueue.print())
console.log(priorityQueue.frontIs())
console.log(priorityQueue.rearIs())
console.log(priorityQueue.size())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.isEmpty())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.isEmpty())