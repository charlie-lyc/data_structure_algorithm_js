// class Graph {
//     constructor() {
//         // Initialize: nodes

//     }

//     hasNode(node) {

//     }

//     addNode(node) {

//     }

//     hasEdge(from, to){

//     }

//     addEdge(from, to) {

//     }   

//     removeNode(node) {

//     }

//     removeEdge(from, to) {

//     }

//     convertToMatrix() {

//     }

//     nodeLengthFrom(rootNode) {

//     }
// }

class Graph {
    constructor() {
        this.nodes = {}
        /**
         * ex) 
         *      nodes = {
         *          0: [ 1, 2 ],
         *          1: [ 0 ],
         *          2: [ 1 ]
         *      }
         */
    }

    hasNode(node) {
        if (node === undefined) {
            return false
        }
        return node in this.nodes
    }

    addNode(node) {
        if (node === undefined) {
            return false
        }
        if (!this.hasNode(node)) {
            this.nodes[node] = []
            return true
        }
        return false
        /////////////////////////////////////////////
        // this.nodes[node] = this.nodes[node] || []
        // return
    }

    hasEdge(from, to){
        if (from === undefined || to === undefined) {
            return false
        }
        if (this.hasNode(from) && this.hasNode(to)) {
            if (this.nodes[from].indexOf(to) !== -1) {
                return true
            }
        }
        return false
        /////////////////////////////////////////////////////////////////////////////////////////////
        // return (from in this.nodes) && (to in this.nodes) && (this.nodes[from].indexOf(to) !== -1)
    }

    addEdge(from, to) {
        if (from === undefined || to === undefined) {
            return false
        }
        if (this.hasNode(from) && this.hasNode(to) && !this.hasEdge(from, to)) {
            this.nodes[from].push(to)
            return true
        }
        return false
    }   

    removeNode(node) {
        if (node === undefined) {
            return false
        }
        if (this.hasNode(node)) {
            delete this.nodes[node]
            return true
        }
        return false
    }

    removeEdge(from, to) {
        if (from === undefined || to === undefined) {
            return false
        }
        if (this.hasEdge(from, to)) {
            const index = this.nodes[from].indexOf(to)
            this.nodes[from].splice(index, 1)
            return true
        }
        return false
    }

    convertToMatrix() {
        const length = Object.keys(this.nodes).length
        const matrix = []
        for (let i = 0; i < length; i ++) {
            matrix[i] = []
            for (let j = 0; j < length; j++) {
                matrix[i].push(0)
            }
        }
        for (const from in this.nodes) {
            for (const to of this.nodes[from]) {
                matrix[from][to] = 1
            }
            if (matrix[from].every(element => element === 0)) {
                matrix[from][from] = 1
            }
        }
        return matrix
    }

    /**
     * Breadth First Search(BFS) in Graph
     */
    /* Length of nodes from root node */
    nodesLengthFrom(rootNode) {
        if (rootNode === undefined || !this.hasNode(rootNode)) {
            return null
        }
        const matrix = this.convertToMatrix()
        const nodesLength = {}
        for (let i = 0; i < matrix.length; i ++) {
            /**
             * Global Property: Infinity
             */
            nodesLength[i] = Infinity
        }
        nodesLength[rootNode] = 0
        const queue = [ rootNode ]
        let current
        while (queue.length !== 0) {
            current = queue.shift()
            const neighborIndices = []
            /**
             * Array.prototype.indexOf(searchElement, fromIndex = 0)
             * : return the index of 'First' searched element from specific index(default 0)
             */
            let index = matrix[current].indexOf(1)
            while (index !== -1) {
                neighborIndices.push(index)
                index = matrix[current].indexOf(1, index + 1)
            }
            for (let j = 0; j < neighborIndices.length; j ++) {
                if (nodesLength[neighborIndices[j]] === Infinity) {
                    nodesLength[neighborIndices[j]] = nodesLength[current] + 1
                    queue.push(neighborIndices[j])
                }
            }
        }
        return nodesLength
    }
}

module.exports = Graph

//////////////////////////////////////////////////

// const graph = new Graph()
// console.log(graph.hasNode())
// console.log(graph.hasNode(0))
// console.log(graph.addNode())
// console.log(graph.hasEdge())
// console.log(graph.hasEdge(0))
// console.log(graph.hasEdge(0, 1))
// console.log(graph.addEdge())
// console.log(graph.addEdge(0))
// console.log(graph.addEdge(0, 1))
// console.log(graph.removeNode())
// console.log(graph.removeNode(0))
// console.log(graph.removeEdge())
// console.log(graph.removeEdge(0))
// console.log(graph.removeEdge(0, 1))
// console.log(graph.lengthFrom())
// console.log(graph.lengthFrom(0))

// console.log(graph.addNode(0))
// console.log(graph.addNode(0))
// console.log(graph.addNode(1))
// console.log(graph.addNode(2))
// console.log(graph.addNode(3))
// console.log(graph.addNode(4))
// console.log(graph.nodes)                 // { 0: [], 1: [], 2: [], 3: [], 4: [] }
// console.log(graph.addEdge(0, 1))
// console.log(graph.addEdge(0, 1))
// console.log(graph.addEdge(0, 2))
// console.log(graph.addEdge(0, 3))
// console.log(graph.addEdge(1, 2))
// console.log(graph.addEdge(2, 0))
// console.log(graph.addEdge(2, 1))
// console.log(graph.addEdge(4, 1))
// console.log(graph.nodes)                 // { 0: [1, 2, 3], 1: [2], 2: [0, 1], 3: [], 4: [1] }

// console.log(graph.removeNode(4))
// console.log(graph.nodes)                 // { 0: [1, 2, 3], 1: [2], 2: [0, 1], 3: []}
// console.log(graph.removeEdge(2, 1)) 
// console.log(graph.nodes)                 // { 0: [1, 2, 3], 1: [2], 2: [0], 3: [] }

// graph.addNode(4)
// graph.addEdge(4, 1)
// graph.addEdge(2, 1)
// console.log(graph.nodes)                 // { 0: [1, 2, 3], 1: [2], 2: [0, 1], 3: [], 4: [1] }

// console.log(graph.convertToMatrix())     // [ [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0] ]
// console.log(graph.nodesLengthFrom(1)) // { 0: 2, 1: 0, 2: 1, 3: 3, 4: Infinity }