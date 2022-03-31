/* Priority Queue */
// const PriorityQueue = function () {
//     const collection = []
//     let front = 0
//     let rear = 0
//
//     this.print = () => {
//         return collection
//     }
//
//     this.enqueue = (item) => { // item: [element, priority]
//         if (this.isEmpty()) {
//             collection.push(item)
//         } else {
//             let added = false
//             for (let i = 0; i < collection.length; i ++) {
//                 if (item[1] < collection[i][1]) {
//                     collection.splice(i, 0, item)
//                     added = true
//                     break
//                 }
//             }
//             if (!added) {
//                 collection.push(item)
//             }
//         }
//         rear ++
//         return
//     }
//
//     this.dequeue = () => {
//         if (rear === 0) {
//             return null
//         }
//         const result = collection.shift()[0]
//         rear --
//         return result
//     }
//
//     this.frontIs = () => {
//         return collection[front][0]
//     }
//
//     this.rearIs = () => {
//         return collection[rear - 1][0]
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
class PriorityQueue {
    constructor() {
        this.collection = []
        this.front = 0
        this.rear = 0
    }
    print() {
        return this.collection
    }
    enqueue(item) { // item: [element, priority]
        if (this.isEmpty()) {
            this.collection.push(item)
        } else {
            let added = false
            for (let i = 0; i < this.collection.length; i ++) {
                if (item[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, item)
                    added = true
                    break
                }
            }
            if (!added) {
                this.collection.push(item)
            }
        }
        this.rear ++
        return
    }
    dequeue() {
        if (this.rear === 0) {
            return null
        }
        const result = this.collection.shift()[0]
        this.rear --
        return result
    }
    frontIs() {
        return this.collection[this.front][0]
    }
    rearIs() {
        return this.collection[this.rear - 1][0]
    }
    size() {
        return this.rear
    }
    isEmpty() {
        return this.rear === 0
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue(['b', 2])
priorityQueue.enqueue(['a', 1])
priorityQueue.enqueue(['a', 3])
console.log(priorityQueue.print())
console.log(priorityQueue.frontIs())
console.log(priorityQueue.rearIs())
console.log(priorityQueue.size())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.isEmpty())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.isEmpty())
console.log(priorityQueue.dequeue())