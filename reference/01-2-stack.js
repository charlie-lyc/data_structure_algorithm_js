/* Stack */ 
// const Stack = function () {
//     this.storage = {}
//     this.top = 0
//
//     this.print() {
//         console.log(this.storage)
//     }
//
//     // Return size of stack
//     this.size = () => {
//         return this.top
//     }
//
//     // Add a value onto the end of stack
//     this.push = (element) => {
//         if (element === undefined) {
//             return false
//         }
//         this.storage[this.top] = element
//         this.top ++
//         return true
//     }
//
//     // Remove and return value at the end of stack
//     this.pop = () => {
//         if (this.top === 0) {
//             return null
//         }
//         const result = this.storage[this.top - 1]
//         delete this.storage[this.top - 1]
//         this.top --
//         return result
//     }
//
//     // Return value at the end of stack
//     this.peek = () => {
//         return this.storage[this.top-1]
//     }
//
//     this.isEmpty() {
//         return this.top === 0
//     }
// }

///////////////////////////////////////////////////
// const Stack = function () {
//     const storage = {}
//     let top = 0
//
//     this.print() {
//         console.log(this.storage)
//     }
//
//     this.size = () => {
//         return top
//     }
//
//     this.push = (element) => {
//         if (element === undefined) {
//             return false
//         }
//         storage[top] = element
//         top ++
//         return true
//     }
//
//     this.pop = () => {
//         if (top === 0) {
//             return null
//         }
//         const result = storage[this.top - 1]
//         delete storage[this.top - 1]
//         top --
//         return result   
//     }
//
//     this.peek = () => {
//         return storage[top-1]
//     }
//
//     this.isEmpty() {
//         return this.top === 0
//     }
// }

///////////////////////////////////////////////////
class Stack {
    constructor() {
        this.storage = {}
        this.top = 0
    }
    print() {
        console.log(this.storage)
    }
    size() {
        return this.top
    }
    push(element) {
        if (element === undefined) {
            return false
        }
        this.storage[this.top] = element
        this.top ++
        return true
    }
    pop() {
        if (this.top === 0) {
            return null
        }
        const result = this.storage[this.top - 1]
        delete this.storage[this.top - 1]
        this.top --
        return result
    }
    peek() {
        return this.storage[this.top-1]
    }
    isEmpty() {
        return this.top === 0
    }
}

const stack = new Stack()
stack.print()
console.log(stack.push())
console.log(stack.pop())

console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

console.log(stack.push('hello'))
console.log(stack.push('world'))
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())