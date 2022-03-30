class MySet {
    constructor() {
        // Initialize: collection

    }

    has(element) {

    }

    values() {

    }

    size() {

    }

    add(element) {

    }

    remove(element) {

    }

    union(otherSet) {

    }

    intersection(otherSet) {

    }

    difference(otherSet) {

    }

    subset(otherSet) {

    }
}

module.exports = Set

//////////////////////////////////////////////////////////////

const firstSet = new MySet()
firstSet.add('a')
firstSet.add('b')
firstSet.add('c')
firstSet.add('d')
console.log(firstSet.has('d'))
console.log(firstSet.remove('d'))
console.log(firstSet.has('d'))
console.log(firstSet.size())
console.log(firstSet.values())
const secondSet = new MySet()
secondSet.add('c')
secondSet.add('d')
secondSet.add('f')
console.log(secondSet.values())
console.log(firstSet.union(secondSet))
console.log(firstSet.intersection(secondSet))
console.log(firstSet.difference(secondSet))
const thirdSet = new MySet()
thirdSet.add('a')
thirdSet.add('b')
thirdSet.add('c')
thirdSet.add('d')
thirdSet.add('e')
console.log(firstSet.subset(thirdSet))
console.log(secondSet.subset(thirdSet))
