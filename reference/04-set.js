/* Set */
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
console.log(firstSet.has('d'))
console.log(firstSet.values())
console.log(firstSet.size())

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
console.log(thirdSet.add('f'))
console.log(firstSet.isSubset(thirdSet))
console.log(secondSet.isSubset(thirdSet))
