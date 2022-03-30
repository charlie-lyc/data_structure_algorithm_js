/* Max Heaps */
class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    print() {
        return this.heap
    }

    insert(num) {
        this.heap.push(num)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1
            while (this.heap[index] > this.heap[Math.floor(index/2)]) {
                if (index >= 1) {
                    [ this.heap[Math.floor(index/2)], this.heap[index] ] = [ this.heap[index], this.heap[Math.floor(index/2)] ]
                    if (Math.floor(index/2) > 1) {
                        index = Math.floor(index/2)
                    } else {
                        break
                    }
                }
            }
        }
        return
    }

    removeGreatest() {
        const greatest = this.heap[1]
        if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            /**
             * splice(): mutable method
             * slice(): immutable method
             */
            this.heap.splice(this.heap.length - 1) 
            if (this.heap.length === 3) {
                if (this.heap[1] < this.heap[2]) {
                    [ this.heap[1], this.heap[2] ] = [ this.heap[2], this.heap[1] ]
                }
            } else {
                let index = 1
                let left = index * 2
                let right = index * 2 + 1
                while (this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                    if (this.heap[left] > this.heap[right]) {
                        [ this.heap[index], this.heap[left] ] = [ this.heap[left], this.heap[index] ]
                        index = index * 2
                    } else if (this.heap[left] <= this.heap[right]) {
                        [ this.heap[index], this.heap[right] ] = [ this.heap[right], this.heap[index] ]
                        index = index * 2 + 1
                    }
                    left = index * 2
                    right = index * 2 + 1
                    if (this.heap[left] === undefined || this.heap[right] === undefined) {
                        break
                    }
                }
            }
        } else {
            return null
        }
        return greatest
    }   

    sort() {
        const result = []
        while (this.heap.length > 1) {
            result.push(this.removeGreatest())
        }
        return result
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(4)
maxHeap.insert(6)
maxHeap.insert(8)
maxHeap.insert(10)
maxHeap.insert(5)
maxHeap.insert(16)
maxHeap.insert(3)
maxHeap.insert(1)
console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
// console.log(maxHeap.removeGreatest())
// console.log(maxHeap.print())
console.log(maxHeap.sort())

////////////////////////////////////////////////////////////////////////
/**
 * Max Heap - Tree Representation
 * <insert order> 4, 6, 8, 10, 5, 16, 3, 1
 */
//                         16
//                 8               10
//           4         5      6         3
//     1
/**
 * Max Heap - Array Representation 
 *  - Parent: index
 *  - Left Child: index * 2
 *  - Right Child: index * 2 + 1
 */
//       | null |  16  |  8  |  10 |  4  |  5  |  6  |  3  |  1  | ... |
// index   0       1      2     3     4    5      6     7     8     ...
//                p1    p1.l  p1.r   
//                       p2         p2.l  p2.r
//                             p3               p3.l  p3.r
//                                   p4                     p4.l