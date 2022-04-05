/* Priority Queue */
class PriorityQueue {
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

    enqueue(item) { // item: [element, priority]
        if (item === undefined) {
            return false
        }
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
        return true
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

    isEmpty() {
        return this.rear === 0
    }
}

const pq = new PriorityQueue()
pq.print()
console.log(pq.size())
console.log(pq.enqueue())
console.log(pq.dequeue())

console.log(pq.enqueue(['c', 3]))
console.log(pq.enqueue(['a', 1]))
console.log(pq.enqueue(['b', 2]))
console.log(pq.enqueue(['d', 4]))
console.log(pq.frontIs())
console.log(pq.rearIs())
console.log(pq.size())

console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.isEmpty())
console.log(pq.dequeue())
console.log(pq.isEmpty())
console.log(pq.dequeue())