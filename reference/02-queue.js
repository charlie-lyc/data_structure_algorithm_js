/* Queue */ 
// const Queue = function () {
//     const collection = []
//     let front = 0
//     let rear = 0
//
//     this.print() {
//         console.log(collection)
//     }
//
//     this.enqueue = (element) => {
//         collection.push(element)
//         rear ++
//         return
//     }
//
//     this.dequeue = () => {
//         if (rear === 0) {
//             return null
//         }
//         const result = collection.shift()
//         rear --
//         return result
//     }
//
//     this.frontIs = () => {
//         return collection[front]
//     }
//
//     this.rearIs = () => {
//         return collection[rear - 1]
//     }
//
//     this.size = () => {
//         return rear
//     }
//
//     this.isEmpty = () => {
//         return rear === 0
//     }
// }

///////////////////////////////////////////////////////////////
class Queue {
    constructor() {
        this.collection = []
        this.front = 0
        this.rear = 0
    }
    print() {
        console.log(this.collection)
    }
    enqueue(element) {
        this.collection.push(element)
        this.rear ++
        return
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
    size() {
        return this.rear
    }
    isEmpty() {
        return this.rear === 0
    }
}

const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.print()
console.log(queue.frontIs())
console.log(queue.rearIs())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.dequeue())