/* Tree */
class TreeNode {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new TreeNode(data))
    }
    
    isPresent(data) {
        const searchTreeAndIsPresent = (children) => {
            /********************************************************/
            for (const child of children) {
                if (child.data === data) {
                    return true
                }
                const result = searchTreeAndIsPresent(child.children)
                if (result !== false) {
                    return result
                }
            }
            return false
            /********************************************************/
        }
        return searchTreeAndIsPresent(this.children)
    }

    isDuplicated(data) {
        let count = 0
        const searchTreeAndCount = (children) => {
            /*************************************/
            children.forEach(child => {
                if (child.data === data) {
                    count ++
                }
                searchTreeAndCount(child.children)
            })
            /*************************************/
        }
        searchTreeAndCount(this.children)
        if (count >= 2) {
            return true
        }
        return false
    }

    removeEvery(data) {
        const searchTreeAndRemoveEvery = (children) => {
            /******************************************/
            children.forEach(child => {
                if (child.data === data) {
                    child.data = null
                }
                searchTreeAndRemoveEvery(child.children)
            })
            /******************************************/
        }
        searchTreeAndRemoveEvery(this.children)
    }
}

const tree = new TreeNode(null)

console.log(tree.isPresent(5))
tree.add(5)
console.log(tree.isPresent(5))
console.log(tree.children[0].data)

console.log(tree.isPresent(6))
tree.children[0].add(6)
console.log(tree.isPresent(6))
console.log(tree.children[0].data)
console.log(tree.children[0].children[0].data)

tree.children[0].add(5)
console.log(tree.isDuplicated(5))
console.log(tree.children[0].data)
console.log(tree.children[0].children[1].data)

tree.removeEvery(5)
console.log(tree.isDuplicated(5))
console.log(tree.children[0].data)
console.log(tree.children[0].children[1].data)