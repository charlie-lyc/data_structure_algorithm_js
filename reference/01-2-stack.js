/* Stacks */ 
// const Stack = function () {
//     this.storage = {}
//     this.top = 0
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
//         this.top --
//         const result = this.storage[this.top]
//         delete this.storage[this.top]
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
// }

///////////////////////////////////////////////////
// const Stack = function () {
//     const storage = {}
//     let top = 0
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
//         top --
//         const result = storage[top]
//         delete storage[top]
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
// }

///////////////////////////////////////////////////
class Stack {
    constructor() {
        this.storage = {}
        this.top = 0
    }
    push(element) {
        this.storage[this.top] = element
        this.top ++
    }
    pop() {
        if (this.top === 0) {
            return null
        }
        this.top --
        const result = this.storage[this.top]
        delete this.storage[this.top]
        return result
    }
    peek() {
        return this.storage[this.top-1]
    }
    size() {
        return this.top
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.push('hello')
stack.push('world')
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())