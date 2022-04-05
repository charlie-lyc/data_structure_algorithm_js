/* Graph: Breadth First Search */
class BFSGraph {
    constructor(graph, root) {
        this.graph = graph
        this.root = root
    }

    nodes() {
        const nodesLength = {}
        for (let i = 0; i < this.graph.length; i++) {
            /**
             * Global Property: Infinity
             */
            nodesLength[i] = Infinity
        }
        nodesLength[this.root] = 0
        const queue = [this.root]
        let current
        while (queue.length !== 0) {
            current = queue.shift()
            const currentConnected = this.graph[current]
            const neighborIndices = []
            /**
             * Array.prototype.indexOf(searchElement, fromIndex = 0)
             * : return the index of 'First' searched element from specific index(default 0)
             */
            let index = currentConnected.indexOf(1)
            while (index !== -1) {
                neighborIndices.push(index)
                index = currentConnected.indexOf(1, index + 1)
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

const exampleDirectedGraph = [
//   0  1  2  3  4
    [0, 1, 1, 1, 0],// 0
    [0, 0, 1, 0, 0],// 1
    [1, 1, 0, 0, 0],// 2
    [0, 0, 0, 1, 0],// 3
    [0, 1, 0, 0, 0] // 4
]
//      0 ---> 1 <---- 4
//     ^  \   ^
//     |   \ /
//     |   /\
//     v v   v 
//     2     3

const bfsGraph = new BFSGraph(exampleDirectedGraph, 1)
console.log(bfsGraph.nodes())
/* Nodes Length from Node '1' */
// {
//     0: 2,
//     1: 0, 
//     2: 1,
//     3: 3,
//     4: Infinity
// }

/////////////////////////////////////////////////////////////////
/**
 * Graph:
 *  - Undirected Graphs: social-network
 *  - Directed Graphs: internet
 */

/**
 * Graph Representation:
 *  - Adjacency List
 *  - Adjacency Matrix
 *  - Incidence Matrix
 */

/* Adjacency List Graph */
// Nodes  a - b - c
//
// Node a: Node b
// Node b: Node a, Node c
// Node c: Node b
// 
// const undirectedGraph = {
//     Node a: [ 'Node b' ],
//     Node b: [ 'Node a', 'Node c'],
//     Node c: [ 'Node b' ]
// }
//
// Nodes   a - b - c
// Number  0   1   2
//
// const undirectedGraphArray = {
//     [1],   // Node a
//     [0, 2],// Node b
//     [1],   // Node c
// }

/* Adjacency Matrix Graph: Undirected */
// Nodes    a - b - c
//
// Edge     a   b   c
// Node a   0   1   0
// Node b   1   0   1
// Node c   0   1   0
//
// const adjacencyMatrixUndirected = [
//     [ 0, 1, 0 ],
//     [ 1, 0, 1 ],
//     [ 0, 1, 0 ]
// ]

/* Adjacency Matrix Graph: Directed */
// Nodes a <- b <- c
//
// const adjacencyMatrixDirected = [
//     [ 0, 0, 0 ],
//     [ 1, 0, 0 ],
//     [ 0, 1, 0 ]
// ]

/* Incidence Matrix Graph: Undirected */
//           1
// Node a --------  Node b
//      | \         /
//   4 |   \ 3    / 2
//    |     \   /
// Node d   Node c
//
//    1  2  3  4
// a  1  0  1  1
// b  1  1  0  0
// c  0  1  1  0
// d  0  0  0  1
//
// const incidenceMatrixUndirected = [
//     [1, 0, 1, 1],
//     [1, 1, 0, 0],
//     [0, 1, 1, 0],
//     [0, 0, 0, 1]
// ]

/* Incidence Matrix Graph: Directed */
//           1
// Node a --------> Node b
//     | ^         /
//  4 |   \ 3    / 2
//   v     \    v
// Node d   Node c
//
//     1   2   3   4
// a   1   0  -1   1
// b  -1   1   0   0
// c   0  -1   1   0
// d   0   0   0  -1
//
// const incidenceMatrixDirected = [
//     [ 1,  0, -1,  1],
//     [-1,  1,  0,  0],
//     [ 0, -1,  1,  0],
//     [ 0,  0,  0, -1]
// ]
