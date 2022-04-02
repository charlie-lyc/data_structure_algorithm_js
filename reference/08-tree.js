class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }
}

class Tree {
    constructor() {
        this.root = new Node(null)
    }

    add(data) {
        this.root.children.push(new Node(data))
    }
    
    isPresent(data) {
        const searchTree = (node) => {
            if (node.children.length === 0) {
                return false
            }
            node.children.forEach(child => {
                if (child.data === data) {
                    return true
                }
                searchTree(child)
            })
        }
        return searchTree(this.root)
    }
}