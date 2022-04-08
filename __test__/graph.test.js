const Graph = require('../12-Graph')

describe('Data Structure: 12-Graph', () => {
    let graph

    beforeEach(() => {
        graph = new Graph()
    })

    it('should have required methods', () => {
        expect(graph).toHaveProperty('hasNode')
        expect(graph).toHaveProperty('addNode')
        expect(graph).toHaveProperty('hasEdge')
        expect(graph).toHaveProperty('addEdge')
        expect(graph).toHaveProperty('removeNode')
        expect(graph).toHaveProperty('removeEdge')
        expect(graph).toHaveProperty('convertToMatrix')
        expect(graph).toHaveProperty('nodesLengthFrom')
    })

    it('not throw error when check if node exists in a graph', () => {
        expect(() => graph.hasNode()).not.toThrow()
    })

    it('return false for the not given argument when check if node exists in a graph', () => {
        expect(graph.hasNode()).toBe(false)
    })

    it('not throw error when add node to a graph', () => {
        expect(() => graph.addNode()).not.toThrow()
    })

    it('return false for the not given argument when add node', () => {
        expect(graph.addNode()).toBe(false)
    })

    it('return true when add node that not exists in a graph', () => {
        expect(graph.addNode(0)).toBe(true)
    })

    it('return false when add node that exists in a graph', () => {
        graph.addNode(0)
        expect(graph.addNode(0)).toBe(false)
    })

    it('return true or false when check if node exists or not in a graph', () => {
        expect(graph.hasNode(0)).toBe(false)
        graph.addNode(0)
        expect(graph.hasNode(0)).toBe(true)
    })

    it('not throw error when check if edge exists in a graph', () => {
        expect(() => graph.hasEdge()).not.toThrow()
    })

    it('return false for the not given or one argument when check if edge exists in a graph', () => {
        expect(graph.hasEdge()).toBe(false)
        expect(graph.hasEdge(0)).toBe(false)
    })

    it('not throw error when add edge to a graph', () => {
        expect(() => graph.addEdge()).not.toThrow()
    })

    it('return false for the not given argument when add edge', () => {
        expect(graph.addEdge()).toBe(false)
    })

    it('return false for the not given or one argument when add edge', () => {
        expect(graph.addEdge()).toBe(false)
        expect(graph.addEdge(0)).toBe(false)
    })

    it('return false when add edge if two nodes not exist in a graph', () => {
        expect(graph.addEdge(0, 1)).toBe(false)
    })

    it('return true when add edge if two nodes exist and edge not exists in a graph', () => {
        graph.addNode(0)
        graph.addNode(1)
        expect(graph.hasEdge(0, 1)).toBe(false)
        expect(graph.addEdge(0, 1)).toBe(true)
    })

    it('return false when add edge that exists in a graph', () => {
        graph.addNode(0)
        graph.addNode(1)
        graph.addEdge(0, 1)
        expect(graph.hasEdge(0, 1)).toBe(true)
        expect(graph.addEdge(0, 1)).toBe(false)
    })

    it('not throw error when remove node from a graph', () => {
        expect(() => graph.removeNode()).not.toThrow()
    })

    it('return false for the not given argument when remove node', () => {
        expect(graph.removeNode()).toBe(false)
    })

    it('return false when remove node that not exists in a graph', () => {
        expect(graph.removeNode(0)).toBe(false)
    })

    it('return true when remove node that exists in a graph', () => {
        graph.addNode(0)
        expect(graph.removeNode(0)).toBe(true)
    })

    it('not throw error when remove edge from a graph', () => {
        expect(() => graph.removeEdge()).not.toThrow()
    })

    it('return false for the not given argument when remove edge', () => {
        expect(graph.removeEdge()).toBe(false)
    })

    it('return false for the not given or one argument when remove edge', () => {
        expect(graph.removeEdge()).toBe(false)
        expect(graph.removeEdge(0)).toBe(false)
    })

    it('return false when remove edge that not exists in a graph', () => {
        expect(graph.removeEdge(0, 1)).toBe(false)
        graph.addNode(0)
        graph.addNode(1)
        expect(graph.removeEdge(0, 1)).toBe(false)
    })

    it('return true when remove edge that exists in a graph', () => {
        graph.addNode(0)
        graph.addNode(1)
        graph.addEdge(0, 1)
        expect(graph.removeEdge(0, 1)).toBe(true)
    })

    it('not throw error when convert graph to two-dimension array with 0 and 1', () => {
        expect(() => graph.convertToMatrix()).not.toThrow()
    })

    it('possible to convert graph to two-dimension array with 0 and 1', () => {
        graph.addNode(0)
        graph.addNode(1)
        graph.addNode(2)
        graph.addNode(3)
        graph.addNode(4)
        graph.addEdge(0, 1)
        graph.addEdge(0, 1)
        graph.addEdge(0, 2)
        graph.addEdge(0, 3)
        graph.addEdge(1, 2)
        graph.addEdge(2, 0)
        graph.addEdge(2, 1)
        graph.addEdge(4, 1)
        const matrix = graph.convertToMatrix()
        const expectedResult = [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0]
        ]
        let result = undefined
        for (let i = 0; i < expectedResult.length; i ++) {
            for (let j = 0; j < expectedResult[i].length; j ++) {
                if (matrix[i][j] !== expectedResult[i][j]) {
                    result = false
                    break
                } else {
                    if (i === expectedResult.length - 1 && j === expectedResult.length -1) {
                        result = true
                        break
                    }
                }
            }
            if (result !== undefined) {
                break
            }
        }
        expect(result).toBe(true)
    })

    it('not throw error when find the length of nodes from a specific node in a graph', () => {
        expect(() => graph.nodesLengthFrom()).not.toThrow()
    })

    it('return null for the not given argument when find the length of nodes from a specific node', () => {
        expect(graph.nodesLengthFrom()).toBeNull()
    })

    it('return null for the argument of not existing node when find the length of nodes from a specific node', () => {
        expect(graph.nodesLengthFrom(1)).toBeNull()
    })

    it('possible to find the length of nodes from a specific node', () => {
        graph.addNode(0)
        graph.addNode(1)
        graph.addNode(2)
        graph.addNode(3)
        graph.addNode(4)
        graph.addEdge(0, 1)
        graph.addEdge(0, 1)
        graph.addEdge(0, 2)
        graph.addEdge(0, 3)
        graph.addEdge(1, 2)
        graph.addEdge(2, 0)
        graph.addEdge(2, 1)
        graph.addEdge(4, 1)
        const nodesLength = graph.nodesLengthFrom(1)
        const expectedResult = { 
            0: 2, 
            1: 0, 
            2: 1, 
            3: 3, 
            4: Infinity 
        }
        let result = true
        for (const node in expectedResult) {
            if (expectedResult[node] !== nodesLength[node]) {
                result = false
                break
            } else {
                continue
            }
        }
        expect(result).toBe(true)
    })

})