/* Min Heap */
class MinHeap {
    constructor() {
        this.heap = [null]
    }

    print() {
        return this.heap
    }
    
    insert(number) {
        if (number === undefined || typeof number !== 'number') {
            return false
        }
        this.heap.push(number)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1
            while (this.heap[index] < this.heap[Math.floor(index/2)]) {
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
        return true
    }

    removeSmallest() {
        const smallest = this.heap[1]
        if (this.heap.length === 2) {
            /**
             * splice(): mutable method
             * slice(): immutable method
             */
            this.heap.splice(1, 1)
        } else if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1) 
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [ this.heap[1], this.heap[2] ] = [ this.heap[2], this.heap[1] ]
                }
            } else {
                let index = 1
                let left = index * 2
                let right = index * 2 + 1
                while (this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right]) {
                    if (this.heap[left] < this.heap[right]) {
                        [ this.heap[index], this.heap[left] ] = [ this.heap[left], this.heap[index] ]
                        index = index * 2
                    } else if (this.heap[left] >= this.heap[right]) {
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
        return smallest
    }

    sort() {
        const result = []
        while (this.heap.length > 1) {
            result.push(this.removeSmallest())
        }
        if (result.length > 0) {
            return result
        }
        return null
    }
}

const minHeap = new MinHeap()
console.log(minHeap.insert())
console.log(minHeap.insert('a'))
console.log(minHeap.print())          // [ null ]
console.log(minHeap.removeSmallest()) // null
console.log(minHeap.sort())           // null

console.log(minHeap.insert(4))
console.log(minHeap.removeSmallest()) // 4
console.log(minHeap.insert(6))
console.log(minHeap.removeSmallest()) // 6

console.log(minHeap.insert(8))
console.log(minHeap.insert(10))
console.log(minHeap.insert(5))
console.log(minHeap.insert(16))
console.log(minHeap.insert(3))
console.log(minHeap.insert(1))
console.log(minHeap.print()) // [ null, 1, 5, 3, 16, 10, 8 ]
console.log(minHeap.sort())  // [ 1, 3, 5, 8, 10, 16 ]

////////////////////////////////////////////////////////////////////////
/**
 * Min Heap - Tree Representation
 * <insert order> 4, 6, 8, 10, 5, 16, 3, 1
 */
//                         1
//                 3               4
//           5         6     16         8
//     10
/**
 * Min Heap - Array Representation 
 *  - Parent: index
 *  - Left Child: index * 2
 *  - Right Child: index * 2 + 1
 */
//       | null |  1  |  3  |  4 |  5  |  6  |  16  |  8  |  10  | ... |
// index   0       1     2     3    4     5     6      7     8     ...
//                p1   p1.l  p1.r   
//                      p2        p2.l  p2.r
//                            p3              p3.l   p3.r
//                                 p4                      p4.l
/**
 * Min Heap Visualization
 * : https://www.cs.usfca.edu/~galles/visualization/Heap.htm)
 */