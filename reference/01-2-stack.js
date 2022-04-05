/* Stack */ 
// const Stack = function () {
//     this.storage = {}
//     this.top = 0
//
//     this.print() {
//         console.log(this.storage)
//     }
//
//     // Add a value onto the end of stack
//     this.push = (value) => {
//         this.storage[this.top] = value
//         this.top ++
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
//     // Return size of stack
//     this.size = () => {
//         return this.top
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
//     // Add a value onto the end of stack
//     this.push = (value) => {
//         storage[top] = value
//         top ++
//     }
//
//     // Remove and return value at the end of stack
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
//     // Return value at the end of stack
//     this.peek = () => {
//         return storage[top-1]
//     }
//
//     // Return size of stack
//     this.size = () => {
//         return top
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
        this.storage[this.top] = element
        this.top ++
        return
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
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
stack.push('hello')
stack.push('world')
stack.print()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())