/* Set */
// const MySet = function () {
//     // 'collection' hold set
//     const collection = []
//
//     this.print = () => {
//         console.log(collection)
//     }
//
//     // Check for presence of an element and return true or false
//     this.has = (element) => {
//         return collection.indexOf(element) !== -1
//     }
//
//     // Return all values in set
//     this.values = () => {
//         return collection
//     }
//
//     // Return size of collection
//     this.size = () => {
//         return collection.length
//     }
//
//     // Add an element to set
//     this.add = (element) => {
//         if (!this.has(element)) {
//             collection.push(element)
//             return true
//         }
//         return false
//     }
//
//     // Remove an element from set
//     this.remove = (element) => {
//         if (this.has(element)) {
//             const index = collection.indexOf(element)
//             collection.splice(index, 1)
//             return true
//         }
//         return false
//     }
//
//     // Return union of two sets as new set
//     this.union = (otherSet) => {
//         const unionSet = []
//         const firstSet = this.values()
//         firstSet.forEach(e => unionSet.push(e))
//         const secondSet = otherSet.values()
//         secondSet.forEach(e => {
//             if (unionSet.indexOf(e) === -1) {
//                 unionSet.push(e)
//             }
//         })
//         return unionSet
//     }
//
//     // Return intersection of two sets as new set
//     this.intersection = (otherSet) => {
//         const intersectionSet = []
//         const firstSet = this.values()
//         firstSet.forEach(e => {
//             if (otherSet.has(e)) {
//                 intersectionSet.push(e)
//             }
//         })
//         return intersectionSet
//     }
//
//     // Return difference of two sets as a new set
//     this.difference = (otherSet) => {
//         const differenceSet = []
//         const firstSet = this.values()
//         firstSet.forEach(e => {
//             if (!otherSet.has(e)) {
//                 differenceSet.push(e)
//             }
//         })
//         const secondSet = otherSet.values()
//         secondSet.forEach(e => {
//             if (!this.has(e)) {
//                 differenceSet.push(e)
//             }
//         })
//         return differenceSet
//     }
//
//     // Test if set is subset of other set
//     this.subset = (otherSet) =>{
//         const firstSet = this.values()
//         return firstSet.every(e => otherSet.has(e))
//     }
//
//     this.isEmpty = () => {
//         return collection.length === 0
//     }
// }

// const firstSet = new MySet()
// console.log(firstSet.isEmpty())
// firstSet.add(1)
// firstSet.add(2)
// firstSet.add(3)
// firstSet.print()
// console.log(firstSet.add(5))
// console.log(firstSet.add(5))
// console.log(firstSet.has(5))
// console.log(firstSet.remove(5))
// console.log(firstSet.remove(5))
// console.log(firstSet.has(5))
// console.log(firstSet.size())
// console.log(firstSet.values())
// const secondSet = new MySet()
// secondSet.add(3)
// secondSet.add(5)
// secondSet.add(6)
// console.log(secondSet.values())
// console.log(firstSet.union(secondSet))
// console.log(firstSet.intersection(secondSet))
// console.log(firstSet.difference(secondSet))
// const thirdSet = new MySet()
// thirdSet.add(1)
// thirdSet.add(2)
// thirdSet.add(3)
// thirdSet.add(5)
// console.log(firstSet.subset(thirdSet))
// console.log(secondSet.subset(thirdSet))

//////////////////////////////////////////////////////////
class MySet {
    constructor() {
        this.collection = []
    }
    print() {
        console.log(this.collection)
    }
    values() {
        return this.collection
    }
    size() {
        return this.collection.length
    }
    has(element) {
        if (element === undefined) {
            return false
        }
        return this.collection.indexOf(element) !== -1
    }
    add(element) {
        if (element === undefined) {
            return false
        }
        if (!this.has(element)) {
            this.collection.push(element)
            return true
        }
        return false
    }
    remove(element) {
        if (element === undefined) {
            return false
        }
        if (this.has(element)) {
            const index = this.collection.indexOf(element)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }
    union(otherSet) {
        if (otherSet === undefined) {
            return null
        }
        const unionSet = []
        const firstSet = this.values()
        firstSet.forEach(e => unionSet.push(e))
        const secondSet = otherSet.values()
        secondSet.forEach(e =>{
            if (unionSet.indexOf(e) === -1) {
                unionSet.push(e)
            }
        })
        return unionSet
    }
    intersection(otherSet) {
        if (otherSet === undefined) {
            return null
        }
        const intersectionSet = []
        const firstSet = this.values()
        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.push(e)
            }
        })
        return intersectionSet
    }
    difference(otherSet) {
        if (otherSet === undefined) {
            return null
        }
        const differenceSet = []
        const firstSet = this.values()
        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.push(e)
            }
        })
        return differenceSet
    }
    isSubset(otherSet) {
        if (otherSet === undefined) {
            return false
        }
        const firstSet = this.values()
        return firstSet.every(e => otherSet.has(e))
    }
    isEmpty() {
        return this.collection.length === 0
    }
}

const firstSet = new MySet()
firstSet.print()
console.log(firstSet.values())
console.log(firstSet.size())
console.log(firstSet.has())
console.log(firstSet.add())
console.log(firstSet.remove())
console.log(firstSet.union())
console.log(firstSet.union(new MySet()))
console.log(firstSet.intersection())
console.log(firstSet.intersection(new MySet()))
console.log(firstSet.difference())
console.log(firstSet.difference(new MySet()))
console.log(firstSet.isSubset())
console.log(firstSet.isSubset(new MySet()))
console.log(firstSet.isEmpty())

console.log(firstSet.add('a'))
console.log(firstSet.add('a'))
console.log(firstSet.add('b'))
console.log(firstSet.add('c'))
console.log(firstSet.add('d'))
console.log(firstSet.has('d'))
console.log(firstSet.remove('d'))
console.log(firstSet.remove('d'))
console.log(firstSet.values())
console.log(firstSet.size())
console.log(firstSet.has('d'))

const secondSet = new MySet()
console.log(secondSet.isSubset(firstSet))
console.log(secondSet.add('c'))
console.log(secondSet.add('d'))
console.log(secondSet.add('f'))
console.log(firstSet.values())
console.log(firstSet.union(secondSet))
console.log(firstSet.union(new MySet()))
console.log(firstSet.intersection(secondSet))
console.log(firstSet.intersection(new MySet()))
console.log(firstSet.difference(secondSet))
console.log(firstSet.difference(new MySet()))
console.log(firstSet.isSubset(secondSet))
console.log(firstSet.isSubset(new MySet()))

const thirdSet = new MySet()
console.log(thirdSet.add('a'))
console.log(thirdSet.add('b'))
console.log(thirdSet.add('c'))
console.log(thirdSet.add('d'))
console.log(thirdSet.add('e'))
console.log(firstSet.isSubset(thirdSet))
console.log(secondSet.isSubset(thirdSet))
