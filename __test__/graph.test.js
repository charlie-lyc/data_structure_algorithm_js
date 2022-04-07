const { expect } = require('@jest/globals')
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

    it('not throw error when check if node exists in graph', () => {
        expect(() => graph.hasNode()).not.toThrow()
    })

    it('not throw error when add node', () => {
        expect(() => graph.addNode()).not.toThrow()
    })

    it('not throw error when check if edge exists in graph', () => {
        expect(() => graph.hasEdge()).not.toThrow()
    })

    it('not throw error when add edge', () => {
        graph.addNode(0)
        graph.addNode(1)
        expect(() => graph.addEdge()).not.toThrow()
    })

    it('not throw error when remove node', () => {
        expect(() => graph.removeNode()).not.toThrow()
    })

    it('not throw error when remove edge', () => {
        expect(() => graph.removeEdge()).not.toThrow()
    })

    it('not throw error when convert graph to matrix', () => {
        expect(() => graph.convertToMatrix()).not.toThrow()
    })

    it('not throw error when find the length from a node', () => {
        expect(() => graph.bfsGraphLengthFrom()).not.toThrow()
    })

    it('return the array with only null element when print an empty max heap', () => {

    })

    it('return the array with null and added number when insert number to max heap', () => {

    })

    it('return the greatest number when remove the greatest number', () => {

    })

    it('return null when sort an empty max heap', () => {

    })

    it('return the sorted array without null element when sort max heap', () => {

    })
})